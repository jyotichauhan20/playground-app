const https = require('https')
const url = 'https://api.weatherstack.com/current?access_key=767e634d484729a8e06bb437213db72c&query=40,-75&units=f'
const request = https.request(url,(response)=>{
    let data=''

    response.on('data',(chunk)=>{
        data = data + chunk.toString()

        // response.on() is a function to allow us to use handler
    })
    response.on('end',()=>{
        // console.log(data)
        const body = JSON.parse(data)
        console.log(body)



    })

})
request.on('Error',(err)=>{
    console.log('Error',err)
})
request.end()