import { Ingrident } from "./ingrident.model";

export class Recepie {
    constructor(
        public name: string,
        public discription: string,
        public imagePath: string,
        public ingridents: Ingrident[]
    ) { }
}
