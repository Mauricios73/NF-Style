import Nav from './components/nav/nav';
import Header from './components/home/home';
import Sobre from './components/sobre/sobre';
import Corte from './components/cortes/motion';
import Section3 from './components/Loja/Section3';
import Section4 from './components/footer/section4';
import Login from './components/pagLogin/login/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
      <main>
        <nav className="nav">
          <Nav/>
        </nav>

        <header>
          <Router>
            <Routes>
              <Route path='/' element={<Header/>} />
              <Route path="/login" element={<Login/>} />;
            </Routes>
          </Router>
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