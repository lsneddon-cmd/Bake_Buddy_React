import React from "react";
import GetStarted from '../GetStarted/GetStarted';

const App = () => {
  return (
    <div class="App">
      <div class="header">
        <h1>Bake</h1>
        <h1>Buddy</h1>
      </div>
      <div class="main-window">
        <GetStarted />
      </div>
      <div class="footer">
        <p>
          Bake Buddy 2020 by <a href="http://lewiscodes.io">Lewis Sneddon</a>
        </p>
      </div>
    </div>
  );
};

export default App;
