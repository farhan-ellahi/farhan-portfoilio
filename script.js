
  function sortProjects() {
    const sortOption = document.getElementById("sortFilter").value;
    const container = document.querySelector("#portfolio-grid");
    const cards = Array.from(document.querySelectorAll(".portfolio-card"));

    let sortedCards = [];

    if (sortOption === "year") {
      sortedCards = cards.sort((a, b) => {
        return parseInt(b.getAttribute("data-year")) - parseInt(a.getAttribute("data-year"));
      });
    } else if (sortOption === "az") {
      sortedCards = cards.sort((a, b) => {
        return a.getAttribute("data-title").localeCompare(b.getAttribute("data-title"));
      });
    } else {
      sortedCards = cards; // Default (no sort)
    }

    // Re-render cards
    container.innerHTML = "";
    sortedProperties.forEach(card => container.appendChild(card));
}

  // Function to open lightbox and show the clicked image
  function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
  }

  // Function to close the lightbox when clicked anywhere
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  // Get the contact form
  const contactForm = document.getElementById('contact-form');
  // Add event listener to the form
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get the form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    // Validate the form data
    if (name && email && message) {
      // Send the form data to the server or API
      fetch('/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        alert('Message sent successfully!');
        contactForm.reset();
      })
      .catch((error) => {
        console.error(error);
        alert('Error sending message!');
      });
    } else {
      alert('Please fill out all fields!');
    }
  });
  const resumeButton = document.querySelector('.btn.secondary');
  // Add an event listener to the button
  resumeButton.addEventListener('click', (e) => {
    // Prevent the default link behavior
    e.preventDefault();
    // Create a new link element
    const link = document.createElement('a');
    link.href = 'FarhanEllahiCV.pdf';
    link.download = 'FarhanEllahiCV.pdf';
    link.click();
  });
    

