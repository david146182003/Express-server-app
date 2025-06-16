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

postRouter.post('/:id', (req, res)=>{
    let user = userData.find((u, i)=>{
        if(u.id ===id){
            
        }
    })
    res.send('post created!')
})

postRouter.patch('/:id', (req,res)=>{
    const user = userData.find((u, i)=>{
        if(u.id === req.params.id){
            for(let key in req.body){
                userData[i][key] = req.body[key]
            }
            return true
        }
    } )
    if(user) res.json(user);
})

postRouter.delete('/:id/:indexPost', (req, res)=>{
    let id = req.params.id;
    let indexOfPost = req.params.indexPost
    let user = userData.find((u, i)=>{
        if(u.id ===id){
            userData.splice(i,1);
            return true
        }
    })
    if(user) res.json(user);
    res.send('post deleted!')
})


export default postRouter