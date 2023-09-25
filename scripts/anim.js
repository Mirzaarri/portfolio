
      document.addEventListener("DOMContentLoaded", function () {
        const hiddenElements = document.querySelectorAll(".hidden");

        const revealOnScroll = () => {
          hiddenElements.forEach((el) => {
            const boundingBox = el.getBoundingClientRect();
            if (boundingBox.top < window.innerHeight - 230) {
              el.classList.add("show");
            }
          });
        };

        // Initial call to reveal elements in view on page load
        revealOnScroll();

        // Attach the scroll event listener
        window.addEventListener("scroll", revealOnScroll);
      });


      document.addEventListener("DOMContentLoaded", function () {
        const heroImage = document.querySelector(".hero-background");

        // Set the point at which scaling should stop (e.g., halfway down the viewport)
        const stopScalingAt = window.innerHeight / 2; // Adjust as needed

        // Define the original and final scales
        const originalScale = 1;
        const finalScale = 1.2; // Adjust this value to your desired final scale

        // Listen for the scroll event
        window.addEventListener("scroll", () => {
          // Calculate the amount to scale the image based on scroll position
          const scrollY = window.scrollY;
          let scale;

          // Check if the scroll position is below the stop point
          if (scrollY < stopScalingAt) {
            scale =
              originalScale +
              (scrollY / stopScalingAt) * (finalScale - originalScale);
          } else {
            scale = finalScale;
          }

          // Apply the scaling transformation to the image
          heroImage.style.transform = `scale(${scale})`;
        });
      });
   
      document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.querySelector(".navbar");

        // Listen for the scroll event
        window.addEventListener("scroll", () => {
          // Get the current scroll position
          const scrollY = window.scrollY;

          // Define the scroll threshold for changing the navbar style
          const scrollThreshold = 0; // Adjust this value as needed

          // Check if the scroll position is beyond the threshold
          if (scrollY > scrollThreshold) {
            navbar.classList.add("scrolled"); // Add the "scrolled" class
          } else {
            navbar.classList.remove("scrolled"); // Remove the "scrolled" class
          }
        });
      });

      document.addEventListener("DOMContentLoaded", function () {
        const hiddenElements = document.querySelectorAll(".hidden");

        const revealOnScroll = () => {
          hiddenElements.forEach((el) => {
            const boundingBox = el.getBoundingClientRect();
            if (boundingBox.top < window.innerHeight - 200) {
              el.classList.add("show");
            }
          });
        };

        // Initial call to reveal elements in view on page load
        revealOnScroll();

        // Attach the scroll event listener
        window.addEventListener("scroll", revealOnScroll);
      });
  
      document.addEventListener("DOMContentLoaded", function () {
        const hiddenElements = document.querySelectorAll(".hidden1");

        const revealOnScroll = () => {
          hiddenElements.forEach((el) => {
            const boundingBox = el.getBoundingClientRect();
            if (boundingBox.top < window.innerHeight - 250) {
              el.classList.add("show1");
            }
          });
        };

        // Initial call to reveal elements in view on page load
        revealOnScroll();

        // Attach the scroll event listener
        window.addEventListener("scroll", revealOnScroll);
      });


      
   
      document.addEventListener("DOMContentLoaded", function () {
        const serviceSection = document.querySelector(".services-row1");
        const serviceSection2 = document.querySelector(".services-row2");

        // Set the point at which scaling should stop (e.g., halfway down the viewport)
        const stopScalingAt = window.innerHeight / 0.5; // Adjust as needed

        // Define the original and final scales
        const originalScale = 0.5;
        const finalScale = 1; // Adjust this value to your desired final scale

        // Listen for the scroll event
        window.addEventListener("scroll", () => {
          // Calculate the amount to scale the section based on scroll position
          const scrollY = window.scrollY;
          let scale;

          // Check if the scroll position is below the stop point
          if (scrollY < stopScalingAt) {
            scale =
              originalScale +
              (scrollY / stopScalingAt) * (finalScale - originalScale);
          } else {
            scale = finalScale;
          }

          // Apply the scaling transformation to the section
          serviceSection.style.transform = `scale(${scale})`;
          serviceSection2.style.transform = `scale(${scale})`;
        });
      });
   
      document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector(".about");

        // Set the point at which scaling should stop (e.g., halfway down the viewport)
        const stopScalingAt = window.innerHeight / 1.5; // Adjust as needed

        // Define the original and final scales
        const originalScale = 0.5;
        const finalScale = 1; // Adjust this value to your desired final scale

        // Listen for the scroll event
        window.addEventListener("scroll", () => {
          // Calculate the amount to scale the section based on scroll position
          const scrollY = window.scrollY;
          let scale;

          // Check if the scroll position is below the stop point
          if (scrollY < stopScalingAt) {
            scale =
              originalScale +
              (scrollY / stopScalingAt) * (finalScale - originalScale);
          } else {
            scale = finalScale;
          }

          // Apply the scaling transformation to the section
          aboutSection.style.transform = `scale(${scale})`;
        });
      });

    //   document.addEventListener('DOMContentLoaded', () => {
    //     const navLinks = document.querySelectorAll('nav a');
    
    //     navLinks.forEach(link => {
    //         link.addEventListener('click', (event) => {
    //             event.preventDefault();
    
    //             const targetId = link.getAttribute('href').substring(1); // Remove the '#' character
    //             const targetSection = document.getElementById(targetId);
    
    //             if (targetSection) {
    //                 const targetY = targetSection.getBoundingClientRect().top + window.scrollY;
    //                 const initialY = window.scrollY;
    //                 const distance = Math.abs(targetY - initialY);
    //                 const duration = 500; // Adjust the duration as needed
    
    //                 const startTime = performance.now();
    
    //                 function scrollStep(timestamp) {
    //                     const currentTime = timestamp - startTime;
    //                     const progress = Math.min(currentTime / duration, 1);
    //                     window.scrollTo(0, initialY + progress * (targetY - initialY));
    
    //                     if (progress < 1) {
    //                         requestAnimationFrame(scrollStep);
    //                     }
    //                 }
    
    //                 requestAnimationFrame(scrollStep);
    //             }
    //         });
    //     });
    // });
    
    document.addEventListener('DOMContentLoaded', () => {
      const navLinks = document.querySelectorAll('nav a');
      const sections = document.querySelectorAll('section');
  
      // Function to check if a section is in the viewport
      function isSectionInViewport(section) {
          const rect = section.getBoundingClientRect();
          return (
              rect.top <= 50 && rect.bottom >= 50
          );
      }
  
      // Function to update the active navigation link
      function updateActiveNavLink() {
          let activeIndex = -1; // Index of the currently active section
  
          sections.forEach((section, index) => {
              if (isSectionInViewport(section)) {
                  activeIndex = index;
              }
          });
  
          if (activeIndex !== -1) {
              // Remove the "active" class from all navigation links
              navLinks.forEach(navLink => {
                  navLink.classList.remove('active');
              });
  
              // Add the "active" class to the corresponding navigation link
              navLinks[activeIndex].classList.add('active');
          }
      }
  
      // Add click event listeners to navigation links
      navLinks.forEach(link => {
          link.addEventListener('click', (event) => {
              event.preventDefault();
  
              // Remove the "active" class from all navigation links
              navLinks.forEach(navLink => {
                  navLink.classList.remove('active');
              });
  
              link.classList.add('active'); // Add "active" class to the clicked link
  
              const targetId = link.getAttribute('href').substring(1); // Remove the '#' character
              const targetSection = document.getElementById(targetId);
  
              if (targetSection) {
                  const targetY = targetSection.getBoundingClientRect().top + window.scrollY;
                  const initialY = window.scrollY;
                  const distance = Math.abs(targetY - initialY);
                  const duration = 500; // Adjust the duration as needed
  
                  const startTime = performance.now();
  
                  function scrollStep(timestamp) {
                      const currentTime = timestamp - startTime;
                      const progress = Math.min(currentTime / duration, 1);
                      window.scrollTo(0, initialY + progress * (targetY - initialY));
  
                      if (progress < 1) {
                          requestAnimationFrame(scrollStep);
                      }
                  }
  
                  requestAnimationFrame(scrollStep);
              }
          });
      });
  
      // Add scroll event listener to update active navigation link as you scroll
      window.addEventListener('scroll', () => {
          updateActiveNavLink();
  
          // Add a check for when you scroll back to the top
          if (window.scrollY === 0) {
              // Remove the "active" class from all navigation links
              navLinks.forEach(navLink => {
                  navLink.classList.remove('active');
              });
  
              // Add the "active" class to the "Home" link
              navLinks[0].classList.add('active');
          }
      });
  
      // Initial check when the page loads
      window.addEventListener('load', updateActiveNavLink);
  });
  