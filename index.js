require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.send("https://github.com/thesrijankumar")
})

app.get('/friends', (req, res) => {
    res.send('hy guys')
})

app.listen(port,() => {
    console.log(`greeting from Express \nPlease visit the port at http://localhost:${port}`)
})