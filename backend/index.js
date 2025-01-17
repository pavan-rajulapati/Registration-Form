const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv')
const  mongoose  = require('mongoose')

const app = express()
app.use(cors())
app.use(bodyParser.json())
dotEnv.config()

const port = process.env.PORT
const url = process.env.MONGO_URI

// Mongo DB atlas connection 

const dbConnection = ()=>{
    try {
        mongoose.connect(url)
        console.log('Connected to the DB')
    } catch (error) {
        console.log('Error at connecting to the database',error.message)
        process.exit(1)
    }
}

dbConnection()

// API routes 

app.use(require('./routes/user.routes'))

app.listen(port,()=>{
    console.log(`Port running at ${port}`);
})