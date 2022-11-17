var readlineSync = require("readline-sync");
var username = readlineSync.question("What's your name? ")

console.log("Welcome" + username + "to DO YOU KNOW MEGHA? ")
var userScore = 0;
var questionList = [
  {
    question: "What is my Hobby? ",
    answer: "Travelling"
  },
  {
    question: "What is my favourite color? ",
    answer: "Blue"
  },
  {
    question: "Which is the last book that I have read? ",
    answer: "Who moved my cheese?"
  },
  {
    question: "What is my favourite street food? ",
    answer: "Fulki"
  },
  {
    question: "Which is my favourite series? ",
    answer: "Locke & Key"
  }
]

var highScores = [
  {
    name: "Bee",
    score: 1
  },
  {
    name: "Ark",
    score: 0
  }
]

function play(question, answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
  {
    console.log("You are right!");
    userScore++;
  }
  else
  {
    console.log("You are wrong!");
  }
  console.log("Score is: "+ userScore);
  console.log("-----------------");
}

for(var i = 0; i < questionList.length; i++)
{
  play(questionList[i].question, questionList[i].answer);
}

console.log("YAY! Your Score is: "+ userScore);
var highest = 0;
for(var i = 0; i < highScores.length; i++)
{
  if(highest < highScores[i].score)
  {
    highest = highScores[i].score;
  }
}

if(userScore > highest)
{
  console.log("Hooray! You have beaten the high score!");
  console.log("Send screenshot of your score to get your score updated in high scores list.");
}
