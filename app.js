import express, { json } from "express";
import conectDb from "./config/db.js";
import cors from 'cors'
import router from "./routes/downloadRoute.js";
import ejs from "ejs"
import axios from "axios";

const app = express()
const dbURL = "mongodb+srv://devanshsahu333:Devanshsahu%40123nn@instaserver.gx0qgz0.mongodb.net/?retryWrites=true&w=majority&appName=instaserver/instaServer";
conectDb(dbURL);

const allowedOrigins = ['http://localhost:3000', 'https://igdownsaver.000webhostapp.com'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/', router)


app.listen(3030, () => {
    console.log(`http://localhost:3030`)
})