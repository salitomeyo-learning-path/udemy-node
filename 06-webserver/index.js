const express = require('express')
const app = express();
const port = 8080;

app.use( express.static('public') );

app.get('/', (req, res) => {
  res.send('This is the home reques')
})

app.get('/hello-world', (req, res) => {
    res.send('this is the Hello World')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})