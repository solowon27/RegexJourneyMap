
function navigateToHomepage() {
    window.location.href = 'homepage.html';
  }
  

    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav ul'); // Changed this line

    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

