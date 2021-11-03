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
                  "longitude": this.dataLo
                }; 
              }    
            );   
              
    }
 
  ngOnInit(): void {
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
