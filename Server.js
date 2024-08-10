const express = require('express')

const app = express()

const port = 5000

const Middleware=(req,res,next)=>{
    console.log("Ya ala walah rani fel middleware")
    next()
}

app.use(Middleware)

// app.get('/essia',(req,res)=>{
//     res.send("Hello Express")
// })


// app.get('/belhssane',(req,res)=>{
//     res.send("<h1>Belhssane Fedi Essia</h1>")
// })

// app.get('/pageTarek',(req,res)=>{
//     // console.log(__dirname)
//     res.sendFile(__dirname+"/Public/Tarek.html")
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+"/Public/style.css")
// })

// app.get('/fediPage',(req,res)=>{
//     res.sendFile(__dirname+'/Public/')
// })

app.use(express.static('Public'))

app.listen(port,console.log(`Server is running on the port ${port}`))