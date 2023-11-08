class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .app-bar {
            padding: 8px 16px;
            background-color: white;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 10px;
            position: sticky;
            top: 0;
            z-index: 99;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          }
          
          .app-bar .app-bar__menu {
            min-width: 44px;
            min-height: 44px;
            display: flex;
            align-items: center;
          }
          
          .app-bar .app-bar__menu button {
            min-width: 44px;
            min-height: 44px;
            background-color: transparent;
            border: none;
            font-size: 18px;
            padding: 8px;
            cursor: pointer;
          }
          
          .app-bar .app-bar__brand {
            display: flex;
            align-items: center;
            font-size: 17px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          
          .logo-trendz {
            color: var(--main-color);
          }
          
          .logo-resto {
            background-color: var(--main-color);
            color: #fff;
            padding: 5px 10px;
            margin-left: 5px;
            border-radius: 5px;
          }
          
          .app-bar .app-bar__navigation {
            position: absolute;
            top: 50px;
            left: -180px;
            width: 150px;
            transition: all 0.3s;
            padding: 8px;
            background-color: white;
            overflow: hidden;
          }
          
          .app-bar .app-bar__navigation.open {
            left: 0;
          }
          
          .app-bar .app-bar__navigation ul li a {
            min-width: 44px;
            min-height: 44px;
            display: inline-block;
            text-decoration: none;
            color: black;
            padding: 8px;
            margin-bottom: 5px;
            width: 100%;
          }
          @media screen and (min-width: 650px) {
            .app-bar {
              grid-template-columns: 1fr auto;
              padding: 8px 32px;
            }
           
            .app-bar .app-bar__brand h1 {
              font-size: 1.5em;
            }
           
            .app-bar .app-bar__menu {
              min-width: 44px;
              min-height: 44px;
              display: none;
            }
           
            .app-bar .app-bar__navigation {
              position: static;
              width: 100%;
            }
           
            .app-bar .app-bar__navigation ul li {
              display: inline-block;
            }
           
            .app-bar .app-bar__navigation ul li a {
              display: inline-block;
              min-width: 44px;
              min-height: 44px;
              width: 120px;
              text-align: center;
              margin: 0;
            }
        </style>
        <header class="app-bar">
          <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
          </div>
          <div class="app-bar__brand">
            <span class="logo-trendz">Trendz</span> <span class="logo-resto">Resto</span>
          </div>
          <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/favorites">Favorites</a></li>
              <li><a href="#/about">About Us</a></li>
            </ul>
          </nav>
        </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
