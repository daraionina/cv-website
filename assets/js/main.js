// script.js
// Placeholder for interactive behavior.
// e.g., highlight current nav link on scroll, add smooth scrolling, etc.

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // Implement smooth scroll or section reveal here
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll to explore functionality
function scrollToBottom() {
  const rightSection = document.querySelector('.right');
  if (rightSection) {
    rightSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

