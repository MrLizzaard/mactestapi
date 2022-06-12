const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/makedata", async (req, res) => {
  try {
    const docRef = db.collection("users").doc("test");

    const result = await docRef.set({
      first: "Do Hyeong",
      middle: "the King",
      last: "Kim",
      born: 1995,
    });

    res.send({ result });
  } catch (err) {
    console.log(err);
  }
});

router.get("/getdata", async (req, res) => {
  try {
    const snapShot = await db.collection("users").get();

    snapShot.forEach((doc) => {
      console.log(doc.id, " : ", doc.data());
    });

    res.send({ snapShot });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
