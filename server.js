const express = require('express');
const bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {Poll} = require('./models/poll')

const port = process.env.PORT || 3000;
var app = express();

/* handlers for the urls */
// --------------------- //
app.get('/create_poll', (req, res) => {
    // send a header
   res.send({
       "label": "Email Address",
       "name": "email",
       "type": "text",
       "subtype": "email",
       "placeholder": "you@example.com"
   })
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to send request'
    });
})

app.use(bodyParser.json());

app.post('/create_poll', (req, res) => {
    var poll = new Poll({
        label: req.body.label,
        name: req.body.name,
        type: req.body.type,
        subtype: req.body.subtype,
        placeholder: req.body.placeholder
    });

    poll.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

// server port
console.log(`Server in port ${port}`)
app.listen(port);