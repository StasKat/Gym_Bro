const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_URI

//mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
mongoose.connect('mongodb://127.0.0.1:27017/GymBro');
//instead of using localhost. use 127.0.0.1.

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established.")
})


app.listen(port, () => {
    console.log(`server is running on port : ${port}`)
});

//sets up our middlewhere for our infastructure
//to launch we use nodemon server
//nodemon is useful because any changes "saved" and nodemon will automatically update our server. 
//and will reflect these changes. 

