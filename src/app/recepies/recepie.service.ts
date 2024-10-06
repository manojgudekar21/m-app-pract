import { Injectable } from '@angular/core';
import { Recepie } from '../stored/recepie.model';
import { Ingrident } from '../stored/ingrident.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecepieService {

    updatedRecepies = new Subject<Recepie[]>();
    constructor() { }

    recepies: Recepie[] = []

    getRecepies() {
        return this.recepies.slice();
    }

    getRecepieAccToindex(id: number) {
        return this.recepies[id]
    }

    addRecepie(recepie: Recepie) {
        this.recepies.push(recepie)
        this.updatedRecepies.next(this.recepies.slice())
    }
    updateRecepie(id: number, newRecepie: Recepie) {
        this.recepies[id] = newRecepie
        this.updatedRecepies.next(this.recepies.slice())
    }
    onremoveRecepie(id: number) {
        this.recepies.splice(id, 1)
        this.updatedRecepies.next(this.recepies.slice())
    }
    getRecepiesFromDb(recepies: Recepie[]) {
        this.recepies = recepies
        this.updatedRecepies.next(this.recepies.slice())
    }


}
