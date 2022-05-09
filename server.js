const express = require('express');

const node = require('node-fetch');

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started port ${port}`)
})