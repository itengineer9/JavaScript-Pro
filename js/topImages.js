/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";// fuer ein sichere Code zuschreiben


var topImgs1 =document.getElementById('topImgs1');
var topImgs2 =document.getElementById('topImgs2');
var topImgs3 =document.getElementById('topImgs3');
var topImgs4 =document.getElementById('topImgs4');
var topImgs5 =document.getElementById('topImgs5');
var Leinwand =document.getElementById('leinwand');
//////////////////////////////////////////////////////////////////

//x=10 ; // hoisting mit let nicht moeglich

let x=7;

topImgs1.addEventListener('click', function(){
    let x=8;
    //var x=7; // nict moeglich
    console.log(x);
     Leinwand.src=topImgs1.getAttribute('src');
});

topImgs2.addEventListener('click', function(){
     Leinwand.src=topImgs2.getAttribute('src');
});

topImgs3.addEventListener('click', function(){
     Leinwand.src=topImgs3.getAttribute('src');
});

topImgs4.addEventListener('click', function(){
     Leinwand.src=topImgs4.getAttribute('src');
});

topImgs5.addEventListener('click', function(){
     Leinwand.src=topImgs5.getAttribute('src');
});