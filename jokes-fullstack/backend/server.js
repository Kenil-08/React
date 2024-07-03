const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
           id : 1,
           title : 'Why did the chicken cross the road?',
           content : 'To get to the other side!'
        },
        {
           id : 2,
           title : 'Why did the chicken cross the road?',
           content : 'To get to the other side!'
        },
        {
           id : 3,
           title : 'Why did the chicken cross the road?',
           content : 'To get to the other side!'   
        }
    ]
    res.json(jokes)
})

app.listen(3000, () => 
    console.log(`This app listening http://localhost:${3000}`)
)