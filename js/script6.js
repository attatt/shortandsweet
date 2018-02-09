// //ARRAYS:
// var colors = ["red", "orange", "yellow"]
//
// // add item (to end): push()
// colors.push("indigo")
//
// // remove last element: pop()
// colors.pop()
//
// // add item to the front: unshift()
// colors.unshift("infrared")
//
// //remove item from the front: shift()
// colors.shift()
// //  shift also returns the removed element, so i can store it in a variable
// var col = colors.shift();
//
// //find the argument in an array and returns the index: indexOf
// var friends = ["joe", "jane", "hans", "jack", "hans"]
// //returns the first index at which a given element can be found
// friends.indexOf("hans"); //2, not 4
// //returns -1 if the element is not present
// friends.indexOf("bobo"); //-1
//
// //to copy different portions of the array: slice()
// //specifiy index where the new array starts(1) and ends(2)
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var someNums = fruits.slice(1, 3); // someNums will contain 2, 3
// //you can use slice() to copy an entire array
// var nums = [1, 2, 3];
// var otherNums = nums.slice();
//
// //nested arrays (2d arrays)
// var numGroups = [
//   [2,3,4],
//   [5,6,7],
//   [8,9,0]
// ];
// // //numGroups[2][0] will be 8 (array at index 2, element from index 0)


//TODO LIST "app"
//declare variable to store todos
var todoList = [];

var  input = prompt("What would you like to do?");
// create loop that asks for input
while (input !== "quit") {
  if(input === "list") {
    console.log(todoList);
  }
  else if(input === "new") {
    //ask for input of new todo
    var newTodo = prompt("what's the new todo?");
    //store the new todo
    todoList.push(newTodo);
  }
    input = prompt("What would you like to do?");
  }
