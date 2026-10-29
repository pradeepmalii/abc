const addPhone = document.getElementById("addPhone");
const phoneContainer = document.getElementById("phoneContainer");
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const studentDetails = document.getElementById("studentDetails");

// Add phone number fields dynamically
addPhone.addEventListener("click", function () {
    const input = document.createElement("input");

    input.type = "tel";
    input.placeholder = "Enter Phone Number";
    input.className = "phone-input";

    phoneContainer.appendChild(input);
});

// Validate and display submitted details
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    message.style.color = "red";
    studentDetails.style.display = "none";

    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    if (!emailPattern.test(email)) {
        message.textContent = "Enter a valid email address.";
        return;
    }

    const phoneInputs = document.querySelectorAll(".phone-input");
    const phoneNumbers = [];

    for (let input of phoneInputs) {
        const number = input.value.trim();

        if (number !== "" && !/^[0-9]{10}$/.test(number)) {
            message.textContent =
                "Enter a valid 10-digit phone number.";
            return;
        }

        if (number !== "") {
            phoneNumbers.push(number);
        }
    }

    // Show successful submission
    message.style.color = "green";
    message.textContent = "Registration successful!";

    // Display the actual submitted values
    studentDetails.replaceChildren();

    const details = [
        ["Name", name],
        ["Email", email],
        ["Phone Number", phoneNumbers.length
            ? phoneNumbers.join(", ")
            : "Not provided"]
    ];

    details.forEach(function (item) {
        const line = document.createElement("p");
        line.textContent = item[0] + ": " + item[1];
        studentDetails.appendChild(line);
    });

    studentDetails.style.display = "block";
});