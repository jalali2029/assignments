var employee =[]
var employee = function (name, jobtitle, salary, status="full time"){
this.name=name;
this.jobtitle=jobtitle;
this.salary=salary;
this.status=status;
this.printEmployeeForm = function() {
    console.log("Name: "+this.name, "Job Title: "+this.title, "Salary: "+ this.salary, "Status: "+this.status);
}
}

    var bob = new employee("Bob", "Doctor", "20", "parttime");
    console.log(employee.printEmployeeForm);

