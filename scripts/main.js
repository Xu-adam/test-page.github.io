alert("Welcome to my test page!")

let myImage = document.querySelector("img");
myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image-1.webp") {
    myImage.setAttribute("src", "images/image-2.webp");
  } else {
    myImage.setAttribute("src", "images/image-1.webp");
  }
};


let myButton = document.querySelector("button");  //button press
let myHeading = document.querySelector("h1");  //welcome heading

function setUserName() {
    let myName = prompt("Please enter your name here");
    if (!myName){
        setUserName();
    }
    else{
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome " + storedName;
}

myButton.onclick = function () {
    setUserName();
};
