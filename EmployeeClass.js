//Usecase 12a) Create Class
class EmployeePayroll
{
    //Properties  
    id;
    salary;
    name;
      
    //Extend gender and start date
    gender;
    startDate;
   
    //Constructor
    constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender=params[3];
    this.startDate=params[4];
    
}
 //getter setter Method
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
    toString(){
        return "id : "+this.id+"\nName : "+this.name+"\nSalary : "+this.salary+"\nGender : "+this.gender+"\nStartDate : "+this.startDate;
    }
}
//Date format: Wed Aug 18 2021 09:14:58 GMT+0530 (India Standard Time)
let employeePayroll = new EmployeePayroll(1,"Asmitha",1000000,'F',(new Date()).toString().split(' ').slice(1,4).join(" "));
console.log(employeePayroll.toString());