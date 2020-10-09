let result;
let array = [];
do
{
result = prompt('Введите элемент массива');
if(result){
array.push(+result);
}
} while(result)
for (let i = 0, endI = array.length - 1; i < endI; i++){
for (let j = 0, endJ = array.length - i - 1; j < endJ; j++){
if(array[j] > array[j + 1]){
let temp = array[j];
array[j] = array[j+1];
array[j+1] = array[j+1] = temp;
}
}
}
console.log(array);
console.log("Min element: "+ array[0]);
let max = array.length - 1;
console.log("Max element: "+ array[max]);
let sum = 0;
for (let i = 0; i < array.length; i++){
sum += array[i];
}
console.log("Sum is: "+ sum);