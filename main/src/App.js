import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zoro | Home Page</title>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header>
          <img src="/images/logo.png" width="50" height="50" className="logo" alt="Logo" />
          <span className='span1'>ZORO'S PET STORE</span>
          <ul className="navbar">
            <li>
              <a href="#" className="on">
                Home
              </a>
            </li>
            <li>
              <a href="/pages/about.html">About</a>
            </li>
            <li>
              <a href="/pages/blog.html">Blog</a>
            </li>
            <li>
              <a href="/pages/services.html">Services</a>
            </li>
            </ul>
            {/* <div className="bx bx-menu" id="menu-icon"></div> */}
        </header>

        <div className="text">
          <h1>Pet Store & Beyond</h1>
          <p id="desc">For all your furry family members</p>
          <a href="#" className="btn1">
            Get Started
          </a>
        </div>

        <div className="dog">
          <img src="images/ft.jpg" width="300" height="auto" alt="Dog" />
        </div>

        <div className="vid">
          <video src="doggo.mp4" controls autoPlay muted loop width="500"></video>
        </div>

        <footer>
          <p>&copy; 2023 Zoro's Pet Store</p>
        </footer>
      </body>
    </div>
  );
}

export default App;
