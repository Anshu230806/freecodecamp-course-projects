function smallestCommons(arr){
  let first;
  let second;
 if(arr[0] > arr[1]){
   first = arr[1];
   second = arr[0];
 }
 else{
    first = arr[0];
   second = arr[1];
 }
   let i = 1;
  
   while(true){
      let f = true;   // imp , donot place this line outside while loop
     if((first * i) % second === 0){  /// first*i === second*i  may cause error 
          for(let j = first+1; j< second ; j++){
            if((first*i)%j !=0){
              f = false;
               break;
            }
          } 
          if(f){
            return first*i;
          }
          
     }
     i++;
   }
}

console.log(smallestCommons([1, 5]))