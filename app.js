require('babel-register');

const express = require('express');
const _ = require('lodash');
const fs = require('fs');
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const app = express();

app.use('/public', express.static('./public'));
app.use('/', express.static('./'));

console.log('Express server listening on port ' + port);
app.listen(port);