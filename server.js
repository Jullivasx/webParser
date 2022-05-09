const express = require('express');

const fetch = require('node-fetch');


const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/fetch', async (req, res) => {
    try {
        console.log('POST: /fetch ' + JSON.stringify(req.body));
        const url = req.body.url;
        const response = await fetch(url);
        const body = await response.text()
        res.json({
            html: body,
        });
    } catch (error) {
        console.error(error);
        res.sendStatus(505);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started port ${port}`)
})