let a;
function play(a) {
    if (a == 1) {
        document.getElementById('ss').innerHTML = '<h3>Perfect</h3>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="perfect.mp3" type="audio/ogg"></audio>';
    }
    if (a == 2) {
        document.getElementById('ss').innerHTML = '<h3>Suzume</h3>'
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="suzume.mp3" type="audio/ogg"></audio>';
    }
    if (a == 3) {
        document.getElementById('ss').innerHTML = '<h3 height="30px">Champagne Problems</h3>';
        document.getElementById('player').innerHTML = '<audio autoplay controls id="play"><source id="sr" src="champagne.mp3" type="audio/ogg"></audio>';
    }
}
function list() {
    if ((document.getElementById('playlist').style.display == "none"))
        document.getElementById('playlist').style.display = "block";
    else
        document.getElementById('playlist').style.display = "none";
}
function play1() {
    
    document.getElementById('play1').style.display='block';
    document.getElementById('ab').style.display='none';
    document.getElementById('intro').style.display='none';
    document.getElementById('play2').style.display='none';
    document.getElementById('play3').style.display='none';
    
}
function play2() {
    document.getElementById('ab').style.display='none';
    document.getElementById('intro').style.display='none';
    document.getElementById('play1').style.display='none';
    document.getElementById('play2').style.display='block';
    document.getElementById('play3').style.display='none';
}
function play3() {
    document.getElementById('ab').style.display='none';
    document.getElementById('intro').style.display='none';
    document.getElementById('play1').style.display='none';
    document.getElementById('play2').style.display='none';
    document.getElementById('play3').style.display='block';
    

}
function About()
{
    document.getElementById('intro').style.display='none';
    document.getElementById('ab').style.display='block';
    document.getElementById('play1').style.display='none';
    document.getElementById('play2').style.display='none';
    document.getElementById('play3').style.display='none';
}


