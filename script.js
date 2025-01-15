// document.addEventListener("DOMContentLoaded", () => {
// 	const contactForm = document.getElementById("contactForm");

// 	contactForm.addEventListener("submit", function (e) {
// 		e.preventDefault(); // Prevent form from submitting

// 		// Get form values
// 		const name = document.getElementById("name").value.trim();
// 		const email = document.getElementById("email").value.trim();
// 		const subject = document.getElementById("subject").value.trim();
// 		const message = document.getElementById("message").value.trim();

// 		// Simple validation
// 		if (name === "" || email === "" || subject === "" || message === "") {
// 			alert("Please fill in all fields.");
// 			return;
// 		}

// 		if (!validateEmail(email)) {
// 			alert("Please enter a valid email address.");
// 			return;
// 		}

// 		// If validation passes
// 		// alert(
// 		// 	"Thank you for contacting us, " + name + "! We will get back to you soon."
// 		// );

// 		// Reset form
// 		contactForm.reset();
// 	});

// 	// Email validation function
// 	function validateEmail(email) {
// 		const re =
// 			/^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
// 		return re.test(String(email).toLowerCase());
// 	}
// });
