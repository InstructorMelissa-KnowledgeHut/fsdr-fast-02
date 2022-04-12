// Creating a http Module/Server

const http = require('http')

// Setting the port we want to use
const port = 8000

// This will write something to the browser
http.createServer(function (req, res) {
    // We should include a header line with the correct content
    // this line will help our browser know what to expect 
    res.writeHead(200, {'Content-Type': 'text/html'})
    // res.write('Hello World') // With this line hello world will show
    res.write('')  // This will just show the / so that when if we type a new folder or path in the address bar it will add that after the /
    res.write(req.url)
    console.log(`Your url is localhost: ${port}${req.url}`)
    res.end()
}).listen(port)

// open browser with localhost:8000 or 127.0.0.1:8000/