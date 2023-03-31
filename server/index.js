const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const cors = require('cors')

const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors({
    origin: '*'
}));

app.post('/convert', upload.single('avif'), (req, res, next) => {
  const { path, filename } = req.file;

  sharp(path)
    .png()
    .toFile(`uploads/${filename}.png`, (err) => {
      if (err) return next(err);
      res.download(`uploads/${filename}.png`);
    });
    console.log('ssss')
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
