const express = require("express");
const app = express();

//run npm run dev to nodemon server.js
app.listen(3030, () => {
  console.log("listening on port 3030");
});

app.get("/", (req, res) => {
  res.sendFile(
    "/Users/Fin/Desktop/life/HappyHacking/github_repo/GreenIce/" + "travel.html"
  );
});
