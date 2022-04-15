class Color {
    constructor(colorName, hexCode) {
        this.colorName = colorName
        this.hexCode = hexCode
    }
}

const colorList = [
    new Color('red', '#ff0000'),
    new Color('black', '#000000'),
    new Color('white', '#ffffff'),
    new Color('cyan', '#00ffff'),
    new Color('green', '#4c834c'),
]
const theColors = colorList.map(colorFunction)

// console.log("The Colors from colors.js: ",theColors)

function colorFunction(list) {
    var theList = []
    // console.log("list from colorFunction :",list['colorName'])
    theList.push(list['colorName'])
}


module.exports.colorList = colorList

module.exports.theColors = theColors

module.exports.getRandomColor = () => {
    return colorList[Math.floor(Math.random() * colorList.length)]
}