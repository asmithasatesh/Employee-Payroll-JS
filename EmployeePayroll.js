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
CalculateDailyWage(empCheck);
//Refactor UC 2 with Function
function CalculateDailyWage(empCheck)
{
    //Emploee Type
    var employees=new Array();
    employees.push("Absentees");
    employees.push("Part Timer");
    employees.push("Full timer");

    console.log("Usecase 2: Employee is "+employees[empCheck]);
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
    return empWage;
}

//Usecase 4: Calculate wages for a month 
const NUM_OF_WORKING_DAYS=20;
let totalEmpWage=0;
for(let i=0;i<NUM_OF_WORKING_DAYS;i++)
{
    var empCheck=Math.floor(Math.random()*10) % 3;
    empWage=CalculateDailyWage(empCheck);
    totalEmpWage+=empWage;
}
console.log("Usecase 4: TotalEmpWage = "+totalEmpWage ," Num of Working Days : "+NUM_OF_WORKING_DAYS);

//Usecase 5: calculate wages for total working hours 160 or max days of 20 in month
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
let totalWage=0;
var employees=new Array();
//Usecase 6 : Store employeewage in an array
var employeeWageList=new Array();
employees.push(0);
employees.push(4);
employees.push(8);
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    var empCheck=Math.floor(Math.random()*10) % 3;
    let tempwage=CalculateDailyWage(empCheck);
    totalWage+=tempwage;
    totalEmpHrs+=employees[empCheck];
    //Add to List
    employeeWageList.push(tempwage);
}
console.log("UC5- Total Days : "+ totalWorkingDays + " Total Hours : "+totalEmpHrs + " Total Emp Wage : "+totalWage);

//Usecase 6: Store Daily wage in Array
var daycount=0;
console.log("------- Printing Employee wage List content ------");
employeeWageList.forEach(element => {
    daycount++;
    console.log("Day "+daycount+" wage is "+element);
});
