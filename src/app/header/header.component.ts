import { Component, OnInit } from '@angular/core';
import { RecepieService } from '../recepies/recepie.service';
import { StorageService } from '../stored/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private recepieService: RecepieService, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    let recepies = this.recepieService.getRecepies()
    this.storageService.saveData(recepies)
  }
  onFetchData() {
    this.storageService.getData()
  }

}
