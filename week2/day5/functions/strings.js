words = [
    "Hello",
    "Goodbye",
    "Nodejs",
    "Coding",
    "Strings",
    "Melissa",
    "Amarpreet"
]
strings = [
    "Mountain Dew",
    "Eva, can I stab bats in a cave?",
    "Was it a car or a Cat I saw",
]
keywords =[
    "Dew",
    "Eva",
    "bats",
    "Cat"
]
files = [
    '~/coding/work/KnowledgeHut/weekday/fsdr-fast-02/week2/day3/app.js',
    "https://helper.beedev-services.com/about.html",
    "https://www.tutorialspoint.com/expressjs/expressjs_templating.htm"
]
function getRandom(data) {
    output = data[Math.floor(Math.random() * data.length)]
    return output
}

function encode() {
    data = getRandom(words)
    // console.log("the random word", data)
    let encodedString = ""
    for (let i=0; i<data.length; i++) {
        let char = data.charAt(i)
        let charCode = data.charCodeAt(i)
        encodedString += char.replace(char, String.fromCharCode(charCode +4))
    }
    // console.log("Encoded String: ", encodedString)
    return "The original word was " + data + " after encoding it is now " + encodedString
}

const searchString = ()=>{
    sourceString = getRandom(strings)
    keyword = getRandom(keywords)
    if( sourceString.search(keyword) !== -1){
        console.log(`${keyword} exists in ${sourceString}`)
    }else {
        console.log(`${keyword} does not exist in  ${sourceString}`)
    }
    }

function fileName() {
    url = getRandom(files)
    let index = url.lastIndexOf("/")
    let filePath = url.substr(index +1)
    console.log("The file is: ", filePath)
}

module.exports = {encode, searchString, fileName}