import './home.scss'

const Header: React.FC = () => {
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

      <button className="btn" >
        agenda
      </button>
    </header>
  );
};

export default Header;
