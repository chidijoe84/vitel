
import './App.css';
import Company from './Company/Company';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Management from './Management/Management';
import Partners from './Partners/Partners';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Company/>
      <Partners/>
      <Management/>
    </div>
  );
}

export default App;
