import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Developer</h4>
                <h5>Self Learning</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started with core web development, learning HTML, CSS, and JavaScript. Focused on logic building, responsive design, and interactive web elements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked with React, GSAP, and Three.js to create modern, animated UIs. Built creative projects showcasing strong frontend skills and design sense.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Freelance & Learning</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Practicing advanced frontend techniques, contributing to open-source projects, and exploring full-stack development to build polished, real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
