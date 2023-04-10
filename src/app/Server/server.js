const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const port=3200;
const app=express();
app.use(bodyParser.json);
app.use(cors());
app.get('/',function(req,res){
    res.send("Hello from node server");
});

app.listen(port,function(){
    console.log("server runing on port "+port);
})
app.post('/register',function(req,res){
    console.log(req.body);
    res.status(200).send({"data":"Recieved Successefully"});
})
