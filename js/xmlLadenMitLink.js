/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

function anfordern(x, content){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.xml', true);// true = asyync
    xhr.send(null);
    xhr.onload = function(e){
        loadText(e , x, content);
    };
}
function loadText(e, x, content){
        if (e.target.status === 200 && e.target.readyState ===4){
            //speichern die Antwort des Server
            let antwort = e.target.responseXML;
       
            //zugriff auf die einzelnen Tags
            let farbe = antwort.getElementsByTagName('farbe')[x];
          
            let speed = antwort.getElementsByTagName('speed')[x];
            let leistung = antwort.getElementsByTagName('leistung')[x];

            //zugriff auf den textKnoten
            document.getElementById(content).innerHTML =
                    'Farbe: ' +farbe.firstChild.nodeValue +'<br>'+
                    'Speed: ' +speed.firstChild.nodeValue +'<br>'+
                    'Leistung: ' +leistung.firstChild.nodeValue +'<br>'+
                    'Hubraum: ' +leistung.getAttribute('hubraum') ;

        }else if(e.target.status === 404){
         document.getElementById('content').innerHTML='The Text Not Found';

        }
}

 //Bei Klick auf den Button
    document.getElementById('link0').addEventListener('click', function(){anfordern(0, 'content0');});
    document.getElementById('link1').addEventListener('click', function(){anfordern(1, 'content1');});
    document.getElementById('link2').addEventListener('click', function(){anfordern(2, 'content2');});
    
    //////////////////////////// show data in a Table ///////////////////

function farzeug(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange= function(){
        if(this.readyState === 4 && this.status === 200){
            farzeugTable(this);
        }
    };
    xhr.open('GET' , 'data.xml', true);
    xhr.send();
}

function farzeugTable(xml){
    var xmlData= xml.responseXML;
    
    var table = "<tr><th>Farbe</th><th>Speed</th><th>Leistung</th></tr>";
        
    var data = xmlData.getElementsByTagName('farzeug');   
    console.log(data);
    for (let i = 0; i<data.length; i++){
        table +="<tr><td>"+
                data[i].getElementsByTagName('farbe')[0].childNodes[0].nodeValue +
                '</td><td>'+
                data[i].getElementsByTagName('speed')[0].childNodes[0].nodeValue +
                '</td><td>'+
                data[i].getElementsByTagName('leistung')[0].childNodes[0].nodeValue +
                '</td></tr>';
    }
    document.getElementById('farzeugTbl').innerHTML =table;
}

   
    
    document.getElementById('farzeug').addEventListener('click', farzeug);

    //Wenn das DOM geladen ist
    //document.addEventListener('DOMContentLoaded', loadText);
