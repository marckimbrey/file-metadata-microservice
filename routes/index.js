const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs')
const multer = require('multer');
var upload = multer({ dest: 'upload/' });

// Home page route
router.get('/',  (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.post('/upload',upload.single('file'), (req, res) => {
  console.log(req.file);
  const fileInfo = {
    fileName: req.file.originalname,
    type: req.file.mimetype,
    fileSize: req.file.size +' bytes'
  }
  fs.unlink(req.file.path, (err) => {
    if (err) throw err;

      res.json(fileInfo);
  })

})


module.exports = router;
