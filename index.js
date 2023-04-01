const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.PORT,(req,res) => {
    console.log("Server is running on port 3000");
})