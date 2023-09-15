import Nav from './components/nav/nav';
import Header from './components/home/home';
import Sobre from './components/sobre/sobre';
import Corte from './components/section2/motion';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/section4';

const App = () => {
    return (
      <main>
        <nav className="nav">
          <Nav/>
        </nav>
        
        <header>
          <Header/>
        </header>

        <section id="container-section1">
        <Sobre />          
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
