const express = require('express');

const port = process.env.PORT || 3000;
var app = express();

/* handlers for the urls */
// --------------------- //
app.get('/', (req, res) => {
    // send an object
    res.send({
        name: 'Fuse Labs',
        likes: [
            'Golf',
            'Biking',
            'Visit Cities'
        ]
    });
});

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
        errorMessage: 'Undadle to send request'
    });
})

// server port
console.log(`Server in port ${port}`)
app.listen(port);