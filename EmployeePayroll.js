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

//UC-7 Array Helper functions

//Usecase 7a) Iterate Array using Helper function Foreach or reduce

console.log("Usecase 7a) Iterate Array using Helper function Foreach or reduce");
let totEmpWage = 0;
function sum(dailyWage) {
  totEmpWage += dailyWage;
}
//Foreach to traverse the array and print total wage
employeeWageList.forEach(sum);
console.log("Total Wage using Foreach: "+totEmpWage);

function totalWages(accumulator,currentValue)
{
return accumulator+currentValue;
}
//Using reduce to traverse the array and print total wage- returns the accumulator
console.log("Total Wage using Reduce: "+employeeWageList.reduce(totalWages,0));

//7b)Show the Day along with Daily Wage using Array map helper function
console.log("Usecase 7b) Show the Day along with Daily Wage using Array map helper function");
let day = 0;

function mapDayWithWage(dailywage){
    day++;
    return "Day "+day+" = "+dailywage;
}
let mapDayWithWageArr = employeeWageList.map(mapDayWithWage);
console.log("Daily Wage List:");
console.log(mapDayWithWageArr);
//7c)Show Days when Full time wage of 160 were earned using filter function
console.log("Usecase 7c) Show Days when Full time wage of 160 were earned using filter function");

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullTime = mapDayWithWageArr.filter(fullTimeWage);
console.log("Full time along with day:");
console.log(fullTime);

//7d)Find the first occurrence when Full Time Wage was earned using find function
console.log("Usecase 7d)Find the first occurrence when Full Time Wage was earned using find function");

function findFullTimeFirstOccurence(dailyWage)
{
    return dailyWage.includes("160");
}

console.log("Daily Wage: "+mapDayWithWageArr.find(findFullTimeFirstOccurence));

//7e) Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("\nUsecase 7e) Check if Every Element of Full Time Wage is truly holding Full time wage");

function EveryFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Check whether full time array has only fulltime salary: "+fullTime.every(EveryFullTimeWage));

// 7f) Check if there is any Part Time Wage
console.log("\nUsecase 7f) Check if there is any Part Time Wage");
function SomePartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
} 
console.log("Check whether full time array has any parttime salary: "+mapDayWithWageArr.some(SomePartTimeWage));

//7g)Find the number of days worked
console.log("\nUsecase 7g)Find the number of days worked");

function totalDaysWorked(accumulator,dailyWage){
    if(dailyWage>0)
    accumulator++;
    return accumulator;
}
console.log("Number of days employee worked : "+employeeWageList.reduce(totalDaysWorked,0));