
const terminalData = {
    terminalBuffer: "ApplePie@home:cli % Welcome to Apple Pie! <br> ApplePie@home:cli % ",
    terminalMode: "cli"
}

window.addEventListener("load", (event) => {
    const mainElement = document.getElementById("main");
    var mainHeader = document.createElement("h1")
    mainElement.appendChild(mainHeader)
    mainHeader.innerHTML = "Welcome to Apple Pie!"
    // Promise.all([getJQuery(),Promise.resolve(3)]).then(values => {
    //     console.log(values)
    //     mainHeader.innerHTML = values[0]
    //     mainElement.innerHTML += values[1]
    // })
    generateTerminal(mainElement)
});

function generateTerminal(mainElement){
    var terminal = document.createElement("terminal")
    terminal.style.height = "100%"
    terminal.style.width = "90%"
    terminal.style.border = "2px solid black"
    terminal.style.padding = "5px"
    terminal.style.display = "inline-block"
    terminal.style.fontFamily = '"Lucida Console", monospace'
    terminal.style.overflowY = "scroll"
    terminal.innerHTML = terminalData.terminalBuffer
    terminal.tabIndex = 0
    terminal.id = "terminal"
    terminal.addEventListener("keyup",getInput)
    mainElement.appendChild(terminal)
    addCursor(terminal)
    terminal.focus()
}

function getInput(event){
    var terminal = document.getElementById("terminal")
    document.getElementById("cursor").remove()
    switch (event.key){
        case "Shift":
            break;
        case "Backspace":
            var lastChar = terminalData.terminalBuffer[terminalBuffer.length - 1]
            var sliceAmount = -1
            if(lastChar === ";") sliceAmount = detectEncodedChar();
            if(detectTerminal()) break;
            terminalData.terminalBuffer = terminalData.terminalBuffer.slice(0, sliceAmount);
            terminal.innerHTML = terminalData.terminalBuffer
            break;
        case "Enter":
            terminalData.terminalBuffer += "<br> ApplePie@home"+terminalData.terminalMode+" % "
            terminal.innerHTML = terminalData.terminalBuffer
            terminal.scrollTop = terminal.scrollHeight
            break;
        case " ":
            terminalData.terminalBuffer += "&nbsp;"
            terminal.innerHTML = terminalData.terminalBuffer 
            break;
        case "<":
            terminalData.terminalBuffer += "&lt;"
            terminal.innerHTML = terminalData.terminalBuffer 
            break;
        case ">":
            terminalData.terminalBuffer += "&gt;"
            terminal.innerHTML = terminalData.terminalBuffer 
            break;
        case "&":
            terminalData.terminalBuffer += "&amp;"
            terminal.innerHTML = terminalData.terminalBuffer 
            break;
        case "'":
            terminalData.terminalBuffer += "&apos;"
            terminal.innerHTML = terminalData.terminalBuffer 
            break;    
        case '"':
            terminalData.terminalBuffer += "&quot;"
            terminal.innerHTML = terminalData.terminalBuffer 
            break;       
        default:
            terminalData.terminalBuffer += document.createTextNode(event.key).textContent
            terminal.innerHTML = terminalBuffer 
    }
    console.log(terminalData.terminalBuffer)
    addCursor(terminal)
}

function detectTerminal(){
    var lastFour = terminalData.terminalBuffer.slice(terminalData.terminalBuffer.length-8)
    return (lastFour === "@home"+terminalData.terminalMode+" % ")
}

function detectEncodedChar(){
    var charCount = 0
    for (let i = terminalData.terminalBuffer.length - 1; i >= 0; i--) {
        charCount++
        if(terminalData.terminalBuffer[i] === "&"){
            i=-1
        }
        if(charCount>7){
            charCount = 1
            i=-1
        }

    }
    return (charCount *-1)
}

function addCursor(terminal){
    var cursor = document.createElement("cursor")
    cursor.style.height = "14"
    cursor.style.width = "5"
    cursor.style.display = "inline"
    cursor.style.backgroundColor = "black"
    cursor.innerHTML = "."
    cursor.classList.add("blink_me")
    cursor.id = "cursor"
    terminal.appendChild(cursor)
}
// function getJQuery() {
//     return fetch("https://code.jquery.com/jquery-2.2.4.min.js")
//     .then(x => x.text())
//     .then(x => x.substring(17,10))
// }