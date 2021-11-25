import { Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

export interface IAutoCompleteScrollEvent {
  autoComplete: MatAutocomplete;
  scrollEvent: Event;
}

@Directive({
  selector: 'mat-autocomplete[optionsScroll]'
})
export class AutocompleteFormlyDirective implements OnDestroy {

  @Input() thresholdPercent = 0.95;
  @Output('optionsScroll') scroll = new EventEmitter<IAutoCompleteScrollEvent>();
  _onDestroy = new Subject();

  constructor(public autoComplete: MatAutocomplete) {
    this.autoComplete.opened.pipe(
      tap(() => {
        /** Note: When autocomplete raises opened, panel is not yet created (by Overlay)
            Note: The panel will be available on next tick
            Note: The panel wil NOT open if there are no options to display
        */
        setTimeout(() => {
          /** Note: remove listner just for safety, in case the close event is skipped. */
          this.removeScrollEventListener();
          if(this.autoComplete && this.autoComplete.panel && this.autoComplete.panel.nativeElement) {
          this.autoComplete.panel.nativeElement
            .addEventListener('scroll', this.onScroll.bind(this))
          }
        });
      }),
      takeUntil(this._onDestroy)).subscribe();

    this.autoComplete.closed.pipe(
      tap(() => this.removeScrollEventListener()),
      takeUntil(this._onDestroy)).subscribe();
  }

  private removeScrollEventListener() {
    if(this.autoComplete && this.autoComplete.panel && this.autoComplete.panel.nativeElement) {
      this.autoComplete.panel.nativeElement
      .removeEventListener('scroll', this.onScroll);
    }
  }

  onScroll(event: any) {
    if (this.thresholdPercent === undefined) {
      this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
    } else {
      const scrollTop = (event.target as HTMLElement).scrollTop;
      const scrollHeight = (event.target as HTMLElement).scrollHeight;
      const elementHeight = (event.target as HTMLElement).clientHeight;
      const atBottom = scrollHeight === scrollTop + elementHeight;

      if (atBottom) {
        this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
      }
    }
  }

  ngOnDestroy() {
    this._onDestroy.next(null);
    this._onDestroy.complete();
    this.removeScrollEventListener();
  }
}