import './App.scss' 
import './styles/nav.scss'
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';

const App = () => {
    return (
      <main>
        <nav className="nav">
          <ul>
            <li><a href="#" className="current">Home</a></li>
            <li><a href="#container-section1">About</a></li>
            <li><a href="#container-section2">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

          <header className="container">
              <div className='imglogo'>
                <img
                  src="./barbershop.png"
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
          
            <button className="btn" id="openModalButton">
              Agenda
            </button>          
          </header>

          <section id="container-section1">
            <Section1 />          
          </section>

          <section id="container-section2">
            <Section2 />
          </section>          
        
          <section id='container-section3'>
            <Section3/>
          </section>

      </main>
    )
}

export default App;
