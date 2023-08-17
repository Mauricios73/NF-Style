import React, { useEffect, useState } from 'react';
import './App';

const App: React.FC = () => {
  const [isNavActive, setNavActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div>
      <nav className={`nav ${isNavActive ? 'active' : ''}`}>
        Navigation
      </nav>
      <div className="content">
        {/* Your page content here */}
        <p>
          Scroll down and beyond 200 pixels to activate the "active" class.
        </p>
      </div>
    </div>
  );
};

export default App;
