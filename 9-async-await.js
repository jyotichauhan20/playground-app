const add = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(a<0 || b<0){
                return reject ('number should be a positive number')
            }
            resolve(a + b)
            
        }, 2000);
    })
}


const doWork =  async ()=>{
    // throw new Error('something went wrong ')
    // return 'Jyoti'
    const sum = await add(12,3)
    const sum2 = await add(sum,23)
    const sum3 = await add(sum2,-3)
    return sum3


}
doWork().then((result)=>{
    console.log('result:',result)
}).catch((e)=>{
    console.log('e :',e)
})