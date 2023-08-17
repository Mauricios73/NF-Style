import './App.scss' 
import './styles/nav.scss'
// import '../src/styles/Section1.scss'
import Section1 from '../src/components/Section1';
import Section2 from '../src/components/Section2';
import ImageSlider from '../src/components/imageSlider';

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

          <div className="container">
            <header>
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
            </header>
          
            <button className="btn" id="openModalButton">
              Agenda
            </button>          
          </div>

          <section id="container-section1">
            <Section1 />          
          </section>

          <section id="container-section2">
            <Section2 />
          </section>          
            <ImageSlider />


        <script src="script.tsx"></script>
      </main>
    )
}

export default App;
