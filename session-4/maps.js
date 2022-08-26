const myMap=new Map()
const kl='hellostr',kl2={},kl3=function(){}


// myMap.set(kl,'hello my name is string')
// myMap.set(kl2,'this is empty object')
myMap.set(kl3,'this is empty function')
// console.log(myMap)

let v1=myMap.get(kl3)

console.log(v1)
console.log(myMap.size)

// for(let[key,value]of myMap){
//     console.log(key,value)
// }
// for (let key of myMap.keys()){
//     console.log('key : ',key)
// }

// for (let value of myMap.values()){
//     console.log('value : ',value)
// }

// myMap.forEach((value,key)=>{
//     console.log('key : ',key)
//     console.log('value : ',value)
// })


