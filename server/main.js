/*jslint node: true */
'use strict';
var express = require('express'),
    routes = require('./routes'),
    app = express();

app.use(express.bodyParser());

//app.get('/api/awesomeThings', routes.awesomeThings);
app.get('/restrospectives', routes.getRetrospectives);
app.get('/retrospective/:id', routes.getRetrospective);
app.post('/retrospective/:id', routes.postRetrospective);
app.put('/retrospective/:id', routes.putRetrospective);
app.delete('/retrospective/:id', routes.deleteRetrospective);
app.use(function (req, res) {
    res.json({'ok': false, 'status': '404'});
});

module.exports = app;
