const express = require("express");
const app = express();


app.use('/', (req, res) => {
    res.send("Hello World");
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
});