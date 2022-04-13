function encode(data) {
    let encodedString = ""
    for (let i=0; i<data.length; i++) {
        let char = data.charAt(i)
        let charCode = data.charCodeAt(i)
        encodedString += char.replace(char, String.fromCharCode(charCode +4))
    }
    console.log("Encoded String: ", encodedString)
    return encodedString
}

const searchString = (sourceString, keyword)=>{
    if( sourceString.search(keyword) !== -1){
        console.log(`${keyword} exists in ${sourceString}`)
    }else {
        console.log(`${keyword} does not exist in  ${sourceString}`)
    }
    }

function fileName(url) {
    let index = url.lastIndexOf("/")
    let filePath = url.substr(index +1)
    console.log("The file is: ", filePath)
}

module.exports = {encode, searchString, fileName}