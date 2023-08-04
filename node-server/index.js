import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import userEvent from "@testing-library/user-event";
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/keeper');

const noteSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    content: String,
});

const Note = mongoose.model('Note', noteSchema);

const server = express();
const port = 8080;
server.use(bodyParser.json());

server.use(cors());

server.post("/server", async (req, res) => {
    let note = new Note();
    note.title = req.body.title;
    note.content = req.body.content;
    const doc = await note.save()
    console.log(doc)
    res.json(doc)
})

server.get("/server", async (req, res) => {
    const docs = await Note.find({});
    res.json(docs)
})

server.delete("/server:id", (req, res) => {
    Note.findByIdAndRemove(req.params.id,(err,doc) => {
        if(err) throw(err);
        else res.json(doc);
    })
});

server.listen(port, () => {
    console.log('Server started at port ' + port)
})