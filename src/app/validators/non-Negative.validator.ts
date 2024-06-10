import { AbstractControl, ValidatorFn } from '@angular/forms';

export function nonNegativeNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value !== null && value !== undefined && value < 0) {
      return { negativeNumber: true };
    }
    return null;
  };
}
