
import React from 'react';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button className='btn' onClick={onClick}>Agendar</button>
  );
};

export default LoginButton;
