import React from "react";

const About = () => {
  return (
    <section id="about" className="my-5 p-4 bg-glass rounded shadow-lg">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="../assets/ChatGPT.png"
            alt="shani"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "150px", border: "2px solid rgba(255,255,255,0.2)" }}
          />
        </div>
        <div className="col-md-8 text-white">
          <h2 className="text-glow mb-3">Hey, I'm Shani Bharti 👋</h2>
          <p>
            I'm a passionate BCA student who loves building modern, responsive web apps
            with React and Vite. I enjoy designing elegant UIs and creating immersive user experiences.
          </p>
          <p>
            💻 Currently learning JAVA, REACT , and sharpening my frontend skills daily.
            I'm creative, curious, and always ready to build something awesome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
