import { Injectable, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom, map, Observable, of } from 'rxjs';
import { ConfirmDialogComponent } from '../_components/confirm-dialog/confirm-dialog.component';


interface IDirty {
  isDirty(): boolean;
  getRef(): ViewContainerRef;
}

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<IDirty> {
  constructor(
    public dialog: MatDialog,
    private _translateService: TranslateService,
    // private confirmationDialogService: ConfirmationDialogService,
    // private confirmationDialogReferenceService: ConfirmationDialogReferenceService
) { }
public canDeactivate(
    component: IDirty
): Observable<boolean> | Promise<boolean> | boolean {
    let r;
    if (component.isDirty()) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          data: {
            title: this._translateService.instant('Attenzione'),
            content: this._translateService.instant('Procedendo si perderenno tutte le modifiche effettuate.')
          }
        });
        r = dialogRef.afterClosed().pipe(map(e => e as boolean));
    } else {
      r = of(true);
    }
    return r;
  }
}

