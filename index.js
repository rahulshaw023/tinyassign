const fs = require('fs')
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const line = require('line-by-line');
const download = require('download');

let frequencyArray = [];
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

(async function () {
  await download("http://terriblytinytales.com/test.txt", "dist");
  console.log("Done");

  fs.readFile('dist/test.txt', 'utf8', function (err, data) {
    console.log(data);
    var wordsArray = splitByWords(data);
    var wordsMap = createWordMap(wordsArray);
    var finalWordsArray = sortByCount(wordsMap);
    frequencyArray = finalWordsArray;
    console.log(finalWordsArray);
    console.log('The word "' + finalWordsArray[0].name + '" appears the most in the file ' +
      finalWordsArray[0].total + ' times');
  });
})()

function splitByWords(text) {
  console.log('func called');
  console.log(text);
  var wordsArray = text.split(/\s+/);
  return wordsArray;
}

function createWordMap(wordsArray) {
  var wordsMap = {};
  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });
  return wordsMap;
}

function sortByCount(wordsMap) {
  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function (key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function (a, b) {
    return b.total - a.total;
  });
  return finalWordsArray;
}

app.post('/count', (req, res) => {
  const number = req.body.number;
  const result = [];
  for (let i = 0; i < number; i++) {
    result.push(frequencyArray[i]);
  }
  res.json({
    wordsWithCount: result
  });
});

// Start the server at port 5000.
app.listen(5000, () => console.log('Server started on port 5000'));