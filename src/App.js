// Assuming you're importing Home in another file, e.g., App.js
import React from 'react';
import Home from './Components/Home'; // Make sure the path is correct
import './/Css/App.css';
import './/Css/Email.css';
import './/Css/Footer.css';
import './/Css/Nav.css';
// import './/Css/Scroll.css';
import './/Css/Second_Page.css';
import './/Css/Text.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

