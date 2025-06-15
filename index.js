import express from 'express'



const app =express();
const port = 3000;

app.set("view engine", "ejs")

app.use(express.json())

app.get('/', (req, res)=>{

    res.render('index')
})

app.post('/', (req, res)=>{
    res.send('Submit name')
})

app.delete('/', (req, res)=>{
    res.send('Delete name')
})

app.get('/user', (req, res)=>{
    res.render('Hello SBA')
})

app.post('/user/:userId/:name', (req, res)=>{
    const userId = req.params.userId;
    const userName = req.params.name;
    let user ={
        id : userId,
        name : userName
    }
    res.json(user)
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})