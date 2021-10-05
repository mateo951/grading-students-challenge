const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades))

function gradingStudents(grades) {
  let roundedGrades = [];
  
  for (let i = 0; i < grades.length; i += 1){
    let roundedGrade = 5 * Math.ceil(grades[i]/5);
    if( grades[i] > 37) {
      if(roundedGrade - grades[i] < 3){
        roundedGrades.push(roundedGrade);      
      } else if (roundedGrade - grades[i] >= 3) {
        roundedGrades.push(grades[i]);
      }
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
}