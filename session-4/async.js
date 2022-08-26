// async function f(){
//     return 'hello'
// }

// async function f(){
//     return Promise.resolve('hello')
// }
// f().then(alert)

// async function f(){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('done'),1000)
//     })
//     let result=await promise
//     alert(result)
// }

// f()

let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('promise solved')
    }),3000
})

async function af(){
    let result=await promise
    console.log(result)
    console.log('hello')
}

af()