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
    document.getElementById('list').innerHTML = '<div id="play1"><img src="perfect.jpg" height="100px" width="100px" id="1"  class="songs"  onclick=play(1)></img><img src="suzume.jpg" height="100px" width="100px" id="2" class="songs" onclick=play(2)></img><img src="champagne.jpg" height="100px" width="100px" id="3" class="songs" onclick="play(3)"></img></div>';
}
function play2() {

}
function play3() {

}


