

class Item {
    
    
    constructor (name, price, auther, isbn){
        
        this.name = name;
        this.price = price;
        this.auther = auther;
        this.isbn =isbn;
       }
       
       
       printDescription(){
           console.log(this.auther +' | '+this.name);
       }
       
     parag(pText){
        var para = document.createElement("P");                 // Create a <p> element
        para.innerHTML = pText+'<br>';                // Insert text
        document.getElementById("page").appendChild(para);     // Append <p> to <div> with id="myDIV"
    }
    
    ausgabe(){
       let txt= 'The Name ist: '+ this.name+'<br>'+
                'The price ist: '+this.price +'<br>'+
                'The auther ist: '+this.auther +'<br>'+
                'The isbn ist: '+this.isbn +'<br>';
        
        return txt;
    }
    
    set setName(name){
        this._name = name.toUpperCase();
    }
//    
    get getName(){
        return this._name;
    }
    
}



let item = new Item('Frauen Phelosofie', 
                    55.2,
                    'Ahmad Alhamad',
                    '978-3-65877.456');
//console.log(item.auther);
//console.log(item.getName); 
//console.log(item.isbn); 

item.printDescription();

//prototype
console.log(item.prototype);
console.log(item.__proto__); 
console.log(item.constructor);

let key = Object.keys(item);
let value =Object.values(item);
//
for (let i=0, j =0; i< key.length , j<value.length; i++,j++){
    item.parag(key[i].toUpperCase() +' : '+ value[j]);
    //console.log(key[i] +' : '+ value[j]);
}

////////////// Object Create mit mehr eigenschaften ///////////////////

let itm = Object.create(Object.prototype,{
    name : {
        value : 'Programierung JAva',
        writable: false,
        configurable:true,
        enumirable:true
    },
    price:{
        value : 44.90,
        writable: false,
        configurable:true,
        enumirable:true
    },
    auther: {
        value: 'Ahmad Alhamad'
    },
    isdb:{
        value:'978-3-5648.645',
        enumirable:false
    }
});
console.log(itm.auther);
console.log(itm.name); 
console.log(itm.isbn);
console.log(itm.price);
for ( let prop in itm){
    console.log(prop);
}

let keys = Object.keys(itm);
let values =Object.values(itm);
//
for (let i=0, j =0; i< keys.length , j<values.length; i++,j++){
    //itm.parag(keys[i].toUpperCase() +' : '+ values[j]);
    console.log(key[i] +' : '+ value[j]);
}