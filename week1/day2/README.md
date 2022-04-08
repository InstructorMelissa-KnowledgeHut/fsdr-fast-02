Modules

Core - Load automatically aka - built in modules

Local - These are the ones that we build - Local to current app only

Third Party - Open source packages

// arch - returns process architecture so like the system is x64
// console.log(process.arch)  // On Mac it returns arm64  On Windows x64

// args - returns command line arguments as an array
// console.log(process.args)  // Getting undefined as no process are currently running

// env - returns user environment
// console.log(process.env)

// pid - returns process id of the process
// console.log(process.pid)

// platform - returns platform of hte process
// console.log(process.platform) // On Mac it returns darwin on Windows win32

// release - returns the metadata for the current node release
// console.log(process.release)

// version - returns the node version
// console.log(process.version)

// versions - returns the node version and its dependencies
// console.log(process.versions)

cwd() - returns path of current working directory
hrtime() - returns the current high-res real time in [seconds, nanoseconds]
memoryUsage() - returns an objects having info0 on memory usage
process.kill(pid[, signal]) - used to kill a given pid
uptime() - returns the Node.js process uptime in seconds
exit([code]) - ends the process with the specified code (if omitted will just use success code 0)



Initialize your project
In your terminal

npm init
or
npm init -y
This will create your package.json file.
#1 will require input from you where you can just hit enter to say yes or change what it says.
#2 will just say yes to everything - no input required