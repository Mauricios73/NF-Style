
import './home.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../pagLogin/button/button';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('login');
  };

  return (
    <header className="container">
      <div className='imglogo'>
        <img
          src="/barbershop.png"
          alt="barbershop"
          height={120}
          width={260}
        />
      </div>

      <div className='namelogo'>
        <h1>
          <i>NF Style</i>
        </h1>
        <p>Transformando homens comuns em verdadeiros cavalheiros!</p>
      </div>

      <div>
        <LoginButton onClick={handleLoginClick} />
      </div>

    </header>
  );
};

export default Header;
