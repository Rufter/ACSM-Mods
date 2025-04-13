/**
 * =====================================================================
 * IMPORTANT: Please adjust the Discord Widget Link to your own!
 * Replace the value in the iframe 'src' attribute below with your Discord widget link.
 * =====================================================================
 */

/**
 * This function dynamically injects CSS into the document head.
 * The CSS here ensures that the navigation bar is styled and animated correctly.
 */
function injectCSS() {
  // Define the CSS styles using a template literal for multiline support.
  const css = `
    /* Style the navbar with an initial animation */
    .navbar {
      animation: navbarReady 1ms;
    }
    
    /* Animation to instantly display the navbar */
    @keyframes navbarReady {  
      from { opacity: 1; }
      to { opacity: 1; }
    }
    
    /* Container styles for centering and responsive layout */
    .navbar-container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }
    
    /* Flexbox settings for the navbar */
    .navbar-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    
    /* For larger screens: prevent flex items from wrapping */
    @media screen and (min-width: 992px) {
      .navbar-container {
        flex-wrap: nowrap;
      }
    }
    
    /* Animation for the container holding the navbar */
    @keyframes containerReady {  
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Dropdown menu styles: Align dropdown menu to the right */
    .dropdown-menu {
      left: auto;
      right: 0;
    }
  `;
  
  // Create a new <style> element
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  
  // Append the CSS text to the <style> element
  styleElement.appendChild(document.createTextNode(css));
  
  // Add the <style> element to the document's head
  document.head.appendChild(styleElement);
}

/**
 * This function adds a dropdown menu to the navigation.
 * The dropdown contains a link with an image and an iframe with the Discord widget.
 */
function addDropdownMenu() {
  // Define the HTML content of the dropdown menu
  const dropdownContent = `
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navBarSocialsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://cdn.jsdelivr.net/gh/Rufter/fadx-racing@main/discord.svg" alt="Discord Icon">
      </a>
      <div class="dropdown-menu" aria-labelledby="navBarSocialsDropdown">
        <!-- IMPORTANT: Adjust the Discord Widget Link here -->
        <iframe src="https://discord.com/widget?id=763485744819732530&theme=dark" width="350" height="600" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </li>
  `;
  
  // Create a new list element for the dropdown container
  const dropdownContainer = document.createElement('li');
  dropdownContainer.className = 'nav-item dropdown';
  dropdownContainer.innerHTML = dropdownContent;
  
  // Find the element with the ID 'user-account-dropdown'
  const userAccountDropdown = document.getElementById('user-account-dropdown');
  if (userAccountDropdown) {
    // Insert the dropdownContainer before the user account dropdown element
    userAccountDropdown.before(dropdownContainer);
  } else {
    // Log a warning if the element cannot be found in the document
    console.warn('Element with the ID "user-account-dropdown" was not found.');
  }
}

/**
 * This function makes the navbar responsive by assigning the class 'navbar-container'
 * to the first child element of the given element.
 *
 * @param {HTMLElement} element - The element whose first child is to be styled.
 */
function makeNavbarResponsive(element) {
  // Ensure the element has at least one child element
  if (element.children.length > 0) {
    // Set the class for the first child to apply the relevant CSS rules.
    element.children[0].className = 'navbar-container';
  }
}

/**
 * Event handler for the start of an animation.
 * When the "navbarReady" animation starts, it adjusts the navbar and adds the dropdown menu.
 *
 * @param {AnimationEvent} e - The animation event.
 */
function handleAnimationStart(e) {
  // Check if the animation that started is 'navbarReady'
  if (e.animationName === 'navbarReady') {
    // Apply responsive adjustments to the navbar
    makeNavbarResponsive(e.target);
    // Add the dropdown menu to the navbar
    addDropdownMenu();
  }
}

// Add a global event listener for the 'animationstart' event
document.addEventListener("animationstart", handleAnimationStart, false);

// Once the DOM is fully loaded, inject the CSS into the document
document.addEventListener("DOMContentLoaded", function() {
  injectCSS();
});
