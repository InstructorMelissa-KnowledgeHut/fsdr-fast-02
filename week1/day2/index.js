var url = require('url')
var page = url.parse('https://github.com/InstructorMelissa-KnowledgeHut/fsdr-fast-02', true)
// var page = url.parse('https://helper.beedev-services.com/fundamentals/loops.html', true)
// console.log("display host: ", page.host) // This will display the domain name or root url address
// console.log("display pathname: ", page.pathname) // This will display the current url's folder page location with in the url

console.log(process.cwd())
var input = process.stdin
input.setEncoding('utf-8')
input.on('data', (data)=> {
    data = data.trim()
    if (data =='exit') {
        console.log('Thank you') //If we type in the terminal exit and hit enter then this statement will run
        process.exit()
    }
    else if (data =='Hello') {
        console.log("Why hello there") // If we type Hello this statement will run
        process.exit()
    } else {
        process.exit()  // Anything that is typed that is not covered by the if statements will trigger this to run
    }
})

// function palindrome(word) {
//     const cleanUp = word.toLowerCase().replace(/[\W_]/g, "")
//     let fixedWord = ""
//     for (char of cleanUp) {
//         fixedWord = char + fixedWord
//     }
//     console.log("the fixedword: ", fixedWord)
//     if (fixedWord === cleanUp) {
//         console.log("It's a palindrome")
//     } else {
//         console.log("Not a palindrome")
//     }
    
// }

// palindrome('Mom')
// palindrome('Dog')