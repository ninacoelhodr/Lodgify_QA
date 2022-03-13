
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('<a href="contact.html">contact.html</a><br/><a href="pricing.html">pricing.html</a><br/>')
})

app.use(express.static('public'))


app.listen(port, () => {
    console.log(`Hosted server in the following address: http://localhost:${port} > Leave terminal open and execute tests command in a new one`)
})