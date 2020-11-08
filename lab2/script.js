let arrStudents = [] // объявление массива
arrStudents[0] = {
Name : "Vadim",
surname: "041",
age : 18,
averageBall : 7.2
}
arrStudents[1] = {
Name : "Alex",
surname: "Petrov",
age : 28,
averageBall : 7.7
}
arrStudents[2] = {
Name : "Sam",
surname: "Sidorov",
age : 15,
averageBall : 6.6
}
let tbl = document.getElementById('myTable');
let avBall = 0;
function addTr(i){
   let tr = document.createElement('tr');
   for(category in arrStudents[i]){
     addTd(i,tr);
   }
  tbl.append(tr);
}
function addTd(i,tr){
  let td = document.createElement('td');
     td.textContent = arrStudents[i][category];
  if(category == "averageBall")
    avBall += +td.textContent;
  tr.append(td);
}
for(let i = 0; i < arrStudents.length;i++){
  addTr(i);
}
avBall /= arrStudents.length;
let p = document.getElementById('averageBall');
let str = "Средний балл всех студентов: " + avBall.toFixed(2);
p.append(str);