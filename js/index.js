// document.querySelector("button").addEventListener("click",handleClick); //click is type and handleClick is event listener(function)

// function handleClick()
// {
//     alert("1st button got clicked");
// }

// Function for Playing the sound 
function soundPlay(letter)
{
switch (letter) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    break;
    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    break;
    default:
        console.log(buttonName);
        break;
    }
}

function animateButtons(letter) {
    var letterSelected = document.querySelector("."+letter);
    letterSelected.classList.add("pressed");
    setTimeout(function(){
        letterSelected.classList.remove("pressed");
    },100); //To remove the animation effect after a span of 0.1s or 100ms.
}
//To dectect the mouse click on instrument buttons.
var numDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numDrums; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () 
    { 
        var buttonName = this.textContent;
        soundPlay(buttonName);
        animateButtons(buttonName);
    });
} // function () { } is an anonymous function.

//To detect the keyboard press
document.addEventListener("keydown",function (event){
    var keyPressed = event.key; //.key contains the name of key pressed and event indicates the keydown event
    soundPlay(keyPressed);
    animateButtons(keyPressed);
});