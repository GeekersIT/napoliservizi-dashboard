
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { View, Feature, Map, Overlay } from 'ol';
import { ScaleLine, defaults as DefaultControls } from 'ol/control';

import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Projection from 'ol/proj/Projection';
import { get as GetProjection } from 'ol/proj'
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import { Style, Text, Fill, Stroke } from 'ol/style';
import { BehaviorSubject } from 'rxjs';
import { defaults as defaultInteractions, Draw, Modify } from 'ol/interaction';
import CircleStyle from 'ol/style/Circle';
import Polygon from 'ol/geom/Polygon';
import LineString from 'ol/geom/LineString';
import {getArea, getLength} from 'ol/sphere';
import { unByKey } from 'ol/Observable';
import { TranslateService } from '@ngx-translate/core';
import { FieldType } from '@ngx-formly/material';



export interface marker{
  coord: BehaviorSubject<{lat:number,lon:number,propagate?:boolean}>;
  key: string;
  color?: string;
  icon?: number;
}

@Component({
  selector: 'app-mappa-formly',
  templateUrl: './mappa-formly.component.html',
  styleUrls: ['./mappa-formly.component.scss']
})
export class MappaFormlyComponent extends FieldType {
  view!: View;
  projection!: Projection;

  Map!: Map;

  markerSource: VectorSource<Point> = new VectorSource();
  measureSource = new VectorSource();
  measureDraw!: Draw;
  freeHandDraw!: Draw;

  freeHandSource = new VectorSource({wrapX: false});

  
  constructor(private zone: NgZone, private cd: ChangeDetectorRef, private _translateService: TranslateService) { 
    super();
  }

  findStepper(field:any):any{
    let stepper = field.parent?.fieldGroup?.find((f:any) => f.type == "stepper");
    return stepper ? stepper : this.findStepper(field.parent)
  }


  ngOnInit(){
    this.findStepper(this.field).templateOptions?.selectionChange.subscribe(() => this.initMap());

    this.field.templateOptions!.markers.map((marker:marker) => {
      marker.coord.subscribe(coord => {
        if(coord.lat != 0 && coord.lon != 0){
          let feature = this.markerSource.getFeatureById(marker.key);
          if(feature){ 
            feature.setGeometry(new Point([coord.lat,coord.lon]));
          }else{
            feature = new Feature({
              geometry: new Point([coord.lat,coord.lon])
            });
            feature.setId(marker.key);
            feature.setStyle(new Style({
              text: new Text({
                text: String.fromCodePoint(marker.icon ? marker.icon : 0xE55F),
                font: 'normal normal 400 48px "Material Icons"',
                fill: new Fill({
                  color: marker.color
                })
              }),
            }));
            this.markerSource.addFeature(feature);
          }
        }  
      })
    })
  }


  ngAfterViewInit():void {
    if (! this.Map) {
      this.zone.runOutsideAngular(() => this.initMap())
    } 
  }

  private initMap(): void{
    this.projection = GetProjection('EPSG:4326');
    this.view = new View({
      center: this.to.center,
      zoom: this.to.zoom,
      projection: this.projection,
    });

    var modify = new Modify({source: this.markerSource});

    this.Map = new Map({
      interactions: defaultInteractions().extend([modify]),
      layers: [
        new TileLayer({
          source: new OSM({})
        }),
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
      target: 'map',
      view: this.view,
      controls: DefaultControls({
        zoom: false
      }).extend([
        new ScaleLine({}),
      ]),
    });

    modify.on('modifyend',(e) => {
      const coord = (e.features.getArray()[0]?.getGeometry() as Point).getCoordinates();
      let marker = this.field.templateOptions?.markers.find((f:marker) => f.key == e.features.getArray()[0].getId());
      marker.coord.next({
        lat: coord[0],
        lon: coord[1]
      })

    });
  }

  addMeasure(type:string){
    let sketch: { getGeometry: () => { (): any; new(): any; on: { (arg0: string, arg1: (evt: any) => void): any; new(): any; }; }; } | null;
    let helpTooltipElement: HTMLDivElement;
    let helpTooltip:Overlay;
    let measureTooltipElement: HTMLDivElement | null;
    let measureTooltip: Overlay;
    const continuePolygonMsg = this._translateService.instant('Clicca per continuare a disegnare un\'area');;
    const continueLineMsg = this._translateService.instant('Clicca per continuare a disegnare una linea');
    

    const pointerMoveHandler = (evt: { dragging: any; coordinate: any; }) => {
      if (evt.dragging) {
        return;
      }
      /** @type {string} */
      let helpMsg = this._translateService.instant('Clicca per iniziare la misura');
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
    const formatLength = function (line:any) {
      let length = getLength(line,{projection:GetProjection('EPSG:4326')});
      let output;

      if (length > 1000) {
        output = parseFloat(""+length/1000).toFixed(1) + ' ' + 'km';
      } else {
        output = Math.round(length) + ' ' + 'm';
      }
      return output;
    };
    const formatArea = function (polygon:any) {
      const area = getArea(polygon,{projection:GetProjection('EPSG:4326')});
      let output;
      if (area > 100000) {
        output = parseFloat(""+area/1000000).toFixed(1) + ' ' + 'km<sup>2</sup>';
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
    }
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
    }
    createMeasureTooltip();
    createHelpTooltip();
    let listener: any;
    this.measureDraw.on('drawstart', (evt:any) => {
      sketch = evt.feature;
      /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
      let tooltipCoord = evt.coordinate;
      listener = sketch?.getGeometry().on('change', (evt:any) => {
        const geom = evt.target;
        let output;
        if (geom instanceof Polygon) {
          output = formatArea(geom);
          tooltipCoord = geom.getInteriorPoint().getCoordinates();
        } else if (geom instanceof LineString) {
          output = formatLength(geom);
          tooltipCoord = geom.getLastCoordinate();
        }
        measureTooltipElement!.innerHTML = output||'';
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

  removeMeasure(){
    document.querySelectorAll('.ol-tooltip-static').forEach(e => e.remove());
    this.measureSource.clear();
  }

  undoMeasure(){
    let fs = this.measureSource.getFeatures();
    let ls = document.querySelectorAll('.ol-tooltip-static');
    ls[ls.length-1].remove();
    this.measureSource.removeFeature(fs[fs.length-1])
  }


  zoomIn(){
    const view = this.Map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom! + 1);
  }

  zoomOut(){
    const view = this.Map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom! - 1);
  }

  addFreeHand(type:String, freehand:boolean){
    this.Map.removeInteraction(this.freeHandDraw);
    this.freeHandDraw = new Draw({
      source: this.freeHandSource,
      type: type,
      freehand: freehand,
    });
    this.Map.addInteraction(this.freeHandDraw);

  }

  removeFreeHand(){
    this.Map.removeInteraction(this.freeHandDraw);
    this.freeHandSource.clear();
  }

  undoFreeHand(){
    let fs = this.freeHandSource.getFeatures();
    this.freeHandSource.removeFeature(fs[fs.length-1])
  }

  undoFreeHandDisabled():boolean{
    return this.freeHandSource.getFeatures().length == 0
  }

  undoMeasureDisabled():boolean{
    return this.measureSource.getFeatures().length == 0
  }
}