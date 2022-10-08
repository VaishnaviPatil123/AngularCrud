import { Component } from '@angular/core';
import {DataService} from './data.service';
import { Usersclass } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor(private ser : DataService){}
  user: Usersclass[] = [];
  user1 :any=[];

  fname:string="";
  lname:string="";
  dob:string="";
  email:string="";
  gender:String="";
  address:string="";
  country:String="";
  state:string="";
  city:String="";
  pincode="";
  msg:string="";


  ngOnInit()
  {
    this.ser.show_info().subscribe(res =>{
     this.user1=res;

    })
  }

onSubmit(studentform:any)
{
    
    this.ser.adduser(studentform.value).subscribe(()=>{

      console.log("Data added successfully");

      this.ser.show_info().subscribe(res =>{
        this.user1=res;


    })
    })
}

remove(x: any,i:any) {
  if(window.confirm("Do u Want to go ahead?"))
  {
     this.ser.deleteUser(x).subscribe((res)=>{

      this.user1.splice(i,1);
     })

  }
  }

    update(x: any) {
      const data = {
        fname: this.user1.fname,
        lname: this.user1.lname,
        dob: this.user1.dob,
        email: this.user1.email,
        gender: this.user1.gender,
        address: this.user1.address,
        country: this.user1.country,
        state: this.user1.state,
        city: this.user1.city,
        pincode: this.user1.pincode,
        
      }
      this.ser.editUser(x.id,data).subscribe(response => {
        this.ser.show_info;
      });
    }



}