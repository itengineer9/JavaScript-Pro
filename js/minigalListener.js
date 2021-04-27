
// anzeige von Bilder in einer DIV mit steuerungsButtons
var zaehler = 0 ;
var running = 0;
var bildpfad = "bilder/";

var bilder = [
    'img11.jpg', 
    'img12.jpg', 
    'img13.jpg', 
    'img14.jpg', 
    'img15.jpg'
];


var Vor = document.getElementById('vor');
var Zuruck = document.getElementById('zuruck');
var StartStop = document.getElementById('startStop');
var Automatisch= document.getElementById('automatisch');
var Anhalten= document.getElementById('anhalten');
var Leinwand= document.getElementById('leinwand');
var imgNum = document.getElementById('imgeNumber');

//document.getElementById('anhalten').addEventListener('click', anhalten);

Vor.addEventListener('click',vor);
Zuruck.addEventListener('click',zuruck);
StartStop.addEventListener('click',startStop);
Automatisch.addEventListener('click',automatisch);
Anhalten.addEventListener('click',anhalten);

/**
 * rand int /randum nummber from 1- 5
 * @returns {choose random bild from the arry and make it first bild for Leinwand}
 */
window.onload= function(){
  var rand = Math.floor(Math.random() * 5);
   Leinwand.src = bildpfad+bilder[rand];
};

/////////////////////////////////////////////////////////

/**
 * 
 * @returns {undefined}
 */
function vor(){  
   
    var bild = bildpfad + bilder[zaehler];
    zaehler++;    
    if(zaehler >= bilder.length-1){
            Vor.removeEventListener('click', vor);
            Vor.style.opacity=0.4;
            Vor.desabled =true;
        }
      if(zaehler >=bilder.length-2){
            Zuruck.addEventListener('click', zuruck);
            Zuruck.style.opacity=1;
            Zuruck.desabled =false;
    }  
        Leinwand.src=bild;
        imgNum.innerHTML='image '+(zaehler); 
}


/////////////////////////////////////////////////////////

function zuruck(){
    
    var bild = bildpfad + bilder[zaehler];
    zaehler--;   
     
    if(zaehler <= 0){
            Zuruck.removeEventListener('click', zuruck);
            Zuruck.style.opacity=0.4;
            Zuruck.desabled =true;
    }  
    if(zaehler <= 1){
           Vor.addEventListener('click', vor);
           Vor.style.opacity=1;
           Vor.desabled =false;
        }
    Leinwand.src=bild;
    imgNum.innerHTML='image '+(zaehler); 
}

/////////////////////////////////////////////////////////

function startStop(){
          if(running === 0){
                running = window.setInterval(vor, 1000);
          }
          else{
              window.clearInterval(running);
                running = 0;
          }
}

//document.addEventListener('DOMContentLoaded',startStop);
//document.addEventListener('click',startStop);



/////////////////Bild hin zufuegen und removeEventListener //////////////////
///////////////// geht nur in diese weise   ////////////

var bildhinzu = document.getElementById('bildHinzu');


function test(){
    bildHinzu('img6.jpg');
    console.log(bilder);
}

function bildHinzu(name){
    bilder.push(name);
}
bildhinzu.addEventListener('click',test());

bildhinzu.removeEventListener('click',test());

/////////////////////////////////////////////////////////

function automatisch(){
      var bild = bildpfad + bilder[zaehler];
        zaehler++;    
        if(zaehler >= bilder.length-1){
            zaehler=0;  
        }
            Leinwand.src=bild;

         imgNum.innerHTML= zaehler;
        
}


/////////////////////////////////////////////////////////

function anhalten(){
     window.clearInterval(running);
     running = 0;
     abwarte();
     imgNum.innerHTML= running;
}

var myval;

function warte(){
    myval = setTimeout(anhalten, 10000); //set timeout
    document.getElementById('timeout').innerHTML=myval;
}

function abwarte(){
     clearTimeout(myval); //stop timeout
}





