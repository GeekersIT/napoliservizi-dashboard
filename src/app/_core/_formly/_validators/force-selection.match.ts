import { FormControl } from '@angular/forms';

export function ForceSelectionMatch(control: FormControl):boolean {
    return typeof control.value === 'string' ? false : true;
}