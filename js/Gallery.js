console.log("Taqdis Computers || IMRAN ANSARI : 7588002141");

function leftsidemenucls(){
    document.getElementsByClassName("lefthand_menu12sadf")[0].style.display="none";
    document.getElementsByClassName("menubaclpagebtn")[0].style.display="none";
    document.getElementsByTagName("body")[0].style.position="relative";
}

function leftmenubaropen(){
    document.getElementsByTagName("body")[0].style.position="fixed";
    document.getElementsByClassName("menubaclpagebtn")[0].style.display="grid";
    document.getElementsByClassName("lefthand_menu12sadf")[0].style.display="grid";
}
function blackpage(){
    document.getElementsByClassName("lefthand_menu12sadf")[0].style.display="none";
    document.getElementsByClassName("menubaclpagebtn")[0].style.display="none";
    document.getElementsByTagName("body")[0].style.position="relative";
}

function showfullserc(){
    document.getElementsByClassName("servicepagelow_sadf0124sdf")[0].style.height ="auto";
    document.getElementsByClassName("showlessservi")[0].style.display="grid";
    document.getElementsByClassName("showfulldivsadf_uhas")[0].style.display="none";
    
}
function showlessserv(){
    document.getElementsByClassName("servicepagelow_sadf0124sdf")[0].style.height ="700px";
    document.getElementsByClassName("showlessservi")[0].style.display="none";
    document.getElementsByClassName("showfulldivsadf_uhas")[0].style.display="grid";
}

function shoproducthm(){
    document.getElementsByClassName("producysthome_hsadf045asdf")[0].style.height ="auto";
    document.getElementById("showprohidebtn2").style.display="grid";
    document.getElementById("showprohidebtn1").style.display="none";
    
}
function lessprodushm(){
    document.getElementsByClassName("producysthome_hsadf045asdf")[0].style.height ="700px";
    document.getElementById("showprohidebtn2").style.display="none";
    document.getElementById("showprohidebtn1").style.display="grid";
}
function slidedstoph(){
    stop()
}