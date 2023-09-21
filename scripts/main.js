// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Array of sentences to loop through
  const sentences = [
      "Hi, I'm Arsalan",
      "I'm a Full Stack Developer",
      "How can I help You?"
  ];

  const textElement = document.querySelector(".text-animation");
  let sentenceIndex = 0;
  let charIndex = 0;

  function typeSentence() {
      if (charIndex < sentences[sentenceIndex].length) {
          textElement.textContent += sentences[sentenceIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeSentence, 50); // Adjust the typing speed (in milliseconds)
      } else {
          setTimeout(eraseSentence, 1500); // Wait before erasing
      }
  }

  function eraseSentence() {
      if (charIndex > 0) {
          textElement.textContent = sentences[sentenceIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseSentence, 30); // Adjust the erasing speed (in milliseconds)
      } else {
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
          setTimeout(typeSentence, 500); // Delay before typing the next sentence
      }
  }

  // Start the animation
  setTimeout(typeSentence, 1000); // Initial delay before typing
});
