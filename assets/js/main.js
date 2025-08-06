// script.js
// Navigation functionality

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    
    // Check if it's a link to another page (contains .html)
    if (href.includes('.html')) {
      // Let the browser handle normal page navigation
      return;
    }
    
    // Only prevent default for internal anchors
    e.preventDefault();
    const target = document.querySelector(href);
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

