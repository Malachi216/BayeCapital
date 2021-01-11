if (screen.width <= 699) {
    document.location = "mobile.html";
    }
var body = document.body,
html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                   html.clientHeight, html.scrollHeight, html.offsetHeight );
if(height>1000){
    document.getElementById("container").style.marginTop="20px";
    document.getElementById("container").style.width="100%";
    document.getElementById("Main").style.width="700px";
    document.getElementById("yash").style.width="700px";
    document.getElementById("container").style.marginBottom="10px";
    document.getElementById("tringe").style.display="none";
}
function BotText(intendedReply) {
    var d = new Date();
    var n = d.getHours();
    var p = d.getMinutes();
    n = n + ":" + p + "   Today";
    var node = document.createElement("LI");
    var elements = document.getElementsByClassName('you');
    var requiredElement = elements[0];
    document.getElementById("mess1").innerHTML=intendedReply;
    document.getElementById("youtime").innerHTML=n;
    var cln = requiredElement.cloneNode(true);
    cln.style.display= "block";
    document.getElementById("chat").appendChild(cln); 
}

document.getElementById("ellipse4mail").onclick =function(){
    

}
