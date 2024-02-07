const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8001;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const user_route = require("../src/routes/user");
const contri_route  = require("../src/routes/contri");
const transaction_route  = require("../src/routes/transaction");

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //middle ware :push a request body inside request object

mongoose
  .connect(process.env.DB_CONNECT, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
console.log("here");
app.use("/user", user_route);
app.use("/",contri_route );
app.use("/transaction",transaction_route); 


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
