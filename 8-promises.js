
const add = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(a + b)
            
        }, 2000);
    })
}
// add(2,3).then((sum)=>{
//     console.log(sum)
//     add(sum, 3).then((sum2)=>{
//         console.log(sum2)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }).catch((error)=>{
//     console.log(error)
// })
//####################### Promise chaining ###############################
add(1,1).then((sum)=>{
    console.log(sum)
    return add(sum, 2)
}).then((sum2)=>{
    console.log(sum2)
    return add(sum2,23)
}).then((sum3)=>{
    console.log(sum3)
}).catch((error)=>{
    console.log(error)
})