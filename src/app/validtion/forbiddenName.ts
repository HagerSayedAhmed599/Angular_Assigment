import { AbstractControl } from "@angular/forms";

export function forbiddenName(name:RegExp){
    return (control:AbstractControl)=>{
        const forbidden=name.test(control.value);
        return forbidden? {'forbiddenName':{value:control.value}} :null;
    }
}