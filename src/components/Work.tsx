import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>SHARKIE</h4>
                  <p>3D Web Game</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, JavaScript, Custom Assets, Responsive Design</p>
            </div>
            <a href="https://sharkie-parth-thukral.vercel.app/" target="_blank">
              <WorkImage image="/images/sharkie.png" alt="" />
            </a>

          </div>


          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>3D Gaming Webpage</h4>
                  <p>Interactive 3D Webpage</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, Javascript</p>
            </div>

            <video
              className="work-img"
              src="/videos/gaming-webpage.mp4"
              autoPlay
              muted
              loop
              playsInline
              onClick={() => window.open("https://parth-thukral-3d-gaming-webpage.vercel.app/", "_blank")}
              style={{ cursor: "pointer" }}
            />
          </div>



          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Periodic Table Game</h4>
                  <p>Drag & Drop Web Game</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, JavaScript, Confetti.js</p>
            </div>
            <a href="https://parth-thukral-periodic-table.vercel.app/" target="_blank">
            <WorkImage image="/images/periodic-table.png" alt="" />
            </a>
          </div>

          {/* Block 04 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Guess The Code</h4>
                  <p>Code Breaking Web Game</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, Javascript</p>
            </div>
            <a href="https://guess-the-code-developer-parths-projects.vercel.app/" target="_blank">
            <WorkImage image="/images/guess-the-code.png" alt="" />
            </a>
          </div>

          {/* Block 05 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>PROJECT OF THE DAY</h4>
                  <p>PERSONAL PORTFOLIO</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>CSS, JSON, Javascript, TypeScript, React, Threejs, Spline</p>
            </div>
            <a href="#">
            <WorkImage image="/images/portfolio.png" alt="" />
            </a>
          </div>

          {/* Block 06 */}
          <a href="https://structure-of-atom-theta.vercel.app/" target="_blank">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>Structure of Carbon Atom</h4>
                  <p>Educational Interactive Webpafe</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, Javascript, Matter</p>
            </div>
            <WorkImage image="/images/carbon-atom.png" alt="" />
          </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Work;