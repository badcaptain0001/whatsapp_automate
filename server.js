const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./dbconnection/db");

// cors enabled ***************************************************************
app.use(cors({ credentials: true, origin: "*" }));
// CONSOLE LOGGING ************************************************************
const log = (args) => {
  console.log(args);
};
// *****************************************************************************
const hook = require("./routes/hook");
// *******************************************************************************
app.use("/api", hook);
app.get("/", (req, res) => {
  res.send(
    `<H1 style=color:#2bda2b;text-align:center;font-family:sans-serif;margin-top:100px>API is Running</H1>`
  );
});
// *******************************************************************************
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});
