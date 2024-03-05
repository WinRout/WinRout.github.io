import React, { useEffect} from 'react';
import NavigationBar from './components/NavigationBar.js'; // Import the Navbar component

import './App.css'; // Import the stylesheet
import About from './components/About.js';

const sections = [
  { id: 'about', title: 'about' },
  { id: 'projects', title: 'projects' },
  { id: 'experience', title: 'experience' },
  { id: 'spotify_special', title: 'spotify_special' },
];

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'black'; // Example background color
    document.body.style.margin = '0'; // Example margin setting
  }, []); // Empty dependency array ensures one-time execution

  return (
    <div className="App">
      <NavigationBar sections={sections}/> {/* Render the Navbar component */}
      <section id="about">{/* Section content for About */}
        <About></About>
      </section>
      <section id="projects">{/* Section content for Projects */}
        {/* Projects content */}
      </section>
      {/* ... other sections ... */}
    </div>
  );
}

export default App;
