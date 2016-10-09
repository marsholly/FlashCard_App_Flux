const fs = require('fs');
const path = require('path');
const flashcardPath = path.join(__dirname, '../data/flashcard.json');

exports.getAllQuestions = function(cb) {
  fs.readFile(flashcardPath, (err, buffer) => {
    if (err) return cb(err);
    let data;
    try {
      data = JSON.parse(buffer);
    } catch(e) {
      data = [];
    }
    cb(null, data);
  });
}

exports.write = function(newData, cb) {
  let json = JSON.stringify(newData);
  fs.writeFile(flashcardPath, json, cb);
}

exports.createQuestion = function(newQuestion, cb) {
  exports.getAllQuestions((err, questions) => {
    if(err) return cb(err);
    questions.push(newQuestion);
    exports.write(questions, cb);
  });
}
