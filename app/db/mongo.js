'use strict';
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const config = require('../config');

MongoClient.connect(config.db.url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(config.db.dbName);

  client.close();
});
