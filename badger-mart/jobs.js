function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    // When this function is properly implemented, you should alert the user 
    // "Thank you for applying to be a JOB!", where JOB is their selected job (cashier, stocker, or janitor). 
    // If no job is selected, you should alert the user "Please select a job!"

    // Hint: You can get the list of radio input elements by using document.getElementsByName('job'). 
    // Each radio element will have a checked property (whether or not the element is selected) and 
    // a value property (what the name of the radio button is).
    let job = document.getElementsByName('job');
    let jobSelected = false;
    for (let i = 0; i < job.length; i++) {
        if (job[i].checked) {
            jobSelected = true;
            alert("Thank you for applying to be a " + job[i].value + "!");
        }
    }
    if (!jobSelected) {
        alert("Please select a job!");
    }
}