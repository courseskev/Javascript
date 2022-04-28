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

    finalScore = grade1 * .3 + grade2 * .3 + grade3 * .4;

    document.notes.final.value = finalScore;

    if (finalScore >= 3.0)
        note = "Aprobó.";
    else
        note = "NO Aprobó";


    /*studentsNotes.push({
        student,
        finalScore,
        note
    });*/
    studentsNotes.push(`${student}, ${finalScore}, ${note}`);
}

function printStudentsList() {
    event.preventDefault();

    if (studentsNotes.length == 0)
        console.log("The list is empty");
    else {
        console.log("The list of the students is: ")
        for (let index = 0; index < studentsNotes.length; index++) {
            console.log(index + 1 + ')', studentsNotes[index]);
        }
    }

}

function deleteScore() {
    event.preventDefault();
    if (studentsNotes.length == 0)
        console.log("The list is empty");
    else {
        let index = parseInt(prompt("Enter the student number  to delete"));
        studentsNotes.splice(index, 1);
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
    //$('#studentsForm').trigger("reset");
    //$('form[name="document.studentsForm"]')[0].reset();
}