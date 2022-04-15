// module.exports.palindrome = function pal(string) {
    

// }
const strings = [
    "Mountain Dew",
    "Eva, can I stab bats in a cave?",
    "12345",
    "Taco Cat",
    "2002",
    "Was it a car or a Cat I saw"
]
function getRandomString(strings) {
    string = strings[Math.floor(Math.random() * strings.length)]
    return string
}

function palindrome() {
    string = getRandomString(strings)
    // console.log("Original String: ", string)
    const fixString = string.toLowerCase().replace(/[\W_]/g, "")
    // console.log("After Removing Extra spaces: ", fixString)
    var newString = ""
    for (varChar of fixString) {
        newString = varChar + newString
    }
    // console.log("The fixString backwards: ", newString)
    if (fixString === newString) {
        // console.log(string, "Is a palindrome")
        return string + " is a palindrome because: " + newString + " backwards is " + fixString
    } else {
        // console.log(string, "Is NOT a palindrome")
        return string + " is not a palindrome because: " + newString + " backwards is " + fixString
    }

}
module.exports = palindrome