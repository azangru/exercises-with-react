const path = require('path');
import express from 'express';
const webpackConfig = require('../webpack/webpack.config.js');

const app = express()

app.disable('x-powered-by');

console.log('before check');
// if(process.env.NODE_ENV === 'development') {
if(module.hot) {
  console.log('here');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    stats: {colors: true}
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('/api', (req, res) => {
  res.send({
    message: 'I am a server route and can also be hot reloaded! Yay!'
  })
})

app.get('*', function(req, res) {
  let html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Example</title>
      </head>
      <body>
        <main id="root"></main>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.send(html);
});

export default app
