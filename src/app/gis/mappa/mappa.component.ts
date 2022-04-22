import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { View, Map, Overlay } from 'ol';
import { ScaleLine, defaults as DefaultControls } from 'ol/control';

import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Projection from 'ol/proj/Projection';
import { get as GetProjection } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import { Style, Fill, Stroke } from 'ol/style';
import { defaults as defaultInteractions, Draw, Modify } from 'ol/interaction';
import CircleStyle from 'ol/style/Circle';
import Polygon from 'ol/geom/Polygon';
import LineString from 'ol/geom/LineString';
import { getArea, getLength } from 'ol/sphere';
import { unByKey } from 'ol/Observable';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectionListChange } from '@angular/material/list';
import Circle from 'ol/geom/Circle';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from './info/info.component';
import { getPointResolution, get as getProjection } from 'ol/proj';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.scss'],
})
export class MappaComponent {
  view!: View;
  projection!: Projection;
  Map!: Map;
  infoActivated: boolean = false;

  markerSource: VectorSource<Point> = new VectorSource();
  measureSource = new VectorSource();
  measureDraw!: Draw;
  freeHandDraw!: Draw;
  infoModal: any;

  freeHandSource = new VectorSource({ wrapX: false });

  layers = {
    openlayer: {
      title: 'Openlayer',
      tile: new TileLayer({
        source: new OSM({}),
        visible: true,
      }),
    },
    civico: {
      title: 'Civico',
      tile: new TileLayer({
        source: new TileWMS({
          url: '/geoserver/' + environment.keycloak.realm + '/wms',
          params: {
            LAYERS: '' + environment.keycloak.realm + ':civico',
            TILED: true,
          },
          serverType: 'geoserver',
        }),
        visible: false,
      }),
    },
    sostegno_ipi: {
      title: 'Sostegno IPI',
      tile: new TileLayer({
        source: new TileWMS({
          url: '/geoserver/' + environment.keycloak.realm + '/wms',
          params: {
            LAYERS: '' + environment.keycloak.realm + ':sostegno_ipi',
            TILED: true,
          },
          serverType: 'geoserver',
        }),
        visible: false,
      }),
    },
  };
  constructor(
    private zone: NgZone,
    private cd: ChangeDetectorRef,
    private _translateService: TranslateService,
    private _http: HttpClient,
    public dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => this.initMap());
  }

  change(event: MatSelectionListChange) {
    event.source.options.map((s) => {
      (this.layers as any)[s.value.key].tile.setVisible(s.selected);
    });
  }

  private initMap(): void {
    this.projection = GetProjection('EPSG:4326');
    this.view = new View({
      center: [14.2612, 40.8918],
      zoom: 18,
      projection: this.projection,
    });

    var modify = new Modify({ source: this.markerSource });

    this.Map = new Map({
      interactions: defaultInteractions().extend([modify]),
      layers: [
        ...Object.values(this.layers).map((l: any) => l.tile),
        ...[
          new VectorLayer({
            source: this.measureSource,
            style: new Style({
              fill: new Fill({
                color: 'rgba(255, 255, 255, 0.4)',
              }),
              stroke: new Stroke({
                color: '#005dc1',
                width: 5,
              }),
              image: new CircleStyle({
                radius: 7,
                fill: new Fill({
                  color: '#005dc1',
                }),
              }),
            }),
          }),
          new VectorLayer({
            source: this.freeHandSource,
            style: new Style({
              fill: new Fill({
                color: 'rgba(255, 255, 255, 0.4)',
              }),
              stroke: new Stroke({
                color: '#f44336',
                width: 5,
              }),
              image: new CircleStyle({
                radius: 7,
                fill: new Fill({
                  color: '#f44336',
                }),
              }),
            }),
          }),
          new VectorLayer({
            source: this.markerSource,
          }),
        ],
      ],
      target: 'map',
      view: this.view,
      controls: DefaultControls({
        zoom: false,
      }).extend([new ScaleLine({})]),
    });

    let extent = this.markerSource.getExtent();
    if (extent.every((e) => e !== Infinity))
      this.Map.getView().fit(extent, {
        size: this.Map.getSize(),
        maxZoom: 18,
      });

    modify.on('modifyend', (e) => {
      const coord = (
        e.features.getArray()[0]?.getGeometry() as Point
      ).getCoordinates();
      // let marker = this.value.find(
      //   (f: marker) => f.key == e.features.getArray()[0].getId()
      // );
      // marker.punto.next({
      //   latitudine: coord[0],
      //   longitudine: coord[1],
      //   key: e.features.getArray()[0].getId(),
      // });
    });
  }

  addMeasure(type: string) {
    let sketch: {
      getGeometry: () => {
        (): any;
        new (): any;
        on: { (arg0: string, arg1: (evt: any) => void): any; new (): any };
      };
    } | null;
    let helpTooltipElement: HTMLDivElement;
    let helpTooltip: Overlay;
    let measureTooltipElement: HTMLDivElement | null;
    let measureTooltip: Overlay;
    const continuePolygonMsg = this._translateService.instant(
      "Clicca per continuare a disegnare un'area"
    );
    const continueLineMsg = this._translateService.instant(
      'Clicca per continuare a disegnare una linea'
    );

    const pointerMoveHandler = (evt: { dragging: any; coordinate: any }) => {
      if (evt.dragging) {
        return;
      }
      /** @type {string} */
      let helpMsg = this._translateService.instant(
        'Clicca per iniziare la misura'
      );
      if (sketch) {
        const geom = sketch.getGeometry();
        if (geom instanceof Polygon) {
          helpMsg = continuePolygonMsg;
        } else if (geom instanceof LineString) {
          helpMsg = continueLineMsg;
        }
      }
      helpTooltipElement.innerHTML = helpMsg;
      helpTooltip.setPosition(evt.coordinate);
      helpTooltipElement.classList.remove('hidden');
    };

    this.Map.removeInteraction(this.measureDraw);
    this.measureDraw = new Draw({
      source: this.measureSource,
      type: type,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new Stroke({
          color: 'rgba(0, 0, 0, 0.5)',
          lineDash: [10, 10],
          width: 2,
        }),
        image: new CircleStyle({
          radius: 5,
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 0.7)',
          }),
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)',
          }),
        }),
      }),
    });
    this.Map.addInteraction(this.measureDraw);

    this.Map.on('pointermove', pointerMoveHandler);
    this.Map.getViewport().addEventListener('mouseout', function () {
      helpTooltipElement.classList.add('hidden');
    });
    const formatLength = function (line: any) {
      let length = getLength(line, { projection: GetProjection('EPSG:4326') });
      let output;

      if (length > 1000) {
        output = parseFloat('' + length / 1000).toFixed(1) + ' ' + 'km';
      } else {
        output = Math.round(length) + ' ' + 'm';
      }
      return output;
    };
    const formatArea = function (polygon: any) {
      const area = getArea(polygon, { projection: GetProjection('EPSG:4326') });
      let output;
      if (area > 100000) {
        output =
          parseFloat('' + area / 1000000).toFixed(1) + ' ' + 'km<sup>2</sup>';
      } else {
        output = Math.round(area) + ' ' + 'm<sup>2</sup>';
      }
      return output;
    };
    const createHelpTooltip = () => {
      if (helpTooltipElement) {
        helpTooltipElement.parentNode!.removeChild(helpTooltipElement);
      }
      helpTooltipElement = document.createElement('div');
      helpTooltipElement.className = 'ol-tooltip hidden';
      helpTooltip = new Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left',
      });
      this.Map.addOverlay(helpTooltip);
    };
    const createMeasureTooltip = () => {
      if (measureTooltipElement) {
        measureTooltipElement.parentNode!.removeChild(measureTooltipElement);
      }
      measureTooltipElement = document.createElement('div');
      measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
      measureTooltip = new Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
        stopEvent: false,
        insertFirst: false,
      });
      this.Map.addOverlay(measureTooltip);
    };
    createMeasureTooltip();
    createHelpTooltip();
    let listener: any;
    this.measureDraw.on('drawstart', (evt: any) => {
      sketch = evt.feature;
      /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
      let tooltipCoord = evt.coordinate;
      listener = sketch?.getGeometry().on('change', (evt: any) => {
        const geom = evt.target;
        let output;
        if (geom instanceof Polygon) {
          output = formatArea(geom);
          tooltipCoord = geom.getInteriorPoint().getCoordinates();
        } else if (geom instanceof LineString) {
          output = formatLength(geom);
          tooltipCoord = geom.getLastCoordinate();
        }
        measureTooltipElement!.innerHTML = output || '';
        measureTooltip.setPosition(tooltipCoord);
      });
    });
    this.measureDraw.on('drawend', () => {
      measureTooltipElement!.className = 'ol-tooltip ol-tooltip-static';
      measureTooltip.setOffset([0, -7]);
      // unset sketch
      sketch = null;
      // unset tooltip so that a new one can be created
      measureTooltipElement = null;
      createMeasureTooltip();
      unByKey(listener);
      this.Map.un('pointermove', pointerMoveHandler);
      this.Map.removeInteraction(this.measureDraw);
    });
  }

  removeMeasure() {
    document.querySelectorAll('.ol-tooltip-static').forEach((e) => e.remove());
    this.measureSource.clear();
  }

  undoMeasure() {
    let fs = this.measureSource.getFeatures();
    let ls = document.querySelectorAll('.ol-tooltip-static');
    ls[ls.length - 1].remove();
    this.measureSource.removeFeature(fs[fs.length - 1]);
  }

  zoomIn() {
    const view = this.Map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom! + 1);
  }

  zoomOut() {
    const view = this.Map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom! - 1);
  }

  addFreeHand(type: String, freehand: boolean) {
    this.Map.removeInteraction(this.freeHandDraw);
    this.freeHandDraw = new Draw({
      source: this.freeHandSource,
      type: type,
      freehand: freehand,
    });
    this.Map.addInteraction(this.freeHandDraw);
  }

  removeFreeHand() {
    this.Map.removeInteraction(this.freeHandDraw);
    this.freeHandSource.clear();
  }

  undoFreeHand() {
    let fs = this.freeHandSource.getFeatures();
    this.freeHandSource.removeFeature(fs[fs.length - 1]);
  }

  undoFreeHandDisabled(): boolean {
    return this.freeHandSource.getFeatures().length == 0;
  }

  undoMeasureDisabled(): boolean {
    return this.measureSource.getFeatures().length == 0;
  }

  export() {
    this.Map.once('rendercomplete', () => {
      const mapCanvas = document.createElement('canvas');
      const size = this.Map.getSize();
      mapCanvas.width = size![0];
      mapCanvas.height = size![1];
      const mapContext = mapCanvas.getContext('2d');
      Array.prototype.forEach.call(
        this.Map.getViewport().querySelectorAll(
          '.ol-layer canvas, canvas.ol-layer'
        ),
        function (canvas) {
          if (canvas.width > 0) {
            const opacity =
              canvas.parentNode.style.opacity || canvas.style.opacity;
            mapContext!.globalAlpha = opacity === '' ? 1 : Number(opacity);

            const backgroundColor = canvas.parentNode.style.backgroundColor;
            if (backgroundColor) {
              mapContext!.fillStyle = backgroundColor;
              mapContext!.fillRect(0, 0, canvas.width, canvas.height);
            }

            let matrix;
            const transform = canvas.style.transform;
            if (transform) {
              // Get the transform parameters from the style's transform matrix
              matrix = transform
                .match(/^matrix\(([^\(]*)\)$/)[1]
                .split(',')
                .map(Number);
            } else {
              matrix = [
                parseFloat(canvas.style.width) / canvas.width,
                0,
                0,
                parseFloat(canvas.style.height) / canvas.height,
                0,
                0,
              ];
            }
            // Apply the transform to the export map context
            CanvasRenderingContext2D.prototype.setTransform.apply(
              mapContext,
              matrix
            );
            mapContext!.drawImage(canvas, 0, 0);
          }
        }
      );
      mapContext!.globalAlpha = 1;

      console.log(mapCanvas.toDataURL());

      var fileLink = document.createElement('a');
      fileLink.href = mapCanvas.toDataURL();
      fileLink.target = '_blank';
      fileLink.download = 'export.png';
      fileLink.click();
    });
    this.Map.renderSync();
  }

  info() {
    // const setIcon = (e: any) => {
    //   var viewResolution = this.Map.getView().getResolution();
    //   if (e.dragging) {
    //     return;
    //   }
    //   if (viewResolution! < 0.000005) {
    //     this.Map.getTargetElement().style.cursor = 'help';
    //   } else {
    //     this.Map.getTargetElement().style.cursor = 'not-allowed';
    //   }
    // };
    // const getInfo = (evt: any) => {
    //   var viewResolution = this.Map.getView().getResolution();
    //   if (viewResolution! < 0.000005) {
    //     var radius = 0.00008;
    //     var mycircle = new Circle(evt.coordinate, radius);
    //     var circleFirst = mycircle.getFirstCoordinate();
    //     var circleLast = mycircle.getLastCoordinate();
    //     let p1 = [circleFirst[0] - radius, circleFirst[1] - radius];
    //     let p2 = [circleLast[0], circleLast[1] + radius];
    //     var respArray = [];
    //     const keys = Object.keys(this.layers);
    //     for (let i = 0; i < keys.length; i++) {
    //       const key = keys[i];
    //       if (
    //         key != 'openlayer' &&
    //         (this.layers as any)[key].tile.getVisible()
    //       ) {
    //         let url =
    //           '/geoserver/' +
    //           environment.keycloak.realm +
    //           '/ows?service=WFS&version=1.0.0&bbox=' +
    //           p1[0] +
    //           ',' +
    //           p1[1] +
    //           ',' +
    //           p2[0] +
    //           ',' +
    //           p2[1] +
    //           '&request=GetFeature&typeNames=' +
    //           environment.keycloak.realm +
    //           ':' +
    //           key +
    //           '&outputFormat=application/json';
    //         respArray.push(firstValueFrom(this._http.get(url)));
    //       }
    //     }
    //     Promise.all(respArray).then((resp) => {
    //       this.dialog.open(InfoComponent, {
    //         width: '80%',
    //         height: '60%',
    //         data: resp,
    //       });
    //     });
    //   }
    // };
    // if (this.infoActivated) {
    //   this.infoActivated = false;
    // } else {
    //   this.infoActivated = true;
    // }
    // if (this.infoActivated) {
    //   this.Map.on('singleclick', getInfo);
    //   this.Map.on('pointermove', setIcon);
    // } else {
    //   this.Map.un('pointermove', setIcon);
    //   this.Map.un('singleclick', getInfo);
    // }
  }
}
