import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formData: FormGroup;
  editMode: boolean = false
  id: number;

  constructor(private route: ActivatedRoute, public recepieService: RecepieService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    })

    this.initForm()
  }

  initForm() {
    let recepieName = ''
    let recepieImagePath = ''
    let recepieDiscription = ''
    let recepieingridents = new FormArray([])

    if (this.editMode) {
      const selectedRecepie = this.recepieService.getRecepieAccToindex(this.id)
      recepieName = selectedRecepie.name;
      recepieImagePath = selectedRecepie.imagePath;
      recepieDiscription = selectedRecepie.discription
      if (selectedRecepie['ingridents']) {
        for (let singleingrident of selectedRecepie.ingridents) {
          recepieingridents.push(new FormGroup({
            'ingrident': new FormControl(singleingrident.ingrident, Validators.required),
            'amount': new FormControl(singleingrident.amount, [Validators.required, Validators.pattern("/^[1-9] + [0-9]*$/")])
          }))
        }
      }
    }

    this.formData = new FormGroup({
      'name': new FormControl(recepieName, Validators.required),
      'imagePath': new FormControl(recepieImagePath, Validators.required),
      'discription': new FormControl(recepieDiscription),
      'ingridents': recepieingridents
    })
  }

  onSubmit() {
    if (this.editMode) {
      this.recepieService.updateRecepie(this.id, this.formData.value)
      this.formData.reset()
    } else {
      this.recepieService.addRecepie(this.formData.value)
      this.formData.reset()
    }
  }

  onCancel() {
    this.router.navigate(['../'])
  }

  addIngrident() {
    (<FormArray>this.formData.get('ingridents')).push(new FormGroup({
      'ingrident': new FormControl(null),
      'amount': new FormControl(null)
    }))
  }

  onRemove() {
    (<FormArray>this.formData.get('ingridents')).removeAt(this.id)
  }

}
