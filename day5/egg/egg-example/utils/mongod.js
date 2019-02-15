'use strict';

const {
  MongoClient,
  ObjectId,
} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = '1810';

const connect = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      if (err) {
        reject(err);
      } else {
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        resolve({
          db,
          client,
        });
      }
    });
  });
};

const insert = (col, arr) => {
  return new Promise(async (resolve, reject) => {
    const {
      db,
      client,
    } = await connect();
    const collection = db.collection(col);
    collection.insertMany(arr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
        client.close();
      }
    });
  });
};
const find = (col, obj) => {
  return new Promise(async (resolve, reject) => {
    const {
      db,
      client,
    } = await connect();
    const collection = db.collection(col);
    collection.find({
      ...obj,
    }).toArray((err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
        client.close();
      }
    });
  });
};

const sort = (col, obj, obj2) => {
  return new Promise(async (resolve, reject) => {
    const {
      db,
      client,
    } = await connect();
    const collection = db.collection(col);
    collection.find({
      ...obj,
    }).sort({
      ...obj2,
    }).toArray((err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
        client.close();
      }
    });
  });
};

module.exports.connect = connect;
module.exports.insert = insert;
module.exports.find = find;
module.exports.sort = sort;
module.exports.ObjectId = ObjectId;
