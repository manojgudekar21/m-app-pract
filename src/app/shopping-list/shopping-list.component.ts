import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingrident } from '../stored/ingrident.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.slService.updatedIngridents.subscribe((ingridents: Ingrident[]) => {
      this.ingridents = ingridents
    })
    this.ingridents = this.slService.getIngridents()
  }

  ingridents: Ingrident[] = []

  onClick(id: number) {
    this.slService.id.next(id)
  }

}
