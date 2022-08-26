function first(){
    console.log(1)
}

function gh(){
    setTimeout(function(){
        console.log(45)
    },1000)
}
function second(){
    console.log(2)
}

first()
second()
gh()