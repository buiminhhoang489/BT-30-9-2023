var students = [
    {
        id:Date.now() * Math.random(),
        name:"Alcatraz ",
        age:"25"
       
    }
]
function renderStudents(students){
    let tableBodyEl = document.getElementById("tableBody")
    let dataString = ``;
    for(let i in students){
        dataString += `
        <tr>
        <th scope="row">${Number(i) + 1 }</th>
        <td>${students[i].name}</td>
        <td>${students[i].age}</td>
       
        <td>
          <button onclick = "handleDeletFunction(${students[i].id})" type="button" class="btn btn-danger">Delete</button>
          <button onclick = "handleUpdateProduct(${students[i].id})" type="button" class="btn btn-primary">Update</button>
        </td>
      </tr> 
        `
    }
    tableBodyEl.innerHTML = dataString;
}
renderStudents(students);

function handleAddStudents(event){
    event.preventDefault()
    console.log("đã vào")
let newStudents = {
    id: Date.now() * Math.random(),
    name:event.target.name.value,
    age:event.target.age.value,
   }
students.push(newStudents);
renderStudents(students);
}
 function handleDeletFunction(studentId) {
    for (let i in students) {
        if(students[i].id == studentId) {
           students.splice( i , 1)
         break
        }
    }
    renderStudents(students)
 }
  function handleUpdateProduct(studentId) {
    for (let i in students){
        if(students[i].id ==studentId) {
            students[i] = 
            {...students[i],
            name:prompt("Nhập giá mới", students[i].name),
            age:prompt("Nhập age mới", students[i].age),
            
        }
        break
        }
    }
    renderStudents(students);
  }
  function sortTable(column) {
    students.sort((a, b) => b[column] - a[column]);
    renderStudents(students)
}
