window.addEventListener("load", (event) => {
    const mainElement = document.getElementById("main");
    var mainHeader = document.createElement("h1")
    mainHeader.innerHTML = "Welcome to Apple Pie!"
    mainElement.appendChild(mainHeader)

    getJQuery()
    Promise.all([getJQuery()]).then(values => {
        console.log(values)
    })
    
});

function getJQuery() {
    return fetch("https://code.jquery.com/jquery-2.2.4.min.js")
    .then(x => x.text())
    .then(x => x.substring(17,10))
}