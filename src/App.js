 import './App.css';
import About from './components/About';
import Banner from './components/Banner';
 import Header from './components/Header';
 import Footer from './components/Footer';

function App() {
  return (
    <div className="app ">
      <Header/>
      <Banner/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
