const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors()) //able to access client side code

const tea = {
    'oolong' : {
        'type': 'black',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'caffine': true,
        'steepTimeSeconds': 180,
        'flavor': 'delicious'
    },

    'matcha' : {
        'type': 'green',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'caffine': false,
        'steepTimeSeconds': 180,
        'flavor': 'delicious'
    },

    'unknown' : {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'caffine': false,
        'steepTimeSeconds': 0,
        'flavor': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {   //pull name off query
    const teaName = request.params.name.toLowerCase()
    if ( tea[teaName] ) {      //use bracket notation incase of spaces. what tea name comes into the url. check if exist, then response
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})