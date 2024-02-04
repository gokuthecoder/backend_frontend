import express  from "express";
import dotenv from "dotenv";
const app = express()
dotenv.config()

app.use(express.static('public'))

const dummy = [
    {
      "id": 1,
      "joke_name": "Classic Knock-Knock",
      "joke_description": "Why did the chicken cross the road? To get to the other side!"
    },
    {
      "id": 2,
      "joke_name": "Punny Puns",
      "joke_description": "I used to play piano by ear, but now I use my hands and fingers."
    },
    {
      "id": 3,
      "joke_name": "Tech Humor",
      "joke_description": "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      "id": 4,
      "joke_name": "Animal Antics",
      "joke_description": "What do you call a fish wearing a bowtie? Sofishticated!"
    },
    {
      "id": 5,
      "joke_name": "Wordplay Wonders",
      "joke_description": "I told my wife she was drawing her eyebrows too high. She looked surprised!"
    },
    {
      "id": 6,
      "joke_name": "Coffee Chronicles",
      "joke_description": "Why do coffee beans never get into arguments? They know how to espresso themselves!"
    },
    {
      "id": 7,
      "joke_name": "Dad Joke Delight",
      "joke_description": "What did one ocean say to the other ocean? Nothing, they just waved!"
    },
    {
      "id": 8,
      "joke_name": "Space Jest",
      "joke_description": "Why did the astronaut break up with his girlfriend? Because he needed space!"
    },
    {
      "id": 9,
      "joke_name": "Vegetable Varieties",
      "joke_description": "What do you get when you cross a snowman and a vampire? Frostbite!"
    },
    {
      "id": 10,
      "joke_name": "Mathematical Mirth",
      "joke_description": "Why was the equal sign so humble? It knew it wasn't less than or greater than anyone else!"
    }
  ]
  

app.get('/jokes',(req,res)=>{
    res.json(dummy)
})

const PORT = process.env.PORT || 4000

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log(`server connected at ${PORT}`);
    }
})