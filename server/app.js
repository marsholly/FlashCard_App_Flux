const PORT = 8000;
const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');

const PracticeFlashcard = require('./models/PracticeFlashcard');

const app = express();
const server = http.createServer(app);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('src'));

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));


// app.use('*', (req, res) => {
//   let indexPath = path.join(__dirname, '../src/index.html');
//   res.sendFile(indexPath);
// });

app.get('/practice', (req, res) => {
  PracticeFlashcard.getAllQuestions((err, questions) => {
    if(err) return res.status(400).send(err);
    res.send(questions);
  })
});

app.post('/practice', (req, res) => {
  PracticeFlashcard.createQuestion(req.body, err => {
    if(err) return res.status(400).send(err);
    res.send();
  });
});

app.delete('/practice/:id', (req, res) => {
  let _id = req.params.id;
  PracticeFlashcard.removeOneQuestion(_id, err => {
    if(err) return res.status(400).send(err);
    PracticeFlashcard.getAllQuestions((err, questions) => {
      if(err) return res.status(400).send(err);
      res.send(questions);
    })
  });
})

server.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
