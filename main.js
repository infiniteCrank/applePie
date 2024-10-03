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
    terminal.innerHTML = "ApplePie@home % Welcome to Apple Pie! <br> ApplePie@home % "
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
            var lastEightChars = terminal.innerHTML.slice(terminal.innerHTML.length - 8, terminal.innerHTML.length)
            console.log(lastEightChars)
            if(lastEightChars !== "@home % ") {
                terminal.innerHTML = terminal.innerHTML.slice(0, -1)
            }
            break;
        case "Enter":
            break;
        default:
            terminal.innerHTML += document.createTextNode(event.key).textContent
    }
    
    addCursor(terminal)
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