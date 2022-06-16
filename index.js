import express from 'express'
import cors from 'cors'
import { json } from 'express';
const server=express()
server.use(cors())
const users=[];
const tweets=[];


server.post('/sign-up',(request,response)=>{
    const user=request.body
    users.push(user)
    if(users.username==""){
        response.status(400).send('Você precisa inserir seu username')
    }
    else{
        response.status(200).send('OK')
    }
})

server.post('/tweets',(request,response)=>{
    const user=request.body
    const sendTweet={
        username:user.username,
        tweet:user.tweet
    }
    tweets.push(sendTweet)
    response.status(200).send('OK')
})

server.get('/tweets',(request,response)=>{
    const tenTweets=tweets.slice(-10) //retorna os 10 ultimos tweets
    console.log('get feito')
    response.send(tenTweets)
})



server.listen(5000)