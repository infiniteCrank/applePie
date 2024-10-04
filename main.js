var terminalBuffer = "ApplePie@home % Welcome to Apple Pie! <br> ApplePie@home % "
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
    terminal.innerHTML = terminalBuffer
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
            var lastChar = terminalBuffer[terminalBuffer.length - 1]
            var sliceAmount = -1
            if(lastChar === ";") sliceAmount = detectEncodedChar();
            if(detectTerminal()) break;
            terminalBuffer = terminalBuffer.slice(0, sliceAmount);
            terminal.innerHTML = terminalBuffer
            break;
        case "Enter":
            break;
        case " ":
            terminalBuffer += "&nbsp;"
            terminal.innerHTML = terminalBuffer 
            break;
        case "<":
            terminalBuffer += "&lt;"
            terminal.innerHTML = terminalBuffer 
            break;
        case ">":
            terminalBuffer += "&gt;"
            terminal.innerHTML = terminalBuffer 
            break;
        case "&":
            terminalBuffer += "&amp;"
            terminal.innerHTML = terminalBuffer 
            break;
        case "'":
            terminalBuffer += "&apos;"
            terminal.innerHTML = terminalBuffer 
            break;    
        case '"':
            terminalBuffer += "&quot;"
            terminal.innerHTML = terminalBuffer 
            break;       
        default:
            terminalBuffer += document.createTextNode(event.key).textContent
            terminal.innerHTML = terminalBuffer 
    }
    console.log(terminalBuffer)
    addCursor(terminal)
}

function detectTerminal(){
    var lastFour = terminalBuffer.slice(terminalBuffer.length-8)
    return (lastFour === "@home % ")
}

function detectEncodedChar(){
    var charCount = 0
    for (let i = terminalBuffer.length - 1; i >= 0; i--) {
        charCount++
        if(terminalBuffer[i] === "&"){
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