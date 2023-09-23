
import './home.scss'
import React from 'react';
// import Login from '../pagLogin/login/login';
import LoginButton from '../pagLogin/button/button';

  const Header: React.FC = () => {
    const handleLoginClick = () => {
      window.location.href = '/login' ;
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
        {/* <Login /> */}
        {/* <LoginButton/> */}
        <LoginButton onClick={handleLoginClick} />
      </div>
    </header>
  );
};

export default Header;
