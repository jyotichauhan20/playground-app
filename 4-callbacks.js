// setTimeout(() => {
//     console.log('Jyoti Chauhan')
    
// },2000);

// const name = ['jyoti','laxmi','gudiya']

// const dataFilter = name.filter((n)=>{
//     console.log(n)
// })

// const geocode = (address, callback)=>{
//     setTimeout(() => {
//         const data = {
//             latitude:0,
//             longitude:0
//         }

//         callback(data)
        
//     }, 3000);
// }
// geocode('India',(data)=>{
//     console.log(data)
// })
const add =(a,b, callback)=>{
    setTimeout(() => {
        const sum = a+b
        callback(sum)
        
    }, 2000);
}

add(1,4,(sum)=>{
    console.log(sum)
})