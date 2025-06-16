import express from 'express'

const usersRouter = express.Router()


usersRouter.get('/', (req, res)=>{
    res.send('User list')
})

usersRouter.get('/:id', (req,res)=>{
    res.send(`User id: ${req.params.id}`)
})


export default usersRouter