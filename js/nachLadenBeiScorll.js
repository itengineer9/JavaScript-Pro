/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top    >= 0 &&
        rect.left   >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right  <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.onscroll = function(){
    if(isInViewport(document.getElementById('ersteSection'))){
        window.onscroll = null;
        //createSections();
        neueSection('zweiteSection');
        }
    if(isInViewport(document.getElementById('zweiteSection'))){
        window.onscroll = null;
        setTimeout(neueSection('dritteSection'), 3000);  

    } 
};

//window.onscroll = function(){
//    if(isInViewport(document.getElementById('zweiteSection'))){
//         window.onscroll = null;
//        neueSection('dritteSection');
//       
//        //xyScroll();
//    }
//};

function xyScroll() {
  var x = document.body.scrollTop;
  document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px";
}

function neueSection(section){
    let newSec = document.createElement('section');
    newSec.setAttribute('id', section);
    
    let auswahl= document.getElementsByClassName('script')[0];
    console.log(auswahl);
    
    let sec = document.getElementById('content');
    sec.appendChild(newSec);
    //document.body.appendChild(newSec);
    //showData(section);
    setTimeout(showData(section), 1000);
}

function createSections(){
    for( let i=0; i< 5 ; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', i);
        newDiv.className='divs';
        let contner = document.getElementById('content');
        contner.appendChild(newDiv);
        //document.body.appendChild(newDiv);
        showData(i);
    }
}

function showData(sec){
        
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
            document.getElementById(sec).innerHTML= newContent;

            }else if(this.status === 404){
             document.getElementById(sec).innerHTML='The Text Not Found';

            }       
            
        };

        xhr.open('GET', 'js/kuenstler.json', true);// true = asyync
        xhr.send();
 }