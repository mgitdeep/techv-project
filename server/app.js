const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello.. I'm a bot from server");
});

app.get("/about", (req, res) => {
    res.send("Hello.. I'm a bot from About server");
});

app.get("/contact", (req, res) => {
    res.send("Hello.. I'm a bot from Contact server");
});

app.get("/signin", (req, res) => {
    res.send("Hello.. I'm a bot from Login server");
});

app.get("/signup", (req, res) => {
    res.send("Hello.. I'm a bot from Register server");
});

// console.log('Just do it')

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})