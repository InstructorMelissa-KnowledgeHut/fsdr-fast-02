// Creating a net Module/Server

// include the nodejs net module
const Net = require('net')
// set port
const port = 8000

// net.createServer() 

// creat new TCP server
const server = new Net.Server()
// server listens to a socket for a client to make a connection request
// socket is like an end point


// Our basic check that things are running correctly so far
server.listen(port, function() {
    console.log(`Server is listening on socket (port) localhost:${port}`)
})

// When a client requests a connection with the server, the server creates a new socket dedicated to that client
server.on('connection', function(socket) {
    console.log("A new connection has been created or established to Bob")
    // This is the new TCP connection so that the server can send data to the client

    socket.write("Hello Bob!")

    // We can also receive data from the client server (Bob)
    socket.on('data', function(chunk) {
        console.log(`Got your data Bob, Thank you from Jane: ${chung.toString()}`)
    })

    // Once we are done talking to Bob we need a way to end the connection
    socket.on('end', function() {
        console.log("Closing connection with Bob")
    })

    // Always include a catch...this is so if any of the above fail we have a way to show that it failed with a message

    socket.on('error', function(err) {
        console.log(`Something went wrong: ${err}`)
    })

})