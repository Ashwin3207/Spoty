let a;
function play(a)
{   if(a==1)
    {document.getElementById('ss').innerHTML='<h3>Perfect</h3>';
    document.getElementById('player').innerHTML='<audio autoplay controls id="play"><source id="sr" src="perfect.mp3" type="audio/ogg"></audio>';
}
    if(a==2)
    
    {document.getElementById('ss').innerHTML='<h3>Suzume</h3>'
    document.getElementById('player').innerHTML='<audio autoplay controls id="play"><source id="sr" src="suzume.mp3" type="audio/ogg"></audio>';
    }
    if(a==3)
    {
    document.getElementById('ss').innerHTML='<h3 height="30px">Champagne Problems</h3>';
    document.getElementById('player').innerHTML='<audio autoplay controls id="play"><source id="sr" src="champagne.mp3" type="audio/ogg"></audio>';
    }
}



