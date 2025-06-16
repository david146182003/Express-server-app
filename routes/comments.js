import express from 'express';
import { userData } from '../data.js';


const comRouter = express.Router()


comRouter.get('/', (req, res)=>{
    res.send('comment list')
})

comRouter.get('/:id', (req,res)=>{
    let id = req.params.id
    res.send(userData[id-1].comments)
})


export default comRouter