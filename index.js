function perfect()
{document.getElementById('ss').innerHTML='<p>Perfect</p>';
    document.getElementById('player').innerHTML='<audio autoplay controls id="play"><source id="sr" src="perfect.mp3" type="audio/ogg"></audio>';
}
function suzume()
{   document.getElementById('ss').innerHTML='<p>Suzume</p>'
    document.getElementById('player').innerHTML='<audio autoplay controls id="play"><source id="sr" src="suzume.mp3" type="audio/ogg"></audio>';
}

document.getElementById("1").addEventListener("click",perfect);
document.getElementById("2").addEventListener("click",suzume);


