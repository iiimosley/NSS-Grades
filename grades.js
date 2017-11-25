// Loop over an array of student grades 
// console.log():
    // How many of each grade?
    // What is the lowest grade?
    // What is the highest grade?

// F: 50-60 
// D: 61-70 
// C: 71-80 
// B: 81-90 
// A: 91-100


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let aGrade = 0;
let bGrade = 0;
let cGrade = 0;
let dGrade = 0;
let fGrade = 0;
let lowestGrade = Math.min(...scores);
let highestGrade = Math.max(...scores);


for (i=0; i<scores.length; i++) {
    if (scores[i] > 90) {
        aGrade+=1;
    } else if (scores[i] > 80) {
        bGrade+=1;
    } else if (scores[i] > 70) {
        cGrade+=1;
    } else if (scores[i] > 60) {
        dGrade+=1;
    } else {
        fGrade+=1;
    }
};

console.log("A:", aGrade);
console.log("B:", bGrade);
console.log("C:", cGrade);
console.log("D:", dGrade);
console.log("F:", fGrade);
console.log("Lowest Grade:", lowestGrade);
console.log("Highest Grade:", highestGrade);