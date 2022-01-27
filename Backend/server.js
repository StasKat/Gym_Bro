const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config
const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`server is running on port : ${port}`)
});

//sets up our middlewhere for our infastructure
//to launch we use nodemon server
//nodemon is useful because any changes "saved" and nodemon will automatically update our server. 
//and will reflect these changes. 

