// user's name
const userName = '';

// validate if user entered a name
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

// question the user wants to ask the Magic Eight Ball
const userQuestion = 'Will I land my first job in tech?';

// print the userQuestion
console.log(`${userName} asked: ${userQuestion}`);

// generate a random number between 0 - 7
const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'; 
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again'; 
    break;
  case 3:
    eightBall = 'Cannot predict now'; 
    break;
  case 4:
    eightBall = 'Do not count on it'; 
    break;
  case 5:
    eightBall = 'My sources say no'; 
    break;
  case 6: 
    eightBall = 'Outlook not so good'; 
    break;
  case 7:
    eightBall = 'Signs point to yes'; 
    break;
};
console.log(`The eight ball answered: ${eightBall}`);