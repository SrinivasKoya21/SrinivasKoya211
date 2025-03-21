function CalculateAge() {
    const date = new Date();

    let current_year = date.getFullYear(); // Fixed "gerFullYear" to "getFullYear"

    let dob = new Date(document.getElementById("dob").value);
    if (isNaN(dob)) {
        document.getElementById("output_div").innerHTML = "Please select a valid date.";
        return;
    }

    let dob_year = dob.getFullYear();
    let age = current_year - dob_year;

    // Adjust age if birthday hasn't occurred this year yet
    let monthDiff = date.getMonth() - dob.getMonth();
    let dayDiff = date.getDate() - dob.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    let msg = "You are " + age + " year(s) old!";
    document.getElementById("output_div").innerHTML = msg;
}
