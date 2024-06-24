require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
})

app.get('/facebook', (req, res) => {
    res.send('<h1>please login at code</h1>')
})

app.get('/google', (req, res) => {
    res.send('<h2>please login at code with google</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})