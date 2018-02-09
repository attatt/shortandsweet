//
var shortList = [1, 2, 3, 4, 5];

function printReverse() {
  for (i = shortList.length; i >= 0; i--) {
    console.log(shortList[i]);
  }
};

printReverse(shortList);

//
var uniF = [1, 2, 3, 1, 5, "asdsad"];

uniF.forEach(function(pos) {
  if (uniF[0] !== pos) {
    console.log("false");
  }
  else {
    console.log("true");
  }
});
//////////////////////////////////////
var uniF = [1, 1, 1, 1, 1, 1];



function trueCheck() {
uniF.forEach(function(pos) {
    uniF[0] === pos;
});
};

isUniform() {
  if (trueCheck === true) {
    console.log("yay") ;
  };
};
