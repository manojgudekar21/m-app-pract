import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { StartComponent } from './start/start.component';
import { EditComponent } from './recepies/recepie-details/edit/edit.component';

const routes: Routes = [
  { path: "", redirectTo: "recepies", pathMatch: "full" },
  {
    path: "recepies", component: RecepiesComponent, children: [
      { path: "", component: StartComponent },
      { path: "new", component: EditComponent },
      { path: ":id", component: RecepieDetailsComponent },
      { path: ":id/edit", component: EditComponent }

    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
