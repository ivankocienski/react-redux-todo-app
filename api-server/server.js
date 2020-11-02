
const express = require('express');

const PORT = 3001;
let app = express();

app.use( (req, res, next) => {
    res.header('access-control-allow-origin', '*');
    next();
});

app.get("/", (req, res) => {
    let payload = {
        message: "Hello world"
    };

    res.send(payload);
});

app.get("/todo", (req, res) => {

    let payload = {
        items: [
            { id: 100, title: "First item", done: true },
            { id: 110, title: "Second item", done: false },
            { id: 120, title: "Third item", done: true },
            { id: 130, title: "More items follow", done: true },
            { id: 140, title: ".", done: false },
            { id: 150, title: "A long item that goes on and on about something very very important. Type less!", done: false },            { id: 160, title: "Etcetera", done: false }

        ]
    };

    res.send(payload);
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});