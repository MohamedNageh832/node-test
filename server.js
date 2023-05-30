const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi");

  setTimeout(() => console.log("Working"), 4000);
});

app.listen(3000, () => {
  console.log("Listening...");
});
