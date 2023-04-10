import { AbstractControl } from "@angular/forms";

export function confirmPasswordValidation(control:AbstractControl){
    const password=control.get('password');
    const confirmPass=control.get('confirmPassword');
    if(password?.pristine || confirmPass?.pristine){
        return null;
    }
    else{
    return password && confirmPass &&password.value != confirmPass.value?
    {'misMatch':true}:null;
    }
}