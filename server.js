const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use('/jobs', require('./routes/job'))

app.listen(5000, function () {
  console.log('Listening at port 5000')
})
