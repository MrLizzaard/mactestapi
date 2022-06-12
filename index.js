const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3006;

app.use(cors());

app.use(`/v1/api`, require("./routes/test.route"));

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
