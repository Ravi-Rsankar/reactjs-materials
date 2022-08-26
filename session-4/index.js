document.getElementById('header').addEventListener('click',function(e){
    let xyz
    console.log('you clicked here')
    // xyz=e.target
    // xyz=e.target.className
    // xyz=e.offsetX
    // xyz=e.offsetY
    // xyz=e.clientX
    xyz=e.clientY
    console.log(xyz)

})