

class Animal {
    
    
    constructor ( name, color, age){
        this.color = color;
        this.name = name;
        this.age = age;
        this.lang ='';
       }
          
    parag(pText){
        var para = document.createElement("P");                
        para.innerHTML = pText;              
        document.getElementById("page").appendChild(para);    
    }
    
    ausgabe(){
       let txt= 'The Name ist: '+ this.name+'<br>'+
                'The Color ist: '+this.color +'<br>'+
                'The Age ist: '+this.age +'<br>'+
                'The LAnguage ist: '+this.lang +'<br>';
        
        return txt;
    }
    
    set setlang(lan){
        this.lang = lan.toUpperCase();
    }
//    
    get getlang(){
        return this.lang;
    }
    
}


class Reptil extends Animal{
    constructor (name, color, age, type){
        super(name, color, age);
        this.type=type;
    }
    
    set setType(type){
        this._type= type;
    }
    get getType(){
       return this._type;
    }    
    
}

let fich = new Animal('Hai', ' grau', 2);
fich.setlang='en';

let txt = fich.ausgabe();
fich.parag(txt);

let kroko = new Reptil('kroko', ' grau', 2, 'krokodil');
kroko.setlang='fr';

let txte = kroko.ausgabe();
kroko.parag(txte);