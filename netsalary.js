let preBasicSalary =prompt("Input basic salary");
let benefit = prompt("input benefits")
let basicSalary = preBasicSalary - benefits;
//PAYE
if (basicSalary<= 24000){
    paye = basicSalary /10;
}else if (basicSalary >= 24001 && basicSalary <=3233){
    paye =basicSalary/4;
}else if ((basicSalary >32,333)){
    paye =(basicSalary *3)/10;

}
console.log(`paye:$paye}`);

//Nhif deductions
if (basicSalary<= 5999){
    deductionN=150;
}else if  (basicSalary >=6000 && basicSalary<= 7999){
    deductionN=300;

}else if  (basicSalary >=8000 && basicSalary<= 11999){
    deduction=400;

}else if  (basicSalary >=12000 && basicSalary<= 14999){
    deduction=500;
}else if  (basicSalary >=15000 && basicSalary<= 19999){
    deduction =600;
}else if  (basicSalary >=20000 && basicSalary<= 24999){
    deduction=750;
}else if  (basicSalary >=25000 && basicSalary<= 29999){
    deduction=850;
}else if  (basicSalary >=30000 && basicSalary<= 34999){
    deduction=900;

}else if  (basicSalary >=35000 && basicSalary<= 39999){
    deduction=950;
}else if  (basicSalary >=40000 && basicSalary<= 44999){
    deduction =1000;

}else if  (basicSalary >=45000 && basicSalary<= 49999){
    deduction =1100;
}else if  (basicSalary >=50000 && basicSalary<= 59999){
    deduction =1200;

}else if  (basicSalary >=60000 && basicSalary<= 69999){
    deduction =1300;

}else if  (basicSalary >=70000 && basicSalary<= 79999){
    deduction =1400;
}else if  (basicSalary >=80000 && basicSalary<= 89999){
    deduction =1500;
}else if  (basicSalary >=90000 && basicSalary<= 99999){
    deduction=1600;
}else if  (basicSalary >=100000){
    deduction =1700;
}
console.log(`NHIF:${deduction}`);
// NSSF deductions
let nssf=(basicSalary*6)/100;
console.log(`NSSF:${nssf}`);
let netSalary =basicSalary - paye-deduction;
console.log(`Net Salary:${netSalary}`);












    
    
     
    