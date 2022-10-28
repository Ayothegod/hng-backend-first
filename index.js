const express = require('express')
const app = express()
const cors = require('cors');
PORT =  process.env.PORT || 3030

app.use(cors({
    origin: '*'
}));

app.get('/',(req,res) => {
    res.status(200).send({
        "slackUsername": "Aio", "backend": true, "age": 18, "bio": "I am the backend" 
    })
})

app.listen(PORT,() => console.log(`server is running on port ${PORT}`))