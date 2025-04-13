function addDropdownMenu() {
  // Prüfen, ob das Style-Element bereits existiert:
  if (!document.getElementById('navbar-styles')) {
    const style = document.createElement('style');
    style.id = 'navbar-styles';
    style.innerHTML = `
      .navbar {
          animation: navbarReady 1ms;
      }
      @keyframes navbarReady {  
          from { opacity: 1; }
          to { opacity: 1; }
      }
      .navbar-container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Den HTML-Inhalt für das Dropdown-Menü erstellen, ohne das <style>-Tag:
  const dropdownContent = `
    <a class="nav-link dropdown-toggle" href="#" id="navBarSocialsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src="https://cdn.jsdelivr.net/gh/Rufter/fadx-racing@main/discord.svg" alt="">
    </a>
    <div class="dropdown-menu" aria-labelledby="navBarSocialsDropdown">
      <a class="dropdown-item discord" href="https://discord.gg/aYgzAxj3Hv" target="_blank">Join our Discord</a>
      <iframe src="https://discord.com/widget?id=763485744819732530&theme=dark" width="390" height="800" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
  `;
  
  const dropdownContainer = document.createElement('li');
  dropdownContainer.className = 'nav-item dropdown';
  dropdownContainer.innerHTML = dropdownContent;

  const userAccountDropdown = document.getElementById('user-account-dropdown');
  if (userAccountDropdown) {
    userAccountDropdown.before(dropdownContainer);
  } else {
    console.error("Element mit der ID 'user-account-dropdown' nicht gefunden.");
  }
}
