const connectTomongo=require("./database")
const express = require('express')


const app = express()
const port = 5000

app.use(express.json())
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))

app.listen(port, () => {
  console.log(`Backend running on the port ${port}`)
})
connectTomongo();