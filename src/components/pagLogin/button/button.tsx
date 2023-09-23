// LoginButton.tsx
import React from 'react';


const LoginButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {

  const handleLoginClick = () => {
    window.open('http://login', '_blank', 'noopener noreferrer');
  };
  
  return (
    // <button onClick={onClick}>Login</button>
    <button onClick={handleLoginClick}>Login</button>
  );
};

export default LoginButton;
