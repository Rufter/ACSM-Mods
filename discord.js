document.addEventListener("animationstart", handleAnimationStart, false);

function handleAnimationStart(e) {
  if (e.animationName === 'navbarReady') {
    makeNavbarResponsive(e.target);
    addDropdownMenu();
  }
}

function makeNavbarResponsive(element) {
  element.children[0].className = 'navbar-container';
}

function addDropdownMenu() {
  const dropdownContent = `
    <style>
    .navbar {
        animation: navbarReady 1ms;
        }

        @keyframes navbarReady {  
        from { opacity:1; }
        to { opacity:1; }
        }

        .navbar-container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        }

        .navbar-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        }
    </style>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navBarSocialsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://cdn.jsdelivr.net/gh/Rufter/fadx-racing@main/discord.svg" alt="">
      </a>
      <div class="dropdown-menu" aria-labelledby="navBarSocialsDropdown">
        <a class="dropdown-item discord" href="https://discord.gg/aYgzAxj3Hv" target="_blank">Join our Discord</a>
        <iframe src="https://discord.com/widget?id=763485744819732530&theme=dark" width="390" height="800" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </li>
  `;

  const dropdownContainer = document.createElement('li');
  dropdownContainer.className = 'nav-item dropdown';
  dropdownContainer.innerHTML = dropdownContent;

  const userAccountDropdown = document.getElementById('user-account-dropdown');
  userAccountDropdown.before(dropdownContainer);
}
