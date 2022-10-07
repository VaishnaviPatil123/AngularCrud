const m=require('mongoose');
const pschema=m.Schema({
    fname:String,
    lname:String,
    dob:String,
    email:String,
    gender:String,
    country:String,
    state:String,
    city:String,
    address:String,
    pincode:Number
});
module.exports=m.model("custmores",pschema); //model name=collection name