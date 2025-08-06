/**
 * Reusable Header Component
 * Creates a standardized header with navigation links and customizable content
 */
class HeaderComponent {
  constructor(config) {
    this.config = {
      containerId: 'header-container',
      title: 'PAGE TITLE',
      leftLink: { href: '../index.html', text: '← HOME' },
      rightLink: { href: 'contact.html', text: 'CONTACT →' },
      cssClass: 'header',
      ...config
    };
  }

  /**
   * Creates and returns the header HTML element
   * @returns {HTMLElement} The header element
   */
  create() {
    const headerContainer = document.createElement('div');
    headerContainer.className = `${this.config.cssClass}`;
    headerContainer.id = this.config.containerId;

    const headerNav = document.createElement('div');
    headerNav.className = `${this.config.cssClass}-nav`;

    // Left navigation link
    const leftLink = document.createElement('a');
    leftLink.href = this.config.leftLink.href;
    leftLink.className = 'header-nav-link';
    leftLink.textContent = this.config.leftLink.text;

    // Title
    const title = document.createElement('h1');
    title.textContent = this.config.title;

    // Right navigation link  
    const rightLink = document.createElement('a');
    rightLink.href = this.config.rightLink.href;
    rightLink.className = 'header-nav-link';
    rightLink.textContent = this.config.rightLink.text;

    // Append elements
    headerNav.appendChild(leftLink);
    headerNav.appendChild(title);
    headerNav.appendChild(rightLink);
    headerContainer.appendChild(headerNav);

    return headerContainer;
  }

  /**
   * Renders the header into a target container
   * @param {string|HTMLElement} target - Target container selector or element
   */
  render(target) {
    const targetElement = typeof target === 'string' 
      ? document.querySelector(target) 
      : target;
    
    if (!targetElement) {
      console.error('Header component: Target element not found');
      return;
    }

    const header = this.create();
    targetElement.appendChild(header);
  }

  /**
   * Renders the header and replaces content in target container
   * @param {string|HTMLElement} target - Target container selector or element
   */
  renderReplace(target) {
    const targetElement = typeof target === 'string' 
      ? document.querySelector(target) 
      : target;
    
    if (!targetElement) {
      console.error('Header component: Target element not found');
      return;
    }

    const header = this.create();
    targetElement.innerHTML = '';
    targetElement.appendChild(header);
  }
}

/**
 * Utility function to create and render header with configuration
 * @param {Object} config - Header configuration
 * @param {string|HTMLElement} target - Target container
 */
function createHeader(config, target) {
  const header = new HeaderComponent(config);
  header.render(target);
}

/**
 * Utility function for common header types
 */
const HeaderPresets = {
  projects: {
    cssClass: 'projects-header',
    title: 'MY PROJECTS',
    leftLink: { href: '../index.html', text: '← HOME' },
    rightLink: { href: 'contact.html', text: 'CONTACT →' }
  },
  
  resume: {
    cssClass: 'resume-header', 
    title: 'MY RESUME',
    leftLink: { href: '../index.html', text: '← HOME' },
    rightLink: { href: 'projects.html', text: 'PROJECTS →' }
  },
  
  contact: {
    cssClass: 'contact-header',
    title: 'CONTACT ME', 
    leftLink: { href: '../index.html', text: '← HOME' },
    rightLink: { href: 'resume.html', text: 'RESUME →' }
  },
  
  certifications: {
    cssClass: 'certificates-header',
    title: 'MY CERTIFICATIONS',
    leftLink: { href: '../index.html', text: '← HOME' },
    rightLink: { href: 'contact.html', text: 'CONTACT →' }
  },

  projectDetail: {
    cssClass: 'project-detail-header',
    title: 'PROJECT DETAIL', // This will be customized per project
    leftLink: { href: 'projects.html', text: '← ALL PROJECTS' },
    rightLink: { href: 'contact.html', text: 'CONTACT →' }
  }
};

// Export for module usage (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HeaderComponent, createHeader, HeaderPresets };
}