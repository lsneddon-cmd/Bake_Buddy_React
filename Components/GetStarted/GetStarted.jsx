import React from 'react';

const GetStarted = () => {
  return (
    <div id="first-window" class="active-window">
        <div class="window-container">
          <p class="subheading">Welcome to Bake Buddy!</p>
         <p>Let's get started converting baking ingredients to measurements in the metric  system!</p>
         <p>What type of ingredient do you have to convert?</p>
          <div class="button-container">
            <button id="flour-button">Flour</button>
             <button id="sugar-button"
             >Sugar</button>
            <button id="butter-button"
            >Butter</button>
            <button id="cocoa-button"
            >Cocoa</button>
            <button id="liquid-button"
            >Liquid</button>
          </div>
        </div>
      </div>
  );
}

export default GetStarted;