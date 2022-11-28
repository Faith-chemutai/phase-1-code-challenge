//A > 79
 //B - 60 to 79
  //C -  59 to 40
  // D - 40 to 49
  // E - less 40
function gradeGenerator(){
  let totalMarks =prompt ("Input your marks");

if (totalMarks> 79) {
  return `A`;

} else if (totalMarks>=60) {
  return `B`

} else if (totalMarks>=49) {
  return `C`

} else if (totalMarks >=40) {
  return`D`

} else if(totalMarks <39)
  return `E`
}
console.log("totalMarks:" + studentMarks);
gradeConverter();
