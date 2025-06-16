import express from 'express';
import { userData } from '../data.js';

const postRouter = express.Router()


postRouter.get('/', (req, res)=>{
    res.send('Post list')
})

postRouter.get('/:id', (req,res)=>{
    let id = req.params.id
    res.send(userData[id-1].posts)
})

postRouter.post('/', (req, res)=>{
    res.send('post created!')
})


export default postRouter