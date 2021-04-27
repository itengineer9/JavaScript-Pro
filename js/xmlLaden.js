/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
function loadText(){
    //create XHR Object
    let xhr = new XMLHttpRequest();
    //open - type, url/file , async
    xhr.onreadystatechange = function(){
        if (xhr.status === 200 && this.readyState === 4){
            //speichern die Antwort des Server
            let antwort = xhr.responseXML;
            
            console.log(antwort);

            //zugriff auf die einzelnen Tags
            let farbe = antwort.getElementsByTagName('farbe');
            
//            let txt ='';
//            for (let i = 0; i<farbe.length; i++){
//                txt += farbe[i].firstChild[0].nodeValue +'<br>';
//            }
//            
            let speed = antwort.getElementsByTagName('speed')[0];
            let leistung = antwort.getElementsByTagName('leistung')[0];

            //zugriff auf den textKnoten
            document.getElementById('content').innerHTML =
                    'Farbe ' +farbe[0].firstChild.nodeValue +
                    'Speed ' +speed.firstChild.nodeValue +
                    'Leistung ' +leistung.firstChild.nodeValue +
                    'Hubraum ' +leistung.getAttribute('hubraum') ;

        }else if(this.status === 404){
         document.getElementById('content').innerHTML='The Text Not Found';

        }
    };

    xhr.open('GET', 'data.xml', true);// true = asyync
    //xhr.overrideMimeType('text/xml');
    //send request
    xhr.send(null);

}

    //Bei Klick auf den Button
    document.getElementById('senden').addEventListener('click', loadText);
    
    //Wenn das DOM geladen ist
    //document.addEventListener('DOMContentLoaded', loadText);
