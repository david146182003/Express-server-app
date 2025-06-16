import express from 'express'

const postRouter = express.Router()


postRouter.get('/', (req, res)=>{
    res.send('Post list')
})

postRouter.get('/:num', (req,res)=>{
    res.send(`post num: ${req.params.num}`)
})

postRouter.post('/', (req, res)=>{
    res.send('post created!')
})


export default postRouter