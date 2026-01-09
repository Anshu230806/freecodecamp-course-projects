let number = [1,2,3,4,5]
const evennumbers= number.filter(isEven);
function isEven(element){
    return element %2 == 0;
}
console.log(evennumbers);