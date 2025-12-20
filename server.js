const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Serve everything inside /public
app.use(express.static(path.join(__dirname, "public")));

// If someone hits any route, show index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Resume site running on port ${PORT}`);
});
