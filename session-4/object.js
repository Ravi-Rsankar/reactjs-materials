//prototype object in two things first one is your method and 
// second one is properties and other implement inheritence in javascript 

let obj={
    name:'harry',
    position:'corporate trainer',
    tech:'mern stack'
}

// console.log(obj)

// function Obj(Name){
//     this.name=Name
// }

// Obj.prototype.Name=function(){
//     return this.name
// }

// Obj.prototype.setName=function(newName){
//     this.name=newName
// }
// let obj1=new Obj('harry')

// console.log(obj1)

function employee(){
    this.name='akash',
    this.salary=123456
    
}
employee.prototype.hello=function(){
    console.log('hello')
}
let ty=new employee()
ty.hello()
