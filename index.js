import express from 'express'
import cors from 'cors'
import { json } from 'express';
const server=express()
server.use(cors())
server.use(express.json())
const users=[];
const tweets=[];
//const avatar=[]
const userObject={
    username:"",
    avatar:"",
    tweet:""
}
//imagemTeste:https://i.pinimg.com/originals/be/ab/2d/beab2dfc7b0ba0e7640404d424c24ef0.jpg

server.post('/sign-up',(request,response)=>{
    const user=request.body
    //users.push(user)
    const{avatar,username}=user

    userObject.username=username;
    userObject.avatar=avatar;
    //avatar.push(user.avatar)
    if(users.username===''){
        response.status(400).send('Você precisa inserir seu username')
    }
    if(users.avatar==""){
        response.status(400).send('Você precisa inserir seu avatar')
    }
    else{
        response.status(200).send('OK')
       // console.log(avatar)
    }
})

server.post('/tweets',(request,response)=>{
   // const user=request.body
    const {tweet}=request.body
    const sendTweet={
        ...request.body,
        avatar:userObject.avatar
    }
    tweets.push(sendTweet)

    //tweets.push({
    //    username:userObject.username,
      //  tweet,
        //avatar:userObject.avatar})

    response.status(200).send('OK')
})

server.get('/tweets',(request,response)=>{
    const tenTweets=tweets.slice(-10) //retorna os 10 ultimos tweets
    const reverse_tenTweets=tenTweets.reverse() // inverter o array para mostrar o mais recente
    console.log('get feito')
    response.send(reverse_tenTweets)
})



server.listen(5000)

