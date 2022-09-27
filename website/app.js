console.log("This script was loaded from an ecxternal JS file")

// this is an alert
// alert("This is an alert!")

var name = window.prompt("Enter your name: ")
alert(`Hello ${name}`)

// use documnet.getElementByID()
document.getElementById("name").innerHTML = "<h2>Hello " + name + "!</h2>"