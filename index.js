let a;
let pin=0;
if(pin==0)
{
    document.getElementById('play3').style.display = "none";
}
 

function play(a) {
    if (a == 11) {
        document.getElementById('ss').innerHTML = '<p>Perfect<br>by Ed Sheeran</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="perfect.mp3" type="audio/ogg"></audio>';
       
    }
    if (a == 12) {
        document.getElementById('ss').innerHTML = '<p>Suzume<br>by Radwimps</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="suzume.mp3" type="audio/ogg"></audio>';
      
    }
    if (a == 13) {
        document.getElementById('ss').innerHTML = '<p height="30px">Champagne Problems<br>by Taylor Swift</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="champagne.mp3" type="audio/ogg"></audio>';
    }
        if (a == 21) {
            document.getElementById('ss').innerHTML = '<p height="30px">Raabta<br>by Pritam</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="Raabta.mp3" type="audio/ogg"></audio>';
        }

        if (a == 22) {
            document.getElementById('ss').innerHTML = '<p height="30px">Jeena Jeena<br>by Atif Aslam</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="Jeena Jeena.mp3" type="audio/ogg"></audio>';
        }
        if (a == 23) {
            document.getElementById('ss').innerHTML = '<p height="30px">Banjaara<br>by Arijit Singh</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="Banjaara.mp3" type="audio/ogg"></audio>';
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
document.getElementById("submit").addEventListener("click",cpin);
function cpin()
{
pin=document.getElementById('epin').value;
console.log(pin);
if(pin==3207)
document.getElementById('play3').style.display = "block";

}
function play1()
{

 document.getElementById('play1').style.display = "block";
 if(document.getElementById('ab').style.display =="block")
 document.getElementById('ab').style.display = "none";
 document.getElementById('empty').style.display="none";
 if(document.getElementById('play2').style.display =="block")
    document.getElementById('play2').style.display = "none";
    document.getElementById('intro').style.display = "none";
    if(document.getElementById('pin').style.display =="block")
document.getElementById('pin').style.display = "none";
}
function ab()
{
    document.getElementById('ab').style.display = "block";
    if(document.getElementById('play1').style.display =="block")
    document.getElementById('play1').style.display = "none";
    if(document.getElementById('play2').style.display =="block")
    document.getElementById('play2').style.display = "none";
    document.getElementById('intro').style.display = "none";
    document.getElementById('empty').style.display="none";
    if(document.getElementById('pin').style.display =="block")
document.getElementById('pin').style.display = "none";
  
}
function play2()
{   document.getElementById('play2').style.display = "block";
    if(document.getElementById('play1').style.display =="block")
    document.getElementById('play1').style.display = "none";
    document.getElementById('intro').style.display = "none";
    document.getElementById('empty').style.display="none";
    document.getElementById('ab').style.display = "none";
    if(document.getElementById('pin').style.display =="block")
document.getElementById('pin').style.display = "none";

}
function play3(pin){
   

    document.getElementById('pin').style.display = "block";
  if(document.getElementById('play2').style.display =="block")
document.getElementById('play2').style.display = "none";
    if(document.getElementById('play1').style.display =="block")
    document.getElementById('play1').style.display = "none";
    document.getElementById('intro').style.display = "none";
    document.getElementById('empty').style.display="none";
    document.getElementById('ab').style.display = "none";
 

}