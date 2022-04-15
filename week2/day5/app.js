const express = require('express')
const path = require('path')
const app = express()
const port = 8000

const colors = require('./functions/colors')
const palindrome = require('./functions/palindrome')
const time = require('./functions/time')
const calc = require('./functions/calc')
const strings = require('./functions/strings')


app.set('view engine', 'pug') // this tells express that we are using pug as our template engine
// app.set('views', './views') // This tells express where to find our views or files to display
app.set('views', path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res) {
    res.render('index', {
        time: time.localDateTime()
    })
})

app.get('/colors', function(req, res) {
    res.render('colors', {
        random: colors.getRandomColor()['colorName'],
        one: colors.colorList[0]['colorName'],
        two: colors.colorList[1]['colorName'],
        three: colors.colorList[2]['colorName'],
        four: colors.colorList[3]['colorName'],
        five: colors.colorList[4]['colorName']
    })
})

app.get('/palindrome', function(req, res) {
    res.render('palindrome', {
        pal: palindrome()
    })
})

var x = 40
var y = 3.14

app.get('/calculator', function(req, res) {
    res.render('calc', {
        x: 40,
        y: 3.14,
        add: calc.add(x,y),
        sub: calc.subtract(x,y),
        mult: calc.multiply(x,y),
        divide: calc.divide(x,y)
    })
})

app.get('/strings', function(req, res) {
    res.render('strings', {
        encode: strings.encode(),
        search: strings.searchString(),
        file: strings.fileName()
    })
})



app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})