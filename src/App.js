
import './App.css';
import Company from './Company/Company';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Slider from './Hero/slider/Slider';
import Management from './Management/Management';
import Partners from './Partners/Partners';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {/* <Slider /> */}
      <Company/>
      
      <Partners/>
      <Management/>
      <Footer/>
    </div>
  );
}

export default App;
