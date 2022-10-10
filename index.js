const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Hello world!");
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server runs on port ${port}`));
