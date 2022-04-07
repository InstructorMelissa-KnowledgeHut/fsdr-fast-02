# REPL Commands

.break: When in the process of inputting a multi-line expression, entering the .break command (or pressing the <ctrl>-C key combination) will abort further input or processing of that expression.
.clear: Resets the REPL context to an empty object and clears any multi-line expression currently being input.
.exit: Close the I/O stream, causing the REPL to exit.
.help: Show this list of special commands.
.save: Save the current REPL session to a file: > .save ./file/to/save.js
.load: Load a file into the current REPL session. > .load ./file/to/load.js
.editor: Enter editor mode (<ctrl>-D to finish, <ctrl>-C to cancel).


# index.js
npm install express
npm install -D nodemon

then once the code is written in index.js
try running npm run server and then npm run start