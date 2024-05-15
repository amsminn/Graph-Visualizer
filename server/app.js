import express from 'express';
import DB from './DB.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

const db = await DB();
const user = db.collection('User');
const dataDB = db.collection('Data');

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Listening on ' + port);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/api/SignUp", async (req, res) => {
    console.log(req.body);
    const {id : userID, email, password} = req.body;
    const flag = await user.findOne({userID: userID}) === null;
    if(flag) {
        await user.insertOne({ userID: userID, email: email, password: password});
        return res.status(200).send({success: true, message: "Success"});
    } else {
        return res.status(400).send({success: false, message: "User already exists"});
    }
});

app.post("/api/LogIn", async (req, res) => {
    const {id: userID, password: password} = req.body;
    console.log(req.body);
    const ret = await user.findOne({userID: userID});
    if(ret !== null) {
        if(ret.password === password) {
            return res.status(200).send({success: true, message: "Success"});
        } else {
            return res.status(400).send({success: false, message: "Incorrect password"});
        }
    } else {
        return res.status(400).send({success: false, message: ("User" + userID + "does not exist")});
    }
});

app.post("/api/Save", async (req, res) => {
    const {id: userID, title: title, data: data, date: date} = req.body;
    console.log(req.body);
    await dataDB.insertOne({userID: userID, title: title, data: data, date: date});
});

app.post("/api/Cloud", async (req, res) => {
    const ret = await dataDB.find({}).toArray();
    return res.status(200).send(ret);
});