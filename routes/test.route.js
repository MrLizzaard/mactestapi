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
    const usersSnapShot = await db.collection("users").get();
    const postsSnapShot = await db.collection("posts").get();

    usersSnapShot.forEach((doc) => {
      console.log(doc.id, " : ", doc.data());
    });

    postsSnapShot.forEach((doc) => {
      console.log(doc.id, " : ", doc.data());
    });

    res.send({ usersSnapShot });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
