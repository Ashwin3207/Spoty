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
    document.getElementById('intro').remove();
    document.getElementById('play1').style.display='block';
}
function play2() {

}
function play3() {

}


