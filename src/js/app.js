const express = require("express");
const { getUser } = require("./functions/userFunctions.js");

const app = express();

app.get("/user", (req, res) => {
  const user = getUser();
  res.send(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
