let a;

 

function play(a) {
    if (a == 11) {
        document.getElementById('ss').innerHTML = '<br><p>Perfect<br>by Ed Sheeran</p>';
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
    if (a == 14) {
        document.getElementById('ss').innerHTML = '<p height="30px">Shivers<br>by Ed Sheeran</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="shivers.mp3" type="audio/ogg"></audio>';
    }
    if (a == 15) {
        document.getElementById('ss').innerHTML = '<p height="30px">Galway Girl<br>by Ed Sheeran</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="galway.mp3" type="audio/ogg"></audio>';
    }
    if (a == 16) {
        document.getElementById('ss').innerHTML = '<p height="30px">Wildest Dreams<br>by Taylor Swift</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="wildest.mp3" type="audio/ogg"></audio>';
    }
    if (a == 17) {
        document.getElementById('ss').innerHTML = '<p height="30px">Paper Rings<br>by Taylor Swift</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="rings.mp3" type="audio/ogg"></audio>';
    }
    if (a == 18) {
        document.getElementById('ss').innerHTML = '<p height="30px">Blank Space<br>by Taylor Swift</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="blank.mp3" type="audio/ogg"></audio>';
    }
    if (a == 19) {
        document.getElementById('ss').innerHTML = '<p height="30px">Ask me No Questions<br>by St. Bridget John</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="ask.mp3" type="audio/ogg"></audio>';
    }
    if (a == 20) {
        document.getElementById('ss').innerHTML = '<p height="30px">Hurt<br>by Johnny Cash</p>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="hurt.mp3" type="audio/ogg"></audio>';
    }

        if (a == 21) {
            document.getElementById('ss').innerHTML = '<p height="30px">Raabta<br>by Pritam</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="Raabta.mp3" type="audio/ogg"></audio>';
        }

        if (a == 22) {
            document.getElementById('ss').innerHTML = '<p height="30px"><br>Jeena Jeena<br>by Atif Aslam</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="Jeena Jeena.mp3" type="audio/ogg"></audio>';
        }
        if (a == 23) {
            document.getElementById('ss').innerHTML = '<p height="30px">Banjaara<br>by Arijit Singh</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="Banjaara.mp3" type="audio/ogg"></audio>';
        }
        if (a == 24) {
            document.getElementById('ss').innerHTML = '<p height="30px">Nothing Holding Me Back<br>by Shawn Mendes</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="holding.mp3" type="audio/ogg"></audio>';
        }
        if (a == 25) {
            document.getElementById('ss').innerHTML = '<p height="30px">Señorita<br>by Shawn Mendes,Camila Cabello</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="sen.mp3" type="audio/ogg"></audio>';
        }
        if (a == 26) {
            document.getElementById('ss').innerHTML = '<p height="30px">Sweet but Psycho <br>by Ava Max</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="sbs.mp3" type="audio/ogg"></audio>';
        }
        if (a == 27) {
            document.getElementById('ss').innerHTML = '<p height="30px">Falling<br>by Harry Styles</p>';
            document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="fall.mp3" type="audio/ogg"></audio>';
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