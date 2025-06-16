import express from 'express'
import usersRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import comRouter from './routes/comments.js';

const app =express();
const port = 3000;

//EJS
app.set("view engine", "ejs")

app.use(express.json())

const users = [];

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

app.post('/delete', (req, res)=>{
    const index = req.body.index;
    users.splice(index, 1);
    res.render('index', {index})
    res.redirect('/')
})

app.use('/users', usersRouter);

app.use('/posts', postRouter);

app.use('/comments', comRouter)


function userLogin(req, res, next){
    console.log(`User log in`);
    next()
}


app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})