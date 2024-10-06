import { Component, OnInit } from '@angular/core';
import { Recepie } from 'src/app/stored/recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.scss']
})
export class RecepieListComponent implements OnInit {

  constructor(private recepieService: RecepieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recepieService.updatedRecepies.subscribe((recepies: Recepie[]) => {
      this.recepies = recepies
    })
    this.recepies = this.recepieService.getRecepies()
  }

  recepies: Recepie[] = []

  onClick() {
    this.router.navigate(["new"], { relativeTo: this.route })
  }

}
