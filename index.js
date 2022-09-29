require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//import routes
const bookRoute = require("./routes/book.route");

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add book routes
app.use("/api/books", bookRoute);

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongoose Atlas");
  })
  .catch((err) => {
    console.log(`An Error Occured : ${err}`);
  });

app.listen(PORT, () => {
  console.log(`Server is running PORT: ${PORT}`);
});
