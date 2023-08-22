const express = require('express')
const app = express()
port = 3000

app.get('/', function (req, res) {
    res.send('<h1>Bem-vindo(a) à Demo da Pipeline CI/CD do OCI DevOps :)</h1>')
})

app.listen(port, function() {
    console.log('OKE - Oracle Cloud app listening on port ' + port);
})                   
