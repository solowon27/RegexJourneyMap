
function navigateToHomepage() {
    window.location.href = 'homepage.html';
  }
  
  const modal = document.getElementById("myModal");
        const popupLink = document.getElementById("popup-link");
        const closeButton = document.querySelector(".close");

        popupLink.addEventListener("click", function(event) {
            event.preventDefault();
            modal.style.display = "block";
        });

        closeButton.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
  