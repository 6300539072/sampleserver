const express = require('express')
const app = express()
const port = process.env.PORT | 3000

app.use(express.json())
console.log('run')
console.log('running')
app.get('/api',function(req,res){
    res.send('server working')
})

app.listen(port,function(){
    console.log(`http://localhost:3000`)
})