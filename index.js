import express from 'express'
import cors from 'cors'
import { response } from 'express';
const server=express()
server.use(cors())

const users=[];
const tweets=[];


server.post('/sign-up',(request,response)=>{

    response.status(200).send('OK')
})

server.post('/tweets',(request,response)=>{

    response.status(200).send('OK')
})

server.get('/tweets',(request,response)=>{

    console.log('get feito')
})





server.listen(5000)