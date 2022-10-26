
import './App.css';
import Company from './Company/Company';
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
      <Company limit={200}>
      Virtel Wireless focus on vertical market solutions for IoT and VAS in Africa, for industries and markets that can benefit on using location-based data to improve on business performances. Our M2M e-SIM and physical SIM has revolutionized innovation in Africa’s mobile industry as well as enable creation of hundreds of thousands of jobs.  
          Since its incorporation, VITEL WIRELESS LIMITED has been active in provision of telecommunication services, software development, sales and installation of computers and accessories inclusive of wireless communications accessories. Vitel Wireless is part of a group of companies namely Ontrac technologies Limited, Gistme Communications Limited that are within the portfolio of business advisory company of E-Kenneth Nigeria Limited (which is a major investor in all 3 companies).  Vitel has become a renowned company in the industry for our expertise and has contributed to several standards and innovations in data gathering and analysis in the African continent. Vitel has a Private Network Lines (Local Exchange Operator) service license and has had experience in the telecommunication business. Our vision is to leverage the dominance of large telecom operators in delivering cost-efficient services and establish interoperability with these operators for new, fast-growing services to the consumer.
      </Company>
      {/* <Slider /> */}
      <Partners/>
      <Management/>
    </div>
  );
}

export default App;
