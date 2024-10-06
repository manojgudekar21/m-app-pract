import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingrident } from 'src/app/stored/ingrident.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') formData: NgForm;
  id: number;
  ingrident: Ingrident;
  editMode = false

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.slService.id.subscribe((index: number) => {
      this.id = index;
      this.editMode = true
      this.ingrident = this.slService.getIngridentAccToIndex(this.id)
      this.formData.form.patchValue({
        ingrident: this.ingrident.ingrident,
        amount: this.ingrident.amount
      })
    })
  }

  onSubmit() {
    this.slService.addIngrident(this.formData.value)
    this.formData.reset(
      this.editMode = false
    )
  }

  onClear() {
    this.formData.reset()
    this.editMode = false
  }

  onDelete() {
    this.slService.onRemoveAccToIndex(this.id)
    this.formData.reset()
    this.editMode = false
  }


}
