let a;
function play(a) {
    if (a == 1) {
        document.getElementById('ss').innerHTML = '<p>Perfect</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="perfect.mp3" type="audio/ogg"></audio>';
       
    }
    if (a == 2) {
        document.getElementById('ss').innerHTML = '<p>Suzume</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="suzume.mp3" type="audio/ogg"></audio>';
      
    }
    if (a == 3) {
        document.getElementById('ss').innerHTML = '<p height="30px">Champagne Problems</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="champagne.mp3" type="audio/ogg"></audio>';
        
    }
    
}
function list() {
    if ((document.getElementById('playlist').style.display == "none"))
        document.getElementById('playlist').style.display = "block";
    else
        document.getElementById('playlist').style.display = "none";

}

document.getElementById("toggle").addEventListener("click", list);
document.getElementById("1").addEventListener("click", play1);
document.getElementById("about").addEventListener("click", ab);
document.getElementById("2").addEventListener("click", play2);
document.getElementById("3").addEventListener("click", play3);
function play1()
{

 document.getElementById('play1').style.display = "block";
 if(document.getElementById('ab').style.display =="block")
 document.getElementById('ab').style.display = "none";
 document.getElementById('empty').style.display="none";
}
function ab()
{
    document.getElementById('ab').style.display = "block";
    if(document.getElementById('play1').style.display =="block")
    document.getElementById('play1').style.display = "none";
    document.getElementById('intro').style.display = "none";
    document.getElementById('empty').style.display="none";
  
}
function play2()
{
    if(document.getElementById('play1').style.display =="block")
    document.getElementById('play1').style.display = "none";
    document.getElementById('intro').style.display = "none";
    document.getElementById('empty').style.display="block";
    document.getElementById('ab').style.display = "none";

}
function play3()
{
    if(document.getElementById('play1').style.display =="block")
    document.getElementById('play1').style.display = "none";
    document.getElementById('intro').style.display = "none";
    document.getElementById('empty').style.display="block";
    document.getElementById('ab').style.display = "none";
 

}