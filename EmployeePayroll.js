//Usecase 1: Check whether employee is present or not

const IS_ABSENT=0;
var empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("UC 1-Employee is Absent");
}
else
{
    console.log("UC 1-Employee is Present");
}

//Usecase 2: Calculate daily employee wage
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

var empHrs=0;
var empCheck= Math.floor(Math.random()*10) % 3;
//Emploee Type
var employees=new Array();
employees.push("Absentees");
employees.push("Part Timer");
employees.push("Full timer");

console.log("Usecase 2: Employee is "+employees[empCheck]+empCheck);
switch(empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
        break;
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage = "+empWage);



