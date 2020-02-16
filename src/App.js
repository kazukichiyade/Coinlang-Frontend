import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Home from '../src/component/PageHome';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/">HOME</Link>
        </div>
        <Route exact path="/" render={() => <Home />} />
      </div>
    </BrowserRouter>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Index from '../src/component';

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" component={Index} />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   return (
//     <body>
//       <header>
//         <div class="layout-header">
//           <a class="main-logo" href="/">
//             Coinlang
//           </a>
//           <a class="signup-button" href="/signup">
//             <p class="signup">SIGNUP</p>
//           </a>
//           <a class="login-button" href="/login">
//             <p class="login">LOGIN</p>
//           </a>
//         </div>
//       </header>
//     </body>
//   );
// };

// export default App;
