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
            let responseObj = JSON.parse(xhr.responseText);
            
            console.log(responseObj);            
            for (let i=0; i<  responseObj.length;i++){
                let bild, container, parag, bold, loc;
                container =document.createElement('div');
                bild =document.createElement('img'); 
                
                bild.setAttribute('src', responseObj[i].map);
                bild.setAttribute('width','120px', ' height ',' 120px');  
                
                parag = document.createElement('p'); 
                bold = document.createElement('b');
                
                loc = document.createElement('p'); 
                loc.appendChild(document.createTextNode(responseObj[i].location));
                
                bold.appendChild(document.createTextNode(responseObj[i].date));
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
            
            
    };

    xhr.open('GET', 'js/bilder.json', true);// true = asyync
    xhr.send();

}

    //Bei Klick auf den Button
    document.getElementById('senden').addEventListener('click', loadText);
    
    //Wenn das DOM geladen ist
    //document.addEventListener('DOMContentLoaded', loadText);
