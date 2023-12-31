require('dotenv').config()
const express = require('express')
const userRoute = require('./routes/users')
const middlewareLogs = require('./middleware/logs')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(middlewareLogs)

app.use("/users", userRoute);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})