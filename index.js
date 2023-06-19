function perfect()
{document.getElementById('ss').innerHTML='<h3>Perfect</h3>';
    document.getElementById('player').innerHTML='<audio autoplay controls id="play"><source id="sr" src="perfect.mp3" type="audio/ogg"></audio>';
}
function suzume()
{   document.getElementById('ss').innerHTML='<h3>Suzume</h3>'
    document.getElementById('player').innerHTML='<audio autoplay controls id="play"><source id="sr" src="suzume.mp3" type="audio/ogg"></audio>';
}

document.getElementById("1").addEventListener("click",perfect);
document.getElementById("2").addEventListener("click",suzume);


