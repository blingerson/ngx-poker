import { AbstractControl, ValidatorFn } from '@angular/forms';

export function alreadyExistsInMapValidator( map : Map<any, any> ) : ValidatorFn {
    return ( control : AbstractControl ) : { [ key : string ] : any } | null => {
        const forbidden = map.has( control.value );
        return forbidden ? { 'alreadyExists' : { value : control.value } } : null;
    };
}
