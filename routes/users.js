import express from 'express';
import { userData } from '../data.js';

const usersRouter = express.Router()


usersRouter.get('/', (req, res)=>{
    res.send('User list')
})

usersRouter.get('/:id', (req,res)=>{
    let id = req.params.id
    res.send(userData[id-1])
})


export default usersRouter