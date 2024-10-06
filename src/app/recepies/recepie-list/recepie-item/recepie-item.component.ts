import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from 'src/app/stored/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.scss']
})
export class RecepieItemComponent implements OnInit {

  @Input('recepie') recepie: Recepie;
  @Input('index') index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
