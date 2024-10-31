import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Research() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <div className="page-container">
        <section>
            <h1>Our Research</h1>
            <p> We are leaders in Research through our partnerships with top research
            institutions like FHNW in Aargau to develop our
            patented technology. We are committed to research that enhances the
            safety, independence, and well-being of older adults.
            We believe in our product and believe it is the future of home
            monitoring with camera-based solutions</p>
            <button
            className="cta"
            onClick={() => navigate("/Partnerships")}
          >
            Become a Partner
          </button>
        </section>
      
        <div className="divider"></div>

        <section className="grid">
          <div>
            <h2>Research Focus</h2>
          </div>
          <div>
            <p>
              In our research we focused on exploring significant advantages of
              camera-based solutions which are becoming the preferred choice over
              wearables and ambient sensors for detailed, cost-effective, and
              non-invasive monitoring over traditional wearables and ambient
              sensors.
            </p>
          </div>
        </section>

        <div className="divider"></div>


        <section className="grid">
          <div>
            <h2>Why <br /> Camera-Based Solutions?</h2>
          </div>
          <div>
          <div className="icon-list">
              <ul>
                <li>
                  <div>
                    <h5>Enhanced Detail and Insight</h5>
                    <p>Camera-based systems provide unparalleled insights into
                environments and user activities. Unlike wearables, which are
                limited by their need for physical contact, cameras capture a
                comprehensive view of both the surroundings and the actions taking
                place within them.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Cost-Effectiveness</h5>
                    <p>Modern high-quality cameras are not only affordable but also
                capable of replacing multiple sensors, significantly reducing the
                overall cost of monitoring systems. This makes camera-based
                solutions an economically viable option for various applications,
                including smart homes and healthcare.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Medication Reminders</h5>
                    <p>Timely reminders help seniors adhere to their medication schedules.</p>
                  </div>
                </li>
                <li >
                  <div >
                    <h5>Non-Invasive Monitoring</h5>
                    <p>One of the standout benefits of camera-based solutions is their
                non-invasive nature. Wearable sensors can be obtrusive, causing
                discomfort due to their weight and skin contact, and can be
                burdensome during daily activities. Cameras, on the other hand, do
                not require any physical contact, making them a more comfortable
                and user-friendly option for continuous monitoring.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="divider"></div>

        <section className="grid">
          <div>
            <h2>Superior Information Capture</h2>
          </div>
          <div>
            <p>
            Camera-based solutions excel in capturing detailed information
              compared to typical smart home sensors. They can accurately detect
              both emergencies and everyday activities, such as resting,
              exercising, and cooking. This comprehensive monitoring capability
              enhances the quality of care and safety for users.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="grid">
          <div>
            <h2>Addressing Common Issues with Wearables</h2>
          </div>
          <div>
            <p>
            One of the standout benefits of camera-based solutions is their
              non-invasive nature. Wearable sensors can be obtrusive, causing
              discomfort due to their weight and skin contact, and can be
              burdensome during daily activities. (Vernon, 2020.) Cameras, on the
              other hand, do not require any physical contact, making them a more
              comfortable and user-friendly option for continuous monitoring.
            </p>
          </div>
        </section>

     

        <div className="divider"></div>

        <section className="grid">
          <div>
            <h2>Versatility and Adaptability</h2>
          </div>
          <div>
            <p>
            Camera-based systems, paired with contemporary activity recognition
              algorithms, are incredibly versatile. They can accurately detect and
              analyze a wide range of activities, from everyday tasks like cooking
              and exercising to emergency situations. This adaptability makes them
              ideal for providing care and ensuring safety at home.
            </p>
          </div>
        </section>

        
      </div>
      <Footer />
    </div>
  );
}

export default Research;