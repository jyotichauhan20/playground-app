const fs=require('fs')

const book={
    title:"Hi i am jyoti",
    description:'I am from up'
}
// const dataJson=JSON.stringify(book,null,4)
// writing json file with null and for indent 4
// fs.writeFileSync('1-json.json',dataJson)
// object to json
// console.log(dataJson)
// const parseData=JSON.parse(dataJson)
// // json to object
// console.log(parseData)

// const readFile=fs.readFileSync('1-json.json')
// In that we will get buffer data if we want to in string from means json then we need to use
// toString()
// const dataBuffer=readFile.toString()
// console.log(dataBuffer)
// const obj=JSON.parse(dataBuffer)
// console.log(obj.title)
const dataread=fs.readFileSync('1-json.json')
const jsondata=dataread.toString()
const user = JSON.parse(jsondata)
// console.log(user)
user.name='monika'
user.age=20

const userJson=JSON.stringify(user)
fs.writeFileSync('1-json.json',userJson)