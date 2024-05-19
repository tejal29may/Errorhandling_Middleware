const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());


const validateUserInput = require('./vaidator');

app.post('/register', validateUserInput, (req, res) => {
   
    res.status(201).json({ message: 'User registered successfully' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
