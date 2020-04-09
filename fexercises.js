// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newArray = [];
array.forEach (arrayObject1 => {
  newArray.push(
      {
      username: arrayObject1.username + "!",
      team: arrayObject1.team,
      score: arrayObject1.score,
      items: arrayObject1.items
      });
});

// Answer key:
// let newArray = []
// array.forEach(user => {
//   let { username } = user;
//   username = username + "!";
//   newArray.push(username);
// })
// console.log(newArray);

//Create an array using map that has all the usernames with a "?" to each of the usernames

let newArray2 = [];
array.forEach(objectArray2 => {
  newArray2.push(
    {
      username: objectArray2.username + "?",
      team: objectArray2.team,
      score: objectArray2.score,
      items: objectArray2.items
    });
});

const newArray3 = array.map(objectArray3 => {
  let {username} = objectArray3;
  return username + "?";
});

// console.log(newArray3);

//Filter the array to only include users who are on team: red

const newArray4 = array.filter(objectArray4 => {
    return objectArray4.team === "red";
  });

const newArray5 = array.reduce((runningScore, objectArray5) => {
  return objectArray5.score + runningScore;
}, 0);

//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray6 = arrayNum.map((num,i) => {
// 	return num * 2;
// });

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newArray7 = array.map((objectArray7) => {
  var numberOfItems = objectArray7.items.length;
  for (var i = 0; i < numberOfItems; i++) {
    objectArray7.items[i] = objectArray7.items[i] + "!";
  };
  return (objectArray7);
});

const newArray8 = array.map(objectArray8 => {
  objectArray8.items = objectArray8.items.map(objectItems => {
    return objectItems + "!";
  });
  return objectArray8;
});