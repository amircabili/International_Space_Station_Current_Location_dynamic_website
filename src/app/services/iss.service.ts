import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ISSService {

  public globalData:Observable<any>;

  private _issURL = 'http://api.open-notify.org/iss-now.json';



        ///////////    this  will call an node-JS api server that i will build !! ////////////////////****** */

  private _createLocationInnodeJS_Api = 'http:// ';




  constructor(
    private http: HttpClient,
  ) {

      this.globalData = new Observable(observer => {
        let obj : any[] = [];
                setInterval(() =>
                          {
                      this.http.get<any>(this._issURL)
                      .subscribe(resp=>{
                            obj = resp
                            observer.next(obj);
                      })
                  },400)
        });

   }


    registerNotesData(){
      return this.globalData;
    }

    async addlocation(newObj: any){
        const fetchParams = {
          method : 'POST',
          body : JSON.stringify(newObj),
          headers : {'Content-Type' : 'application/json'}
        };

      ///////////    this  will call an node-JS api server that i will build !! ////////////////////****** */

        const resp = await fetch(this._createLocationInnodeJS_Api, fetchParams);
        const status = await resp.json();
        // alert(status);


    }



}
