// Welcome message
function showWelcome() {
    document.getElementById("welcomeMsg").innerText = "Welcome to Campus Tech Store!";
}

// Discount
function applyDiscount() {
    document.getElementById("discountMsg").innerText = "You received a 10% discount!";
}

// Form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    if (!email.includes("@")) {
        document.getElementById("formMsg").innerText = "Enter a valid email!";
        return false;
    }

    document.getElementById("formMsg").innerText = "Thank you! Form submitted.";
    return false;
}

// Search product
function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#productTable tr");

    for (let i = 1; i < rows.length; i++) {
        let text = rows[i].innerText.toLowerCase();

        if (text.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}