'use strict';
const express = require('express');
const react = require('react');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
