import React from 'react';
import '../styles/NavigationBar.css'; // Import the stylesheet

function NavigationBar({ sections }) { // Pass sections as props
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <div className='navigation-wrapper'>
      <nav className="navigation-bar"> {/* Optional class for styling */}
      <ul>
        {sections.map((section) => (
          <li key={section.id} onClick={() => handleClick(section.id)}>
              {section.title}
          </li>
        ))}
      </ul>
    </nav>
    </div>
    
  );
}

export default NavigationBar
