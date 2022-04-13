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

module.exports.colorList = colorList

module.exports.getRandomColor = () => {
    return colorList[Math.floor(Math.random() * colorList.length)]
}