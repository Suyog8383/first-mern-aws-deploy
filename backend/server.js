import express from "express";
import cors from "cors";
import databaseConnect from "./database/db.js";
import router from "./routes/products.js";
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

//connect to database
databaseConnect();

//routes
app.use("/products", router);

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
