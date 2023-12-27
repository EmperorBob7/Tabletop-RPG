require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({limit: "1kb"}));
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`listening at: http://localhost:${PORT}`);
});