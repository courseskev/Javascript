//alert();
let studentsNotes = [];

function calculateFinalScore() {
    event.preventDefault();
    let student = document.getElementById('student').value;
    let grade1 = parseFloat(document.getElementById('grade_1').value);
    let grade2 = parseFloat(document.getElementById('grade_2').value);
    let grade3 = parseFloat(document.getElementById('grade_3').value);
    let finalScore = 0;
    let note = null;


    /*console.log(student, " ", grade1, " ",
        grade2, " ", grade3);*/

    finalScore = grade1 * .3 + grade2 * .3 + grade3 * .4;

    document.notes.final.value = finalScore;

    if (finalScore >= 3.0) {
        note = "Aprobó.";
        //aprobar.innerHTML = `${student} APROBÓ :D`
    } else {
        note = "NO Aprobó";
        //aprobar.innerHTML = `${student} REPROBÓ :(`
    }

    studentsNotes.push({
        student,
        finalScore,
        note
    });
    printStudentsList(studentsNotes);
    //console.log(studentsNotes[0]);
}

function printStudentsList() {
    event.preventDefault();
    for (let index = 0; index < studentsNotes.length; index++) {
        console.log(studentsNotes[index]);
    }
}

function clear() {
    event.preventDefault();
    document.studentsForm.student.value = " ";
    document.studentsForm.grade_1.value = " ";
    document.studentsForm.grade_2.value = " ";
    document.studentsForm.grade_3.value = " ";
    document.notes.final.value = " ";
}