// Existing array of usernames
var usernames = [];

// Function to handle sign-up
function signUp() {
    var choice = prompt("Do you want to sign up? (yes/no)").toLowerCase();
    if (choice === "yes") {
        var name = prompt("Enter your name:");
        usernames.push(name);
        console.log("You have signed up successfully!");
    } else if (choice === "no") {
        console.log("Okay, maybe next time!");
    } else {
        console.log("Invalid choice!");
    }
}

// Call signUp function
signUp();

// Display the array of usernames
console.log("Usernames array:", usernames);
