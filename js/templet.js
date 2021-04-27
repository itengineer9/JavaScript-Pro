/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
    let xhr = new XMLHttpRequest();
    //open - type, url/file , async
    xhr.onload = function(){
        if (xhr.status === 200 && this.readyState ===4){
            //speichern die Antwort des Server
            let object = JSON.parse(xhr.responseText);
           
            let farbe = antwort.getElementsByTagName('farbe');
            document.getElementById('content').innerHTML =
                    'Farbe ' +farbe[0].firstChild.nodeValue +
                    'Speed ' +speed.firstChild.nodeValue +
                    'Leistung ' +leistung.firstChild.nodeValue +
                    'Hubraum ' +leistung.getAttribute('hubraum') ;

        }else if(this.status === 404){
         document.getElementById('content').innerHTML='The Text Not Found';

        }
    }

    xhr.open('GET', 'data.xml', true);// true = async
    xhr.send(null);


    //Bei Klick auf den Button
    document.getElementById('senden').addEventListener('click', loadText);
    
    //Wenn das DOM geladen ist
    //document.addEventListener('DOMContentLoaded', loadText);
