class Person{
   constructor(name ,profession){
       this.name=name;
       this.profession = profession;
   }

   getPersonInfo(){
       alert(`Person name is :${this.name} and his profession is :${this.profession}`);
   }

}

class Coder extends Person{
    constructor(name,profession,tecnologyStack){
        super(name, profession);
        this.tecnologyStack=tecnologyStack;
    }

    getInfo(){
        alert(`Technology Stack :${this.tecnologyStack}`);
    }
}

var personObj=new Person("Ruchir","coder");

//personObj.getPersonInfo();
var coderObj=new Coder("Ruchir","coder","Javascript");

coderObj.getPersonInfo();
coderObj.getInfo();

