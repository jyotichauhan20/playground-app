// object property shorthand

const name='Jyoti'
const userAge = 22

const user = {
    name,
    // shortthand syntax
    age:userAge,
    location:'India'
}
// console.log(user)

// object destructuring
const product = {
    label:'rednotebook',
    price:3,
    stock:45,
    saleprice:undefined
}
// const label=product.label
// const stock =product.stock
// console.log(label)
// const {label:producLable,stock,rating=89}=product
// renaming the keyname and we can add new value in that also like we did for rating
// console.log(producLable)
// console.log(stock)
// console.log(rating)
const transection = (type,{label,stock=90}={})=>{
    console.log(type,label,stock)


}
transection('order',product)