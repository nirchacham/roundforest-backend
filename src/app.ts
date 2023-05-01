import sellerProductRoutes from "./routes/seller_products";
import express from "express";
import bodyParser from "body-parser";
import model from "./models/model";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.set("sequelize", model.sequelize);
app.set("models", model.sequelize.models);

app.use("/sellerProducts", sellerProductRoutes);

export default app;
