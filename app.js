import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import router from "./routes/routes.js";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

const uri =
  "mongodb+srv://tech_giant:1234@cluster0.qxyxmsa.mongodb.net/TechGiantDB?retryWrites=true&w=majority";

app.use(express.static("public"));

app.listen(2020, () => {
  console.log("Server is listening at port 2020 !!!");
});

app.use("/", router);
