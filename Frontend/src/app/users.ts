export class Usersclass {

    
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


      constructor( fname: string,
                   lname: string, 
                   dob: string, 
                   email: string, 
                   gender: string, 
                   address: string,
                   country: string,
                   state: string,
                   city: string,
                   pincode: number,
                   msg: string  
                  )
      {
    
        this.fname=fname;
        this.lname=lname
        this.dob=dob;
        this.email=email;
        this.gender=gender;
        this.address=address;
        this.country=country;
        this.state=state;
        this.city=city;
        this.msg=msg;      
      }
}