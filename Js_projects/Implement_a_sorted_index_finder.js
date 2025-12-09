// findIndex misuse: You're passing a function that performs binary search to findIndex, but
// findIndex doesn't work that way. It calls the function for each element, not once for the whole array.
// // If no element is found (all are less than num), return the last index + 1
  // findIndex returns -1 when no element satisfies the condition
//     const result = arr.findIndex((element) => {
//     return element >= num; // Find first element that's >= num
//   });
// let ind = arr.findIndex(func);

// function func(element ){
//return element >= num;
 // }


// sort function , it sort elements alphabetically not numerically 
// Syntax for sorting numbers 
// array.sort(compareFunction)
// for sorting array numerically , arr.sort((a, b) => a - b); 
  // function(a, b ) { return a-b}
  // for descending , function(a ,b ){ return b-a}
  // for descending order , further call  arr.reverse()  function 
// there is no size function , its arr.length

//  let mid = Math.floor((left + right) / 2);  // use Math.floor()

function getIndexToIns(arr , num){
  arr.sort(function(a, b){ return a-b } );
// sort method work differently for numbers 
   var num1 = arr.findIndex(element => element >= num);
    return num1 == -1? arr.length : num1 ;

} 

  console.log( getIndexToIns([10, 20, 30, 40, 50], 35));
  console.log( getIndexToIns([10, 20, 30, 40, 50], 30));