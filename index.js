const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3006;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
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
