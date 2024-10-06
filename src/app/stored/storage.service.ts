import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recepie } from "./recepie.model";
import { map } from "rxjs";
import { RecepieService } from "../recepies/recepie.service";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private http: HttpClient, public recepieService: RecepieService) { }

    saveData(recepies: Recepie[]) {
        this.http.put('https://m-app-pract-default-rtdb.firebaseio.com/posts.json', recepies).subscribe((resdata) => {
            console.log(resdata);
        })
    }

    getData() {
        let fetchedRecepies = []
        this.http.get('https://m-app-pract-default-rtdb.firebaseio.com/posts.json')
            .pipe(map((resdata) => {
                for (let key in resdata) {
                    fetchedRecepies.push(resdata[key])
                }
                console.log(fetchedRecepies);

                return fetchedRecepies;
            })).subscribe((recepies: Recepie[]) => {
                this.recepieService.getRecepiesFromDb(recepies)
            })
    }

}