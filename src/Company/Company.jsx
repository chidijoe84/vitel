import React, { useState, useEffect } from "react";
import IoT from "../assets/IoT.jpg";
import think2 from "../assets/think2.jpg";
import hero from "../assets/back2.png";
import magic from "../assets/Magic.png";
import colab2 from "../assets/colab2.jpg";
import analyse from "../assets/analyse.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Company.css";
const Company = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleBtn = () => {
    setIsReadMore((prevState) => !prevState);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#0099ff"  d="M0,224L48,208C96,192,192,160,288,176C384,192,480,256,576,288C672,320,768,320,864,288C960,256,1056,192,1152,170.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}

      <div className="company">
        <div className="section" id="company">
          <div className="com" data-aos="fade-up" />
          <h1 className="text-head">
            our <span>Company</span> <hr />
          </h1>
          <div className="company-text" data-aos="fade-right">
              {/* <p>{isReadMore ? children : children.substr(0, 400)}</p>

               <button onClick={toggleBtn} className='btn'>{isReadMore ? "Read less" : "...Read       more" }</button> */}

            <img src={IoT} alt="company" />

            <p>
              Vitel Wireless focus on vertical market solutions for IoT and VAS
              in Africa, for industries and markets that can benefit on using
              location-based data to improve on business performances. Our M2M
              e-SIM and physical SIM has revolutionized innovation in Africa’s
              mobile industry as well as enable creation of hundreds of
              thousands of jobs.
            </p>
          </div>

          <div className=" company-text2" data-aos="fade-left">
            <p>
              Since its incorporation, VITEL WIRELESS LIMITED has been active in
              provision of telecommunication services, software development,
              sales and installation of computers and accessories inclusive of
              wireless communications accessories. Vitel Wireless is part of a
              group of companies namely Ontrac technologies Limited, Gistme
              Communications Limited that are within the portfolio of business
              advisory company of E-Kenneth Nigeria Limited (which is a major
              investor in all 3 companies).
            </p>

            <img src={IoT} alt="company" />
          </div>

          <div className="company-text" data-aos="zoom-in">
            <img src={IoT} alt="company" />
            <p>
              Vitel Wireless Limited has become a renowned company in the
              industry for our expertise and has contributed to several
              standards and innovations in data gathering and analysis in the
              African continent. Vitel has a Private Network Lines (Local
              Exchange Operator) service license and has had experience in the
              telecommunication business. Our vision is to leverage the
              dominance of large telecom operators in delivering cost-efficient
              services and establish interoperability with these operators for
              new, fast-growing services to the consumer.
            </p>
          </div>
          <svg
            className="svm"
            viewBox="0 0 190 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="whitesmoke"
              d="M21.7,-36.5C27.7,-20.9,31.6,-13.6,39.2,-2.2C46.8,9.2,58.2,24.7,54,30.6C49.9,36.5,30.3,32.8,16.3,32.5C2.4,32.2,-5.8,35.3,-19.2,37.2C-32.7,39,-51.4,39.8,-58.3,31.7C-65.2,23.7,-60.4,7,-56.8,-9.5C-53.3,-25.9,-51,-42,-41.7,-56.9C-32.5,-71.9,-16.2,-85.7,-4.2,-80.8C7.9,-75.8,15.8,-52,21.7,-36.5Z"
              transform="translate(100 100)"
            />
          </svg>
          <div>
            <h1 className="prod">
              OUR <span>PRODUCT</span> <hr />
            </h1>
          </div>
          <div className="section2">
            <div className="section3" data-aos="flip-right">
              <img src={magic} alt="" />
              <div>
                <h3>Thinking Big and Thinking Outside the Box </h3>
                <p>
                  When it comes to how you connect and how you should
                  communicate, Vitel is the only company to give you a solution
                  that bundles data, airtime, and devices into one package. Your
                  phone number is works anywhere there is network of MTN,
                  Airtel, Glo, 9Mobile, MAFAB (5G Network), and Ntel (4G
                  Network).{" "}
                </p>
              </div>
            </div>

            <div className="section3 " data-aos="flip-right">
              <img src={analyse} alt="" />
              <div>
                <h3>More Options and Less Money</h3>
                <p>
                  Our radical approach to IoT and VAS integrated solution means
                  that everything we offer, from cloud-based telephone solution,
                  Conference Bridging, Employee performance measurement, to
                  Smart home & Smart city solution are delivered securely and at
                  least cost possible.
                </p>
              </div>
            </div>

            <div className="section3" data-aos="flip-right">
              <img src={colab2} alt="" />
              <div>
                <h3>Remote Workforce are now part of mainstream business </h3>
                <p>
                  Being apart and working remotely doesn’t mean collaboration
                  and communication will reduce, with Cloud solutions from
                  Vitel, communications is as simply as Push-to-Talk mobile and
                  desktop devices
                </p>
              </div>
            </div>

            <div className="bolb" data-aos="slide-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
