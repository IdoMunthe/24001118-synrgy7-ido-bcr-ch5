import express from "express";
import knex from "knex";
import carsRouter from "./routes/cars.routes";
import bodyParser from "body-parser";
import { Model } from "objection";

const port = 4000;
const app = express();

const knexInstance = knex({
  client: "pg",
  connection: {
    database: "postgres",
    user: "postgres",
    password: "siantar72", 
    port: 3000
  }
})

Model.knex(knexInstance)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/cars", carsRouter);

app.listen(port, ()=> {
  console.log(`server is running on port ${port}`);
});