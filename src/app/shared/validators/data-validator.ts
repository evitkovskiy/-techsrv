import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { formatDate, isJsonFunc } from '../../helpers/helper-functions';


export const onlyLatters = /^[а-яА-яa-zA-z ]*$/;;

export const lettersAndNumbers = /^[а-яА-яa-zA-z0-9 ]*$/;

export const dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;


export const projectsJsonValidators = [
    Validators.required,
    isJson()
]

export const subjectValidators = [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
    Validators.pattern(lettersAndNumbers)
];

export const descriptionValidators = [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(50),
];

export const createdByValidators = [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
    Validators.pattern(onlyLatters)
]

export const startDateValidators = [
    Validators.required,
    isCorrectFormatDate()
]

export const endDateValidators = [
    Validators.required,
    isCorrectFormatDate()
]
 
function isJson(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        return isJsonFunc(control.value) ? null : {isJson: true}
    };
}

function isCorrectFormatDate(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        let date = '';
        if (control.value === '') return null;
        typeof control.value !== 'string' ?
            date = formatDate(control.value.toDate()) :
            date = formatDate(new Date(control.value));
         return dateReg.test(date) ? null : {isCorrectDate: true};
    };
}   
