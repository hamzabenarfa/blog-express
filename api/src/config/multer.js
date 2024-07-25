const multer = require("multer");
const path = require("path");

const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "./public/images");
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  });

  module.exports = upload;