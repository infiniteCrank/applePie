function applePieHelp(cmd) {
    var msg = "what can I help you with? <br>"
    msg += "Type help -c to see a list of commands available <br>"
    msg += "Type help -a to get help with your account or create an account <br>"
    readAloud(msg)
    terminalData.terminalBuffer += terminalOutPut + msg
    terminalData.getTerminal().innerHTML = terminalData.terminalBuffer 
}

function applePieInfo(cmd){
    var msg = "Apple Pie is a way you can learn programming. <br>"
    msg += "I was mainly developed to train the next generation of hackers. <br>"
    msg += "Programming is a way to express yourself in a digital world. <br>"
    msg += "In the future those who have knowledge of how things work around them will be kings and queens. <br>"
    msg += "In a world with AI programming will be how we keep balance. <br>"
    readAloud(msg)
    terminalData.terminalBuffer += terminalOutPut + msg
    terminalData.getTerminal().innerHTML = terminalData.terminalBuffer 
}