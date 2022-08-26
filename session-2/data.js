//1) primitive data types

//1) string 

var name='harry'
console.log('string '+name + (typeof name))

// 2)numbers
var marks=30
console.log('numbers '+marks + (typeof marks))

// 3)boolean
var isMarks=false
console.log('boolean'+isMarks + (typeof isMarks))

// 4)null
var nullVar=null
console.log('boolean'+isMarks + (typeof isMarks))

// 5) undefined
let undef=undefined

console.log(' data type is '+(typeof undef))

// 2)refrence data type or object types

// object literals
let ui={
    name:'akash',
    marks:25,
    standard:'5th'
} 
console.log(ui)
console.log(typeof ui)

function Name(){
    console.log('this is obejct lietrals')
}
console.log(typeof (Name))

let date=new Date()
console.log(typeof date)
