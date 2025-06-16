import express from 'express';
import { userData } from '../data.js';


const comRouter = express.Router()


comRouter.get('/', (req, res)=>{
    let allComments =[];
    for(let i=0; i<userData.length;i++){
        let comment = userData[i].comments;
        allComments.push(comment);
    }
    res.json(allComments)
})

comRouter.get('/:id', (req,res)=>{
    let id = req.params.id
    res.send(userData[id-1].comments)
})


export default comRouter