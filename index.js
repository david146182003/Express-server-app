import express from 'express'


const app =express();
const port = 3001;

app.set("view engine", "ejs")

app.get('/user', (req, res)=>{
    res.send('Hello SBA')
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