window.addEventListener("load", (event) => {
    const mainElement = document.getElementById("main");
    var mainHeader = document.createElement("h1")
    mainElement.appendChild(mainHeader)

    Promise.all([getJQuery(),Promise.resolve(3)]).then(values => {
        console.log(values)
        mainHeader.innerHTML = values[0]
        mainElement.innerHTML += values[1]
    })

    
});

function getJQuery() {
    return fetch("https://code.jquery.com/jquery-2.2.4.min.js")
    .then(x => x.text())
    .then(x => x.substring(17,10))
}