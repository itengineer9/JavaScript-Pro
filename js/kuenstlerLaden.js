
"use strict";
function loadText(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
        if (xhr.status === 200 && this.readyState ===4){
            let object = JSON.parse(xhr.responseText);
            let newContent = "<ul id='list'>";
            
            for (let i=0; i<  object.artists.length; i++){
                newContent += '<li>' +object.artists[i].name+ '</li>';
                for(let j in object.artists[i].alben){
                    newContent += '<ul><li>' +
                            object.artists[i].alben[j].titel + ' | '+
                            object.artists[i].alben[j].year +
                            '</li></ul>';
                }
            }
            newContent += "</ul>";
            document.getElementById('content').innerHTML= newContent;

            }else if(this.status === 404){
             document.getElementById('content').innerHTML='The Text Not Found';

            }       
            
    };

    xhr.open('GET', 'js/kuenstler.json', true);// true = asyync
    xhr.send();

}

    //Bei Klick auf den Button
    document.getElementById('senden').addEventListener('click', loadText);
    
    //Wenn das DOM geladen ist
    //document.addEventListener('DOMContentLoaded', loadText);
