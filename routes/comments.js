import express from 'express'

const comRouter = express.Router()


comRouter.get('/', (req, res)=>{
    res.send('comment list')
})

comRouter.get('/:num', (req,res)=>{
    res.send(`comment num: ${req.params.num}`)
})


export default comRouter