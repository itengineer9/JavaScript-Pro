

function Raumschiff(name, model, kapitan)
    {
        this.name = name;
        this.model = model;
        this.kapitan = kapitan;
        this.check = function(){
            
        };
    }
     

function Person(name, vorname, age=30)
    {
        this.name = name;
        this.vorname = vorname;
        this.age = age;
        this.entfernung = 0;
        this.entfernung = function(lichJahr){
            this.entfernung += lichJahr;
        };
    }
    
    Person.prototype.ausgabe = function(){
        return Person.age;
    };
    
var  enterLeiter =new Person('Alhamad', 'Ahmad');

var enterprise = new Raumschiff('USA Enterprise', 'NCC-1047');
var voyager = new Raumschiff('USA voyager', 'NCC-4567');

let entr = document.getElementById('p1');
entr.innerHTML = 'Name:' + enterprise.name + '<br>'+ 
                 'Model: '+ enterprise.model+ '<br>'+ 
                 'Der Leiter : ' + enterLeiter.vorname + ' '+
                  enterLeiter.name +'<br>';

let yager = document.getElementById('p2');
yager.innerHTML = 'Name:' + voyager.name + '<br>'+ 
' Model: '+ voyager.model+ '<br>';
            