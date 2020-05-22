const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do",
  "You're an awesome friend",
  "You have impeccable manners",
  "I'm grateful to know you"
];

const insult = [
  "You are weird",
  "Why would you shit like that",
  "I don't trust you",
  "You are lame",
  "Assclown",
  "Asscunt",
  "Assface",
  "Asshat",
  "Badass",
  "Badgerfucker",
  "Bag of dicks",
  "Bandit",
 "Bangsat",
  "Barbarian",
  "Bastard",
  "Beast"
];

function getRandomInsult(){
  const randomInsult = Math.floor(Math.random() * insult.length);
  return insult[randomInsult];
}

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get('/insult', function(req, res){
 res
 .json({
   insult: getRandomInsult()
 })
 .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");