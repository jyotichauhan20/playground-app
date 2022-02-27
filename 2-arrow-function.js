// const add=(x,c)=>{
//     console.log(x+c)
// }
// add(23,5)
const squirex=function(x){
    //with normal function
    return x*x
}
// console.log(squirex(3))
 
const squire=(x)=>{
    // with arrow function
    return x*x
}
// console.log(squire(3))

const squirey = (x)=>x*x
// console.log(squirey(4))

const event = {
    name:'jyoti chauhan',
    guestList:['neha ','gudiya ','laxmi'],
    // printGuestList:function(){
        printGuestList(){
        // this is stnderd function
        const that=this

        // with this keywork we can not use arrow function
        console.log('Guest list for '+this.name)
        // console.log('Guest list for '+this.guestList)
        this.guestList.forEach(function(guest){
            //foreach not allow other method it can allow when we will use arrow function.
            // that time we don't need to use that
            console.log(guest+' is orgnizinf one party '+that.name)

        })

    }
}
event.printGuestList()