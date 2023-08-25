import './App.scss' 
import './components/nav/nav.scss'
import Nav from './components/nav/nav';
import Section1 from './components/section1/Section1';
import Corte from './components/section2/motion.';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/section4';

const App = () => {
    return (
      <main>
        <nav className="nav">
          <Nav/>
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
          <Corte/>
        </section>          
      
        <section id='container-section3'>
          <Section3/>
        </section>

        <section id='container-section4'>
          <Section4/>
        </section>

      </main>
    )
}

export default App;
