//Usecase 12a) Create Class
class EmployeePayroll
{   
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
        return this._name;
    }
    set name(name) {
         //Rgex Expression
         let pattern = RegExp("^[A-Z]{1}[a-z]{3,}$")
         if (pattern.test(name)) {
             this._name = name;
         }
         else {
             throw 'Give proper name';
         }
    }

    get id() {
        return this._id;
    }
    set id(empId) {
        let pattern = RegExp("^[1-9]{1}[0-9]*$")
        if (pattern.test(empId)) {
            this._id = empId;
        }
        else {
            throw 'Id should be greater than 0';
        }
    }

    get salary() {
        return this._salary;
    }
    set salary(pay) {
        let pattern = RegExp("^[1-9]{1}[0-9]*$")
        if (pattern.test(pay)) {
            this._salary = pay;
        }
        else {
            throw 'Pay should be greater than 0';
        }
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let pattern = RegExp("^[M,F]$")
        if (pattern.test(gender)) {
            this._gender = gender;
        }
        else {
            throw 'Gender should be either M or F';
        }
    }
    
    get startDate() {
        return this._startDate;
    }
    set startDate(date) {
        let currenDate = new Date();
        if (date <= currenDate) {
            this._startDate = date;
        }
        else {
            console.log(date+" is greater than "+currenDate);
            throw 'Give date less than current Date';
        }
    }
    toString(){
        return "id : "+this.id+"\nName : "+this.name+"\nSalary : "+this.salary+"\nGender : "+this.gender+"\nStartDate : "+this.startDate;
    }
}
//Date format: Wed Aug 18 2021 09:14:58 GMT+0530 (India Standard Time)
let employeePayroll = new EmployeePayroll(1,"Asmitha",1000000,'F',(new Date()).toString().split(' ').slice(1,4).join(" "));
console.log(employeePayroll.toString());

try {
    employeePayroll.name = "Mahi";
    employeePayroll.gender='L'
    console.log("\n"+employeePayroll.toString());
}
catch (e) 
{
    console.error(e);
}

try {
    let employeePayroll = new EmployeePayroll(2,"Mana",1000000,'F',new Date('11/14/2021'));
        console.log("\n"+employeePayroll);
    }
    catch (e) 
    {
        console.error(e);
    }