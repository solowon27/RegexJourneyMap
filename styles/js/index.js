
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

        //navigate and highlight contents in the main section
        const sidebarLinks = document.querySelectorAll('.table-contents a');
        const mainContentSections = document.querySelectorAll('.item2 > *'); // Select main content sections
        
        sidebarLinks.forEach(link => {
           link.addEventListener('click', function(event) {
              event.preventDefault();
        
              const targetSectionId = this.getAttribute('data-target'); // Get the data-target attribute (e.g., "#section1")
              const targetSection = document.querySelector(targetSectionId);
        
              mainContentSections.forEach(section => {
                section.classList.remove('highlighted');
              });
        
              // Add highlight class to the corresponding section
              if (targetSection) {
                 targetSection.classList.add('highlighted');
                 // Scroll to the target section instantly
                 targetSection.scrollIntoView({ behavior: 'auto' });
              }
           });
        });
        

  