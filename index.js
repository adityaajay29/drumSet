// adding event listener to all the buttons

// getting number of elements having class "drum" 
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var pressButton=this.innerHTML;
        handleClick(pressButton);
        addAnimation(pressButton);
    });
    document.addEventListener("keydown",function(event)
    {
        // it will check the event happening op pressing the key
        // that kwy will be passed to the function and corresponding sound will be played
        handleClick(event.key);
        addAnimation(event.key);
    });
}
function handleClick(key)
{
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        // default:
        //     console.log(this.innerHTML); 
    }
}

function addAnimation(pressedKey)
{
    // animate the pressed key
    var animate=document.querySelector("."+pressedKey);
    // adding the class which contain the propery of the animation to the pressed button
    animate.classList.add("pressed");
    // now to get back the buttons to their original state
    setTimeout(function()
    {
        animate.classList.remove("pressed");
    },100);
}