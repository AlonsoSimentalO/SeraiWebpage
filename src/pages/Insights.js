import React from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';

function Insights() {
  return (
    <div>
      <Header />

      <div className="page-container">

        <div className="divider"></div>

        <section className="grid grid-theme--light">
            <div>
              <h2>Our Scalable Solution</h2>
            </div>
            <div>
              <p>
              We leverage advanced machine learning and IoT technology to provide real-time monitoring, fall detection, and emergency notifications.
              </p>
              <p>
              <br />We offer an accessible, affordable, and home-integrated no-touch solution designed to improve the quality of life for the elderly.
              </p>
              <p>
              <br />By automating routine tasks and enhancing caregiver efficiency, Serai's approach reduces healthcare costs and improves the quality of life for the elderly.
              </p>
            </div>
          </section>
          <div className="divider"></div>

          <section className="grid grid-theme--light">
            <div>
              <h2>The Impact of Falls</h2>
            </div>
            <div>
              <p>
              Falls are a leading cause of injury and death among seniors, resulting in approximately 684,000 fatalities each year.
              </p>
            </div>
          </section>

            <div className="divider"></div>
            <section className="grid grid-theme--light">
            <div>
              <h2>Privacy among Elderly Care</h2>
            </div>
            <div>
              <p>
              At Serai, we prioritize privacy, ensuring our solutions are both effective and trusted by users.
              </p>
            </div>
          </section>

       
            <div className="divider"></div>

        <section className="grid grid-theme--light">
          <div>
            <h2>Our Milestones and&nbsp;Achievements</h2>
          </div>
          <div>
          <div className="icon-list">
              <ul>
                <li>
                  <div>
                    <p>We have raised CHF 1.1 million in private investment.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Secured Innosuisse funding through a research partnership with FHNW.</p>
                  </div>
                </li>
            
                <li >
                  <div >
                    <p>Developed a fall detection and behavioral anomaly solution for the senior care market.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default Insights;