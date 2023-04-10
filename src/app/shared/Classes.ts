import { publishFacade } from "@angular/compiler";

export class Register{
    constructor(
        public userName:string,
        public email:string,
        public password:string,
        public confirmPass:string,
        public applications:string,
    ){}
}
export class Login{
    constructor(
        public userName:string,
        public password:string,
    ){}
}