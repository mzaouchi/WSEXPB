const express = require('express')

const app = express()

const port = 5000

var users = [
    { name : "Tarek", age : 28, id:1},
    { name : "Essia", age : 23, id:2},
    { name : "Belhssane", age : 21, id:3},
    { name : "Mahmoud", age : 20, id:4},
]

app.use(express.json())

app.get('/getUsers',(req,res)=>{
    res.send(users)
})

app.post('/addUser',(req,res)=>{
    users = [...users,req.body]
    res.send({msg : "User added",users})
})

app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter((el,i,t)=> el.id != id )
    res.send('Contact deleted')
})

app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params

    users = users.map((el,i,t)=> el.id == id ? {...el,...req.body} : el )
    res.send("Contact updated")
})





app.listen(port,console.log(`Server is running on the port ${port}`))