const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json())
const path = require('path');

const authRouter = require("./routes/auth.routes")
app.use('/auth', authRouter)

const courseRouter = require("./routes/course.routes")
app.use('/course', courseRouter)

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
app.listen(process.env.PORT,(err) => {
    if(err) console.error(err);
    else{
        console.log("Server is running on port",process.env.PORT);
        require('./configs/db.config.js');
    }

})