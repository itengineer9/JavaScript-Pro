/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
function loadData(){
    let xhr = new XMLHttpRequest();
    //open - type, url/file , async
    xhr.open('GET', 'js/jsonLaden.json', true);// true = async

    xhr.onload = function(){

        if (xhr.status === 200 && this.readyState ===4){
            //speichern die Antwort des Server
            let object = JSON.parse(this.responseText);
            console.log(object);
            
            var output='';
            for( let i in object){
                
                
                 output +=
                        'Name\n\: ' +object[i].name +'<br>'+
                        'Age: ' +object[i].age +'<br>'+
                        'Email: ' +object[i].email +'<br>'+
                        'Pet Name: ' +object[i].pets[0].name +'<br>' ;
                let div = document.createElement('div');
                let p= document.createElement('p');
                let ptxt= document.createTextNode(p, output);
                
                p.appendChild(ptxt);
                div.appendChild(p);
                div.classList.add ('heiss');
                document.getElementById('content').appendChild(div);

             }   
             document.getElementById('content').classList.add ('kalt');
           // document.getElementById('content').innerHTML = output;

            }else if(this.status === 404){
                 document.getElementById('content').innerHTML='The Text Not Found';

            }
         };
    xhr.send(null);

}
    //Bei Klick auf den Button
    document.getElementById('senden').addEventListener('click', loadData);
    
    //Wenn das DOM geladen ist
    //document.addEventListener('DOMContentLoaded', loadData);
    //window.onload( loadUsers());
