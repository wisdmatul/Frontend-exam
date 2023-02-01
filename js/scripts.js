/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function myFunction(){
    // window.location = "pricing.html"
    let inputVal = document.getElementById("inputVal").value;
    
    if(inputVal==="classic 350")
    {
        window.location = "pricing.html";
    }
    else if(inputVal==="activa")
    {
        window.location = "pricing1.html";
    }
    else
    {
        alert("result not found");
    }
}
