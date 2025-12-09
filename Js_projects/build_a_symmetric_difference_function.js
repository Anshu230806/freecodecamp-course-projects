// Logic issues with indexOf(): indexOf() returns -1 when element is not found, 
// but -1 is truthy in JavaScript, 
// so your condition if(B.indexOf(element)) will return true even when element is not found.
// You're using += to combine arrays, which converts them to strings.
// intead use    var result3 = result1.concat(result2);
// The filter() method creates a new array filled with elements that pass a test provided by a function.
function diffArray(A , B){
   var result1 =   A.filter(check);
    function  check(element ){
      if(B.indexOf(element) != -1 ){
        return false;
      }
      else{ 
            return true;
      }
    }

   var result2 = B.filter(check2);
    function check2(element){
         if(A.indexOf(element) != -1 ){  //-1 is also considered true in js 
           return false;
         }
         else{
           return true;
         }
    }
    var result3 = result1.concat(result2);
   return result3;
  
}
  console.log( diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"] , ["diorite", "andesite", "grass", "dirt", "dead shrub"]));