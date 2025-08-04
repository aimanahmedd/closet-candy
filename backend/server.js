require('dotenv').config()

const express = require('express')


//express app
const app = express()

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/',(req, res)=>{
    res.json({mssg: 'This is the app meow'})
}) //responds to get requests

//listening for requests
app.listen(process.env.PORT, ()=>{
    console.log("listening on port 4000")
})
