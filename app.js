import express, { json } from "express";
import conectDb from "./config/db.js";
import cors from 'cors'
import router from "./routes/downloadRoute.js";
import ejs from "ejs"
import axios from "axios";

const app = express()
const dbURL = "mongodb://localhost:27017/insta";

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/', router)

conectDb(dbURL);

app.listen(3030, () => {
    console.log(`http://localhost:3030`)
})