import React from 'react';

const Home = () => {
  return (
    <body>
      <div>Hello</div>
      <header>
        <div class="layout-header">
          <a class="main-logo" href="/">
            Coinlang
          </a>
          <a class="signup-button" href="/signup">
            <p class="signup">SIGNUP</p>
          </a>
          <a class="login-button" href="/login">
            <p class="login">LOGIN</p>
          </a>
        </div>
      </header>
    </body>
  );
};

export default Home;
