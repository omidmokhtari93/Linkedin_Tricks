const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const request = require('request')

server.listen(5000, () => {
    console.log('port 5000 is up');
})

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', msg)
        getValue()
    })

    function getValue() {
        const postId = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        request({ uri: 'https://jsonplaceholder.typicode.com/posts/' + postId }, (error, response, body) => {
            io.emit('message', body)
            setTimeout(() => {
                getValue()
            }, 5000)
        })
    }
})