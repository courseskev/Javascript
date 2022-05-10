let studentsScores = []; //0.0 to 5.0
let studentsNotes = []; //aprobó o no aprobó
let students = []; // names

function calculateFinalScore() {
    event.preventDefault();
    let student = document.getElementById('student').value;
    let grade1 = parseFloat(document.getElementById('grade_1').value);
    let grade2 = parseFloat(document.getElementById('grade_2').value);
    let grade3 = parseFloat(document.getElementById('grade_3').value);
    let finalScore = 0;
    let note = null;

    if (!student)
        alert("The field 'student name' is mandatory");
    else if (!grade1)
        alert("The field 'Grade 1' is mandatory");
    else if (!grade2)
        alert("The field 'Grade 2' is mandatory");
    else if (!grade3)
        alert("The field 'Grade 3' is mandatory");
    else {
        finalScore = grade1 * .3 + grade2 * .3 + grade3 * .4;

        document.notes.final.value = finalScore;

        if (finalScore >= 3.0)
            note = "Aprobó.";
        else
            note = "NO Aprobó";

        aprobar.innerHTML = `${student}: ${note}`;

        students.push(student);
        studentsNotes.push(note);
        studentsScores.push(finalScore);
    }



}

function printStudentsList() {
    event.preventDefault();

    if (studentsNotes.length == 0)
        console.log("The list is empty");
    else {
        console.log("The list of the students is: ")
        for (let index = 0; index < studentsNotes.length; index++) {
            console.log(index + ')', students[index] + " " + studentsScores[index] + " " + studentsNotes[index]);
        }
    }

}

function deleteScore() {
    event.preventDefault();
    if (studentsNotes.length == 0)
        console.log("The list is empty");
    else {
        let index = parseInt(prompt("Enter the student number to delete"));
        students.splice(index, 1);
        studentsNotes.splice(index, 1);
        studentsScores.splice(index, 1);
        console.log("Item deleted succesfully")
    }
}

function clear2() {
    event.preventDefault();
    document.studentsForm.student.value = " ";
    document.studentsForm.grade_1.value = " ";
    document.studentsForm.grade_2.value = " ";
    document.studentsForm.grade_3.value = " ";
    document.notes.final.value = " ";
}

function searchStudent() {
    event.preventDefault();
    let target = prompt("Enter student's name");

    if (students.includes(target)) {
        let index = students.findIndex(s => s === target);
        console.log("Result: ", students[index] + " " + studentsScores[index] + " " + studentsNotes[index]);
    } else
        console.log("Student doesn't exist");
}