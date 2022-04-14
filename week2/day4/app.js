const express = require('express')
const app = express()
const port = 8000

const colors = require('./functions/colors.js')
const palindrome = require('./functions/palindrome')
const calc = require('./functions/calc')

var y = 50
var x = 30




app.get('/', (req, res) => {
    // res.json({message: `App is up and running.`})
    res.status(200)
    .send("<h1>Your app is up and running</h1>  <ul> <li><a href='/colors'>Colors</a></li>  <li><a href='/palindrome'>Palindrome</a></li>  <li><a href='/calculator'>Calculator</a></li> </ul>")
})

app.get('/colors', (req, res) => {
    // res.write(colors.getRandomColor()['colorName'])
    // res.json([{Colors: "Here is a random color from our list"},colors.getRandomColor()])
    console.log(colors.colorList)
    console.log(colors.theColors)
    res.status(200)
    .send("<h1>Here is our radom color</h1> <h2>" + colors.getRandomColor()['colorName'] + "</h2>" + "<h1>Here is our list of colors</h1> <ul><li>" + colors.colorList[0]['colorName'] + "</li><li>" + colors.colorList[1]['colorName'] + "</li><li>" + colors.colorList[2]['colorName'] + "</li><li>" + colors.colorList[3]['colorName'] + "</li><li>" + colors.colorList[4]['colorName'] + "</li></ul>")
})

app.get('/palindrome', (req, res) => {
    // res.json(palindrome('Mountain Dew'))
    res.status(200)
    .send("<h1>Here is our Palindrome function</h1><h2>" + palindrome("Taco Cat") + "</h2>")
})

app.get('/calculator', (req, res) => {
    // res.json(
    //     [
    //         {Calculator: "Here are the results of our functions"},
    //         {Numbers: [
    //             {Y: y}, 
    //             {X: x}
    //         ]}, 
    //         {Adding: calc.add(x,y)},
    //         {Subtraction: calc.subtract(x,y)},
    //         {Multiply: calc.multiply(x,y)},
    //         {Division: calc.divide(x,y)}
    //     ])
    res.status(200)
    .send("<h1>The Calculator Page</h1><h2>Our numbers are: </h2><ul><li> X = " + x + "</li><li> Y = " + y + "</li></ul> <div><h3>Adding x + y = " + calc.add(x,y)+"</h3><h3>Subtracting x - y = " + calc.subtract(x,y)+"</h3><h3>Multiplying x * y = " + calc.multiply(x,y)+"</h3><h3>Dividing x / y = " + calc.divide(x,y)+"</h3></div>")
})

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})