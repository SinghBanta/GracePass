function passOrFail(marks, applyGrace) {
    const passingMarks = 34;
    let result;
    let graceMarks = 0;

    // Apply grace only if marks are exactly 32 and checkbox is checked
    if (applyGrace && marks == 32) {
        graceMarks = 2;
    }

    let totalMarks = marks + graceMarks;
    
    if (totalMarks >= passingMarks) {
        result = graceMarks ? "Pass with grace marks" : "Pass";
    } else {
        result = "Fail";
    }

    return { result, totalMarks };
}

// Handling button click
document.getElementById("submitBtn").addEventListener("click", function () {
    let marks = parseInt(document.getElementById("marks").value);
    let applyGrace = document.getElementById("graceCheckbox").checked;

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("resultText").textContent = "Please enter a valid mark between 0 and 100.";
        return;
    }

    let { result, totalMarks } = passOrFail(marks, applyGrace);

    // Display result
    document.getElementById("resultText").textContent = `Marks: ${marks}, Result: ${result}, Total Marks: ${totalMarks}`;
});

document.getElementById("marks").addEventListener("input", function () {
    document.getElementById("resultText").textContent = "";
});







