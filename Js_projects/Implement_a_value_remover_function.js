// function destroyer(A , a , b , c  ){
//    var n = arguments.length;
//     var B =[];
//     for(let j =0 ; j< A.length ; j++){
//          let f =0;
//         for(let i =1 ; i< n ;i++){
//          if(A[j] == arguments[i] ){
//            f= 1;
//            break;
//           }
//         }
//       if(f==0){
//         B.push(A[j]);
//       }
//     }
//   return B;
// }



// alternate better approach 
function destroyer(arr, ...valuesToRemove){
    return arr.filter(element => valuesToRemove.indexOf(element) === -1 );
}
// or    return arr.filter(element => !valuesToRemove.includes(element));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));