//alert();

function calculateFinalScore() {
    event.preventDefault();
    let student = document.getElementById('student').value;
    let grade1 = parseFloat(document.getElementById('grade_1').value);
    let grade2 = parseFloat(document.getElementById('grade_2').value);
    let grade3 = parseFloat(document.getElementById('grade_3').value);

    console.log(student, " ", grade1, " ",
        grade2, " ", grade3);

    let finalScore = grade1 * .3 + grade2 * .3 + grade3 * .4;

    document.notes.final.value = finalScore;

    if (finalScore >= 3.0)
        aprobar.innerHTML = `${student} APROBÓ :D`

    else
        aprobar.innerHTML = `${student} REPROBÓ :(`
}

function clear() {
    document.studentsForm.student.value = " ";
    document.studentsForm.grade_1.value = " ";
    document.studentsForm.grade_2.value = " ";
    document.studentsForm.grade_3.value = " ";
    document.notes.final.value = " ";
}