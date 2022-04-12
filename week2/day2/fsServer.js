// Creating a File System Module/Server

// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files

const http = require('http')
const fs = require('fs')

const port = 8000

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
    // create new file and writes the desired text
    fs.appendFile('logs.txt', "Beginning of Log File", function(err) {
        if (err) throw err
        console.log('Log File created')
    })
    // This will open the designated file (or create it if not already there) and has it open to edit
    fs.open('newLogs.txt', 'w', function(err, file) {
        if (err) throw err
        console.log('New Log file created')
    })
    // To update or add to our log file we would use this method
    fs.appendFile('newLogs.txt', "Beginning of Log File", function(err) {
        if (err) throw err
        console.log('Updated logs')
    })
    // this will replace all the content when run
    // fs.writeFile('newFile.txt', "New content", function(err) {
    //     if (err) throw err
    //     console.log('New content created')
    // })
    // This will delete our logs.txt file as we no longer need it
    fs.unlink('logs.txt', function(err) {
        if (err) throw err
        console.log('logs.txt was removed')
    })
    // this will rename a file
    fs.rename('newLogs.txt', 'logs.txt', function(err) {
        if (err) throw err
        console.log('file renamed')
    })
}).listen(port)
