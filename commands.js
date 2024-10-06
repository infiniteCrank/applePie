function applePieHelp(cmd) {
    var msg = "foo bar is the way. but apple pie is king. what do you need help with? <br>"
    msg += "Type help -c to see a list of commands available <br>"
    msg += "Type help -a to get help with your account or create an account <br>"
    readAloud(msg)
    terminalData.terminalBuffer += terminalOutPut + msg
    terminalData.getTerminal().innerHTML = terminalData.terminalBuffer 
}

function applePieInfo(cmd){
    var msg = "Apple Pie is a way you can learn programming <br>"
    msg += "Type help -c to see a list of commands available <br>"
    msg += "Type help -a to get help with your account or create an account <br>"
    readAloud(msg)
    terminalData.terminalBuffer += terminalOutPut + msg
    terminalData.getTerminal().innerHTML = terminalData.terminalBuffer 
}