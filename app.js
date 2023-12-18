const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require('cors');
// Middlewares  
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongo_db_url"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));