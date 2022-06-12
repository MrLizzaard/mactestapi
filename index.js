const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3006;
const db = require("./db/db");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const docRef = db.collection("users").doc("aturing");

    const result = await docRef.set({
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    });

    res.send({ result });
  } catch (err) {
    console.log(err);
  }
});

app.get("/test", (req, res) => {
  try {
    res.send("success");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
