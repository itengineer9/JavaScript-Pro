/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let arrClass = [
    'kalt',
    'warm',
    'border1',
    'border2',
    'border3',
    'heiss'
];

let hotel = {
    name: 'SchlossHotel',
    zimer: 40,
    gebucht: 25,
    services:['WLAN','Fernseher', 'küche', 'park'],

    checkAvailable : function (){
        return erg = this.zimer - this.gebucht;
    }
}

let name = document.getElementById('one');
let zimer = document.getElementById('two');
let gebucht = document.getElementById('three');
let hotelName = document.getElementsByTagName('h3')[0];

hotelName.innerHTML = 'Hotels Name : '+ hotel.name;
name.innerHTML = 'Hotels Name : '+ hotel.name;
zimer.innerHTML = 'Alle Frei Zimmer : '+ hotel.zimer;
gebucht.innerHTML = 'Alle Gebuchte Zimmer : '+ hotel.gebucht;

//////////////////////////// Available //////////////////////////////////

let pText ='The Available Rooms are: '+ hotel.checkAvailable();
let btn = document.getElementById('avil');
btn.addEventListener('click', parag);

function parag(){
    var para = document.createElement("P");                 // Create a <p> element
    para.innerHTML = pText;                // Insert text
    document.getElementById("page").appendChild(para);     // Append <p> to <div> with id="myDIV"
    btn.removeEventListener('click', parag);
}

//////////////////////////// Services //////////////////////////////////

let psText = 'The Services in Hotel are: ';
let serBtn = document.getElementById('serv');
let ulClass= ['ulListe'];
serBtn.addEventListener('click', test);

function test(){
    let ulSer = document.createElement("ul");
    ulSer.classList.add(ulClass);
    let pSer = document.createElement("p");
    pSer.innerHTML = psText;
    document.getElementById("page").appendChild(pSer);
    document.getElementById("page").appendChild(ulSer);
    
    for(let serv of hotel.services){
        let rnd = Math.round(Math.random()*6);
        let clss = arrClass[rnd];
        let liSer = document.createElement('li');
        liSer.classList.add(clss);
        let liText = document.createTextNode(serv);
        liSer.appendChild(liText);
        ulSer.appendChild(liSer);    
    }
    serBtn.removeEventListener('click', test);
};