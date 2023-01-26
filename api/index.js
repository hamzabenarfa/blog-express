const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

const port=4000;

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

const multer = require('multer');


app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect(process.env.url, 
    { useNewUrlParser: true,
     useUnifiedTopology: true,
   }).then(console.log('Connected to MongoDB'))
   .catch(err => console.log(err));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },filename:(req, file, cb) => {
        cb(null, new Date().getTime() + file.originalname);
    }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
  
});
  
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
