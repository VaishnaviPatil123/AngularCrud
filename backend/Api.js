

const express = require('express');
const app = express();
require('./myconfig');
const p = require('./myschema.js');
const cors = require("cors"); 
app.use(cors());
app.use(express.json());

app.get("/",async(req,res) =>{

    let info = await p.find();
    res.send(info);
})

app.post("/",async(req,res) =>{

    let info = new p(req.body);
    const result= await info.save();
    res.send(result);
})


app.put("/update/:_id",async(req,resp) =>{

    console.log(req.params)
    let data = await p.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})




app.delete("/delete/:_id",async(req,resp) =>{

    console.log(req.params)
    let data = await p.deleteOne( req.params);
    resp.send(data);
})


app.listen(3000);