import { Component, OnInit ,ChangeDetectorRef, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISSService } from 'src/app/services/iss.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  public location: any;
  public today: any;
  public errorField = false;
  public  dataLatitude: any;
  public dataLongitude: any;
  public newObj: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    public iSSService: ISSService,
     
  ) { }

  ngOnInit(): void {
    
    if (!this.data){
      this.location = this.getlocationEmpty();   
    } else{
      this.location = this.data;  
      this.dataLatitude  = this.location.latitude; 
      this.dataLongitude  = this.location.longitude;  
    }

  }

  finishFunction(): void {
    this.dialogRef.close();
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


  getlocationEmpty(){
    return{
      latitude: "", 
      longitude: ""
    };
  }

  CreateLocation(dataLatitudeVal: any,dataLongitudeVal: any){
    this.newObj = {
      "latitude":  dataLatitudeVal, 
      "longitude": dataLongitudeVal
    }; 

    if (dataLatitudeVal && dataLongitudeVal){
      this.iSSService.addlocation(this.newObj);
      this.errorField = false;
      this.dialogRef.close();
      // location.reload();
    } else{
       this.errorField = true;
    }
  }


  }
 
