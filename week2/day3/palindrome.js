// module.exports.palindrome = function pal(string) {
    

// }



function palindrome(string) {
    console.log("Original String: ", string)
    const fixString = string.toLowerCase().replace(/[\W_]/g, "")
    console.log("After Removing Extra spaces: ", fixString)
    var newString = ""
    for (varChar of fixString) {
        newString = varChar + newString
    }
    console.log("The fixString backwards: ", newString)
    if (fixString === newString) {
        console.log(string, "Is a palindrome")
    } else {
        console.log(string, "Is NOT a palindrome")
    }

}

module.exports = palindrome