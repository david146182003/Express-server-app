import express from 'express'



const app =express();
const port = 3000;

app.set("view engine", "ejs")

app.use(express.json())

app.get('/', (req, res)=>{
    
    res.render('index', {array})
})

app.post('/', (req, res)=>{
    console.log(req.query)
    console.log(req.params)
    res.send('Submit name')
})

app.delete('/', (req, res)=>{
    res.send('Delete name')
})

app.get('/user/:name/:email', (req, res)=>{
    console.log(req.params)
    console.log(req.query)

    let user= {
        name: req.query.firstName,
        email: req.query.email
    }
    console.log(user)
    res.render('index', {user})
    
})
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