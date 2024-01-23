const express = require('express')
const connectToMongoose = require("./db")
connectToMongoose();
app.use(express.json())
const app = express()
const port = 3000
//Avialable Routes
app.use('/api/auth',require('./routes/auth'))
app.use('api/notes',require('./routes/notes'))

app.listen(port, ()=> (
    console.log('Example app listening on port${port}')
)
)