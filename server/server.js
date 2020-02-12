const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json('Hello World')
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    })
});

app.post('/usuario', function(req, res) {
    const body = req.body;

    if (body.nombre == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "el campo nombre es nesario"
        });
    } else {
        res.json({
            body
        });
    }


});


app.listen(process.env.PORT, () => {
    console.log(`Escucha iniciada en ${process.env.PORT}`);
});