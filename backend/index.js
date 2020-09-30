require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const indexRouter = require('./routes/index');
// const streamRouter = require('./routes/stream');
// const addressRouter = require('./routes/addresses');
// const assetRouter = require('./routes/assets');
// const leaderBoardRouter = require('./routes/leaderboard');


const app = express();
const port = process.env.PORT || '3000';

app
  .use(bodyParser.json())
  .options('*', cors())
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  /*
   * Routes
   */
//   .use('/', indexRouter)
//   .use('/stream', streamRouter)
//   .use('/address', addressRouter)
//   .use('/asset', assetRouter)
//   .use('/leaderboard', leaderBoardRouter)

  
app.listen(port, () => {
  console.log(`Server started on port ${port}`);

//   await multichainService.init(app);
});

module.exports = app;