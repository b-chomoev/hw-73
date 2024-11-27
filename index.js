const express = require('express');

const app = express();
const port = 8000;
const password = 'password';

app.get('/', (req, res) => {
    return res.send('Home Page');
});

app.get('/:userText', (req, res) => {
    return res.send(req.params.userText);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});