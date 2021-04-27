/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function topImgs(){    
    console.log('topImgs');
    var bild = document.getElementById('topImgs1').getAttribute('src');
    console.log(bild);
   // document.getElementById('leinwand').src=bild;
}



var zaehler = 0 ;
var running = 0;
var bildpfad = "bilder/";
var bilder = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];


function vor(){
    
    var bild = bildpfad + bilder[zaehler];
    zaehler++;    
    if(zaehler >= bilder.length){
        zaehler=0;
        }
        document.getElementById('leinwand').src=bild;
        document.getElementById('imge').innerHTML='image '+(zaehler+1); 
}


function nach(){
    
    var bild = bildpfad + bilder[zaehler];
    zaehler--;   
    if(zaehler < 0){
        zaehler=bilder.length-1;
    }  
    document.getElementById('leinwand').src=bild;
    document.getElementById('imge').innerHTML='image '+(zaehler+1); 
}

function automatisch(){
            if(running ===0){
                    running = window.setInterval(vor, 1000);
            }    
         document.getElementById('imge2').innerHTML= running;
         warte();
}

function anhalten(){
     window.clearInterval(running);
     running = 0;
     abwarte();
     document.getElementById('imge2').innerHTML= running;
}

var myval;

function warte(){
    myval = setTimeout(anhalten, 10000); //set timeout
    document.getElementById('timeout').innerHTML=myval;
}

function abwarte(){
     clearTimeout(myval); //stop timeout
}

function startStop(){
          if(running === 0){
                running = window.setInterval(vor, 1000);
          }
          else{
              window.clearInterval(running);
                running = 0;
          }
}



