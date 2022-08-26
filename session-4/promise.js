const cv=new Promise(function(resolve,reject){
    // resolve('completed your task')
    reject('promise rejected')
})

cv.then(function sv(result){
    console.log(result)
}).then(function sv1(result){
    console.log('another result of promise')
}).catch(function ev(result){
    console.log(result)
})