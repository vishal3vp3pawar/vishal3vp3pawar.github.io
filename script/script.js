function front_page()
{
    var div_front_page = document.getElementById("hero");
    var education_div = document.getElementById("services");
    var div = document.getElementById("contact");
    var project_div = document.getElementById("projects");
    var interest_div = document.getElementById("about");

    div.style.display = "none";
    education_div.style.display = "none";
    project_div.style.display = "none";
    interest_div.style.display = "none";

    div_front_page.style.display = "block";

    //myDiv.innerHTML = "Content To Show";
}

function education() {
    var education_div = document.getElementById("services");
    var div_front_page = document.getElementById("hero");
    var div = document.getElementById("contact");
    var project_div = document.getElementById("projects");
    var interest_div = document.getElementById("about");

    div_front_page.style.display = "none";
    div.style.display = "none";
    project_div.style.display = "none";
    interest_div.style.display = "none";

    education_div.style.display = "block";
    //myDiv.innerHTML = "<div><h1>Education</h1><h2>Mtech@IIIT H</h2></div>";
}

function projects_fun() {
    var project_div = document.getElementById("projects");
    var education_div = document.getElementById("services");
    var div_front_page = document.getElementById("hero");
    var div = document.getElementById("contact");
    var interest_div = document.getElementById("about");

    div_front_page.style.display = "none";
    div.style.display = "none";
    education_div.style.display = "none";
    interest_div.style.display = "none";

    project_div.style.display = "block";
}

function interests() {
    var div_front_page = document.getElementById("hero");
    var education_div = document.getElementById("services");
    var div = document.getElementById("contact");
    var project_div = document.getElementById("projects");
    var interest_div = document.getElementById("about");

    div_front_page.style.display = "none";
    div.style.display = "none";
    education_div.style.display = "none";
    project_div.style.display = "none";

    interest_div.style.display = "block";
}

/*function contact() {
    var myDiv = document.getElementById("main_area");
    myDiv.innerHTML = "contact";
}*/

function contact() {
    var div = document.getElementById("contact");
    var div_front_page = document.getElementById("hero");
    var education_div = document.getElementById("services");
    var project_div = document.getElementById("projects");
    var interest_div = document.getElementById("about");
    /*if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else */{
        div_front_page.style.display = "none";
        education_div.style.display = "none";
        project_div.style.display = "none";
        interest_div.style.display = "none";

        div.style.display = "block";
    }
}



function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function startTime() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("timedisplay").innerHTML = "Date: " + day + "/" + month + "/" + year + " " + "    Time: " + h + ":" + m + ":" + s;
    var t = setTimeout(function () { startTime() }, 500);
}
