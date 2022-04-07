function dogs(name) {
    for(var i=0; i < name.length; i ++) { 
    // starting at index 0; go to end of list called name; increase index by 1 each loop through
        console.log("Dog Name: ", name[i])
        // print to terminal the value of i for each loop if it was name.i it would be the index number
    }
    console.log("whole array: ", name)
}
// with out the following line nothing will happen because this line tells the function to turn on
dogs(['Bear', 'Abby', 'Lucy', 'Roxy', 'Copper']) // This can run right away due to lack of timer followed by numbers all while waiting on the next line
setTimeout(dogs, 1, ['Delta', 'Artie', 'Bumblebee']) // This will allow the numbers function to still run while waiting for the timer to count down and run the dogs function

// dogs([1,2,3,4,5])

function numbers(num) {
    for (var i =0; i < num.length; i ++) {
        console.log("Number: ", num[i])
    }
}
numbers([1,2,3,4,5])


// REPL - Read, Evaluate, Print & Loop