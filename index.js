const express = require('express')
const app = express()
PORT =  process.env.PORT || 3030

app.get('/',(req,res) => {
    res.status(200).send({
        "slackUsername": "Aio", "backend": true, "age": 18, "bio": "I am the backend" 
    })
})

app.listen(PORT,() => console.log(`server is running on port ${PORT}`))