
var toggle = false;

//Handle window resizing
window.onresize = function(){
    var mq = window.matchMedia("(max-width: 750px)").matches;

    hamburgerBtn = document.getElementById("responsive-on");
    crossBtn = document.getElementById("responsive-off");
    dropDown = document.querySelector("nav ul");

    if(mq)
    {
        if(toggle == true)
        {
            hamburgerBtn.style.display = "none";
            crossBtn.style.display = "block";
            dropDown.style.display = "block";
        }

        else 
        {
            hamburgerBtn.style.display = "block";
            crossBtn.style.display = "none";
            dropDown.style.display = "none";
        }
    }

    else 
    {
        hamburgerBtn.style.display = "none";
        crossBtn.style.display = "none";
        dropDown.style.display = "block";
    }
}


function toggleResponsive() 
{
    hamburgerBtn = document.getElementById("responsive-on");
    crossBtn = document.getElementById("responsive-off");
    dropDown = document.querySelector("nav ul");

    if(toggle == false)
    {
        hamburgerBtn.style.display = "none";
        crossBtn.style.display = "block";
        dropDown.style.display = "block";
    }
    
    if(toggle == true) 
    {
        hamburgerBtn.style.display = "block";
        crossBtn.style.display = "none";
        dropDown.style.display = "none";
    }

    toggle = !toggle;
}
