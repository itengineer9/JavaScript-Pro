/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
function loadData(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/jsonLaden_1.json', true);// true = async

    xhr.onload = function(){
        if (this.status === 200 && this.readyState === 4){
            //speichern die Antwort des Server
            let obj = JSON.parse(this.responseText);            
            
            console.log(obj);
           var names= '<table border=1>'+
                   '<tr><th>Name</th><th>Age</th><th>Email</th></tr>';
            for( let i=0; i<obj.length;i++){
                names += '<tr>'+
                                '<td>'+ obj[i].name +'</td>'+
                                '<td>'+ obj[i].age +'</td>'+
                                '<td>'+ obj[i].email +'</td>'+
                        '</tr>';
                document.getElementById('content').innerHTML = obj[i].values;
             }   
             names +='</table>';
            //document.getElementById('content').innerHTML = names;
            document.getElementById('content').innerHTML = obj.entries();
            
            // document.getElementById('content').classList.add ('kalt');
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
