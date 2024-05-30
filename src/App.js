

import About from './components/About';
import Education from './components/Education';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden '>
     <Navbar/>
     <Header/> 
     <MainPage/>
     <About/>
     <Education/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
