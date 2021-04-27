//src="js/LsiteStyle.js"
 function fertig(){
    "use strict"
    //ergibt kein Array sondern eine HTML Collection
    let elemnt1 = document.getElementsByTagName('li');
    let ele1 = elemnt1[0];
    ele1.classList.add('border1');

    let elemnt2 = document.getElementsByClassName('kalt');
    let ele2 = elemnt2[0];
    ele2.classList.add('border2');

    let startItem = document.getElementById('four1');
    let elternElement = startItem.parentElement;


    let prevItem= startItem.previousSibling;
    let nextItem= startItem.nextElementSibling;
   
    //select nur eine Element
    let oneItem = document.querySelector('li.warm');
  
    //ergibt NodeListe
    let AllItems = document.querySelectorAll('li.warm');
   
    //select Item 2
    let vierteItem = document.querySelectorAll('li:nth-child(4)');
    let lastItem = document.querySelectorAll('li:last-child');
   
    let ele3 = lastItem[0];
    ele3.classList.add('border3');
    let ele4 = vierteItem[0];
    ele4.classList.add('border1');

    //Attributes 
    let item= document.getElementById('two');
    if (item.hasAttribute('class')){
        let attr = item.getAttribute('class');
        //document.getElementsByTagName('h3')[0].innerHTML = 'Das Attribute ist:'+attr;
    }


}

// wenn der Browser das DOM erstelt hat, wird ferig aufgerufen.
document.addEventListener('DOMContentLoaded', fertig);
