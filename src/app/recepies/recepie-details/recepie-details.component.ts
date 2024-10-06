import { Component, OnInit } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { Recepie } from 'src/app/stored/recepie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.scss'],
})
export class RecepieDetailsComponent implements OnInit {
  id: number;
  recepie: Recepie;
  constructor(
    private recepieService: RecepieService,
    private router: Router,
    private route: ActivatedRoute,
    private slService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.recepie = this.recepieService.getRecepieAccToindex(this.id);
    });
  }

  toShoppingList() {
    this.slService.onAddIngridentFromRecepie(this.recepie.ingridents);
  }

  toEdit() {
    this.router.navigate(["edit"], { relativeTo: this.route })
  }

  onDelete() {
    this.recepieService.onremoveRecepie(this.id)
    this.router.navigate(["../"])
  }


}
