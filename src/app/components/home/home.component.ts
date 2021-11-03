import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { GlobalFunctionsService } from 'src/app/services/global-functions.service';
import { ISSService } from 'src/app/services/iss.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public today: any;


  dataLa: any;
  dataLo: any;
  locationNow : any;

   constructor(
    private iSSService: ISSService,
    private globalFunctionsService: GlobalFunctionsService
  ) {
       this.iSSService.registerNotesData()
          .subscribe(
              res=>
              {
                this.dataLa =  res.iss_position.latitude,
                this.dataLo =  res.iss_position.longitude,
                this.locationNow = {
                  "latitude":  this.dataLa,
                  "longitude": this.dataLo,
                  "dateCreated": this.getDateToday(),
                };
              }
            );

    }

  ngOnInit(): void {
  }

  getDateToday(){
    this.today = new Date();
    const dd = String(this.today.getDate()).padStart(2, '0');
    const mm = String(this.today.getMonth() + 1).padStart(2, '0');
    const yyyy = this.today.getFullYear();
    const time = new Date(this.today.getTime());

    this.today = dd + '/' + mm + '/' + yyyy + ' - ' + time;
    return this.today;
  }


  openPopUp() {

  // @ts-ignore
  this.dialogRef = this.globalFunctionsService.openItemModal(this.locationNow).then(() => {
  })
    .catch(() => {
      //
    });
}


  buttonClick(){
  }




}
