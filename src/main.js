const path = require('path');
const express = require('express');
const { createIPX, ipxFSStorage, createIPXNodeServer } = require('ipx');

const ipx = createIPX({
  storage: ipxFSStorage({ dir: path.join(__dirname, '../public/assets/images')}),
});
const ipxMiddleware = createIPXNodeServer(ipx);

const app = express();

app.use('/photos', ipxMiddleware);

app.use(express.static(path.join(__dirname, '../', 'public')), (req, res, next) => {
  if (!req.statusCode) {
    res.redirect('http://localhost:3000/404.html');
  }
  next();
});


app.listen(3000, () => {
  console.log('[INFO] Dev server start at: http://localhost:3000');
});
