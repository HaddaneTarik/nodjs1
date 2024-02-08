const mysql=require('mysql');

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbnoddjs",
});

db.connect(function(err){

    if(err) throw err;
    console.log("Mysql Connected");
    /* db.query("select * from Employe",function(err,result){
        if(err) throw err;
        else return result;
    }) */
})
module.exports=db;