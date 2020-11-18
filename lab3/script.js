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
function Complete()
        {            
            let a = arrStudents.length;
            arrStudents[a] = {
              Name : document.form.name.value,
              surname: document.form.surname.value,
              age : document.form.age.value,
              averageBall : document.form.ball.value
              }
              let tbl = document.getElementById('myTable');
              addTr(a);
        }
let tbl = document.getElementById('myTable');
function addTr(i){
   let tr = document.createElement('tr');
   tr.setAttribute('id','tr'+ i);
   for(category in arrStudents[i]){
     addTd(i,tr);
   }
    let td = document.createElement('td');
   let a = '<form action="" name="form2" onsubmit="Delete('+ i +');return false;"> <input type="submit" name="button2" value="Удалить"> </form>';
   td.innerHTML = a;
   tr.append(td);
  tbl.append(tr);
}
function addTd(i,tr){
  let td = document.createElement('td');
  td.textContent = arrStudents[i][category];
  tr.append(td);
}
for(let i = 0; i < arrStudents.length;i++){
  addTr(i);
}
function Delete(i){
  let a = document.getElementById('tr'+ i);
  a.parentNode.removeChild(a);
  }
