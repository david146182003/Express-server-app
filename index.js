import express from 'express'
import usersRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import comRouter from './routes/comments.js';
import { userData } from './data.js';

const app =express();
const port = 3000;

//EJS
app.set("view engine", "ejs")

app.use(express.json())

const users = [];

// middleware
app.use(userLogin)

app.get('/' , (req, res)=>{
    console.log(req.params)
    console.log(req.query)
    
    let user= {
        name: req.query.firstName,
        email: req.query.email
    }
    users.push(user);
    res.render('index', {users})
    
})


app.use('/users', usersRouter);

app.use('/posts', postRouter);

app.use('/comments', comRouter)

//middleware
function userLogin(req, res, next){
    console.log(`User log in`);
    next()
}
function errorHandling(err, req, res, next){
    
}


app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})