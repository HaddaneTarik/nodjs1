var express=require('express');
var data=require('./data/data');
var db=require('./mysql');
let bodyParser = require("body-parser");
var app=express();

//Template Engine
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("home",{data:data.data});
 })

app.get("/employes",(req,res)=>{
        db.query("select * from Employe",function(err,result){
        if(err) throw err;
        else res.render("employe",{emps:result});});
})
app.post("/add",(req,res)=>{
    db.query(`insert into employe values(${req.body.mat},'${req.body.nom}',${req.body.sal})`,function(err,result){
        if(err) throw err;
        else res.redirect("/employes");
})
})
app.get("/delete/:id",(req,res)=>{
    
   db.query(`delete from employe where id=?`,req.params.id,function(err,result){
        if(err) throw err;
        else res.redirect("/employes");
})
})
var server=app.listen(8080,()=>{
    console.log("Server Connected At 8080");
})


