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

const app = express();
const server = http.createServer(app);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('build'));

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

server.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
