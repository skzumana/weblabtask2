let form = document.getElementById("studentForm");
let table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

form.addEventListener("submit", 'function(e){

    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let studentId = document.getElementById("studentId").value.trim();
    let email = document.getElementById("email").value.trim();
    let credit = document.getElementById("credit").value;
    let department = document.getElementById("department").value;

    if(fname==""){
        alert("First Name cannot be empty.");
        return;
    }

    if(lname==""){
        alert("Last Name cannot be empty.");
        return;
    }

    if(!studentId.includes("-")){
        alert("Student ID must contain '-'.");
        return;
    }

    if(!email.includes("@student.aiub.edu")){
        alert("Email must contain @student.aiub.edu");
        return;
    }

    if(credit=="" || credit<0 || credit>=148){
        alert("Credit must be between 0 and 147.");
        return;
    }

    if(department==""){
        alert("Please select a department.");
        return;
    }

    let row = table.insertRow();

    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = lname;
    row.insertCell(2).innerHTML = studentId;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = credit;
    row.insertCell(5).innerHTML = department;
    form.reset();
    alert("Student Registered Successfully.");
});