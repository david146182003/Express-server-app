import express from 'express'
import usersRouter from './routes/users.js';

const app =express();
const port = 3000;

//EJS
app.set("view engine", "ejs")

app.use(express.json())

const users = [];

app.get('/' , (req, res)=>{
    console.log(req.params)
    console.log(req.query)
    
    let user= {
        name: req.query.firstName,
        email: req.query.email
    }
    users.push(user)
    console.log(user)
    console.log(users)
    res.render('index', {users})
    
})

app.use('/users', usersRouter)

app.post('/user/:id/:name', (req, res)=>{
    
    res.render('index', {users})
})

// app.post('/user/:userId/:name', (req, res)=>{
//     const userId = req.params.userId;
//     const userName = req.params.name;
//     let user ={
//         id : userId,
//         name : userName
//     }
//     res.json(user)
// })

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})