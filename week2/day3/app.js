const palindrome = require('./palindrome.js')
const {encode, searchString, fileName} = require('./strings.js')
const http = require('http')
const dateTime = require('./time.js')
const port = 8000
const color = require('./colors.js')
const calculator = require('./calc.js')

// console.log("** 1 Run Palindrome: ")
// palindrome("Mountain Dew")
// palindrome('2002')
// palindrome('Taco Cat')
// console.log("** 1 Palindrome function Ran")

// console.log("*** 2 Run Encode")
// encode("abc")
// encode("Mountain Dew")
// encode("1234")
// encode("7890")
// console.log("*** 2 Encode function complete")

// console.log("**** 3 Run Search String")
// searchString('Hello, how are you today?', 'you')
// searchString("Hello, how are you today?", "Hi")
// console.log("**** 3 Search String function complete")

// console.log("**** 4 Run File Name")
// fileName('~/coding/work/KnowledgeHut/weekday/fsdr-fast-02/week2/day3/app.js')
// fileName("https://helper.beedev-services.com/about.html")
// console.log("**** 4 File Name function complete")

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write("My current date and time is: " + dateTime.localDateTime())
//     console.log("**** 5 Running http server function dateTime", dateTime.localDateTime())
//     res.end()
// }).listen(port)

// console.log("**** 6a List all the colors: ", color.colorList)
// console.log("Test: ", color.colorList[0]['colorName'])

// console.log("***** 6b Random Color: ", color.getRandomColor())
// console.log("Test 2: ", color.getRandomColor()['colorName'])

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write("Today's Random color is: " + color.getRandomColor()['colorName'])
//     console.log("**** 6a List all the colors: ", color.colorList)
//     console.log("***** 6b Random Color: ", color.getRandomColor())
//     res.end()
// }).listen(port)

console.log("**** 7 Run the Calculator Functions")
var x = 20
var y = 10
console.log("Setting the variables: \n y=", y,"\n x=", x)
calculator.add(x,y)
calculator.subtract(x,y)
calculator.multiply(x,y)
calculator.divide(x,y)
console.log("**** 7 Finished running Calculator Functions")