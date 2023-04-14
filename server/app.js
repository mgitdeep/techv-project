const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const DB = 'mongodb+srv://mkdb:MKdb%40123@cluster0.oth2bpd.mongodb.net/mernstack';

mongoose.connect(DB).then(() => {
    console.log('Connection with Remote Database is successful..!')         // mongoose.connect is a Promise hence we've used THEN and CATCH to handle the resolve & reject state respectively
}).catch((err) => {
    console.log(err)
})

const middleware = (req, res, next) => {
    console.log('Middleware doing its job');
    next();
}

// middleware()

app.get("/", (req, res) => {
    res.send("Hello.. I'm a bot from server");
});

app.get("/about", middleware, (req, res) => {
    console.log('Inside the About section')
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