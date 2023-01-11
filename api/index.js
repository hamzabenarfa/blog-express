const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect(process.env.url, 
    { useNewUrlParser: true,
     useUnifiedTopology: true,
   }).then(console.log('Connected to MongoDB'))
   .catch(err => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(4000, () => {
    console.log('Server started on port 4000');
});
