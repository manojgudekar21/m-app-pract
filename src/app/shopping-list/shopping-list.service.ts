import { Injectable, OnInit } from '@angular/core';
import { Ingrident } from '../stored/ingrident.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService implements OnInit {

    updatedIngridents = new Subject<Ingrident[]>();
    id = new Subject<number>();

    constructor() { }

    ngOnInit() { }

    private ingridents: Ingrident[] = [
        new Ingrident('apple', 5),
        new Ingrident('annar', 3),
    ];

    getIngridents() {
        return this.ingridents.slice();
    }
    addIngrident(ingrident: Ingrident) {
        this.ingridents.push(ingrident);
        this.updatedIngridents.next(this.ingridents.slice())
    }
    getIngridentAccToIndex(id: number) {
        return this.ingridents[id]
    }
    onRemoveAccToIndex(id: number) {
        this.ingridents.splice(id, 1)
        this.updatedIngridents.next(this.ingridents.slice())
    }
    onAddIngridentFromRecepie(ingrident: Ingrident[]) {
        this.ingridents.push(...ingrident)
    }


}
