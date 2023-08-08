import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express()
const port = 3030
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "keeper"
})

app.use(express.json())
app.use(cors())
//ALTER USER 'root@localhost' IDENTIFIED WITH mysql_native_password BY '12345678';

app.get("/",(req,res)=>{
    res.send("backend")
})
app.get("/note",(req,res)=>{
    const q = "SELECT * FROM note"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/note",(req,res)=>{
    const q = "INSERT INTO note (`title`,`content`) VALUES (?)"
    const values = [req.body.title,req.body.content]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.delete("/note:id",(req,res)=>{
    const id = req.params.id;
    const q = "DELETE FROM note WHERE id = ?"
    db.query(q,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
})
})

app.listen(port,()=>{
    console.log("backend connected")
})