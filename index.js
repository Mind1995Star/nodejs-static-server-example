const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

console.log("Welcome Hexado changed")

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})