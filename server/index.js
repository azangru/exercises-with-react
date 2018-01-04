const path = require('path');
const express = require('express');
const webpackConfig = require('../webpack/webpack.config.js');

const app = express();
const port = 3000;

app.disable('x-powered-by');


if(process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    stats: {colors: true}
  }));
  app.use(webpackHotMiddleware(compiler));
}


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, function () {
  console.log(`Listening on http://localhost:${port}`);
});
