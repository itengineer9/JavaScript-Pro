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
    xhr.onload = function(){
        if (xhr.status === 200 && this.readyState ===4){
            //speichern die Antwort des Server
            let response = xhr.responseXML;
            let events = response.getElementsByTagName('event');
            
            for (let i in events){
                let bild, container, parag, bold, loc;
                container =document.createElement('div');
                bild =document.createElement('img'); 
                bild.setAttribute('src', getNodeValue(events[i], 'map'));
                bild.setAttribute('width','120px', ' height ',' 120px');  
                
                parag = document.createElement('p'); 
                bold = document.createElement('b');
                
                loc = document.createElement('p'); 
                loc.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
                
                bold.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
                parag.appendChild(bold);
               
                
                container.appendChild(bild);
                container.appendChild(loc);
                container.appendChild(parag);
                
                document.getElementById('content').appendChild(container);
                 //document.getElementById('content').innerHTML=pp;
            }
            
            }else if(this.status === 404){
             document.getElementById('content').innerHTML='The Text Not Found';

            }
            
            function paragText(obj, tag){
                let parag = document.createElement('p'); 
                let paraText = document.createTextNode(getNodeValue(obj, tag ));
                parag.appendChild(paraText);
                console.log(parag);
                let paraTxt = '<b>'+parag + '</b>';
                console.log(paraTxt);
            }
            function getNodeValue(obj, tag ){
                return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
            }
            
    };

    xhr.open('GET', 'bilder.xml', true);// true = asyync
    xhr.send(null);

}

    //Bei Klick auf den Button
    document.getElementById('senden').addEventListener('click', loadText);
    
    //Wenn das DOM geladen ist
    //document.addEventListener('DOMContentLoaded', loadText);
