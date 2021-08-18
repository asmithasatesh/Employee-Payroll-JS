//Usecase 12a) Create Class
class EmployeePayroll
{
    //Properties  
    id;
    salary;
    name;
    //constructor to store data
    constructor(id,name,salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
 //getter setter Method
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
    toString(){
        return "id : "+this.id+"\nName : "+this.name+"\nSalary : "+this.salary;
    }
}
let employeePayroll = new EmployeePayroll(1,"Asmitha",1000000);
console.log(employeePayroll.toString());