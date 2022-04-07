const express = require('express') //this allows our server to use the npm package express which is for backends
const server = express() // We are calling it server and using express
const hello = require('./hello')
server.get('/', (req, res) => {  // req is duller than res because req was never used
    res.json({ message: 'Server is running'})
    // res.json({message2: 'Way to go!'})
})
server.get('/hello', (req, res) => {
    res.json({message: "Hello Amarpreet!", question: "How is your day going?"})
})
// server.get('/numbers', (req, res) => {
//     hello.numbers([1,2,3,4,5])
//     .then(nums => res.status(200).json({data: nums}))
// })
// The above function will allow us to load localhost:5000 into the browser and it should show Server is running
const PORT = 5000
// This sets the port to 5000 so localhost:5000
server.listen(PORT, () => {
    console.log(`Listening on ` + PORT)
})
// this is what we will see in the terminal when running the npm run server script