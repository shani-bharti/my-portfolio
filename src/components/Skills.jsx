import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="my-5 p-4 bg-glass rounded shadow-lg">
      <h2 className="text-glow mb-4">Skills 🛠️</h2>
      
      {/* Skill Cards */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white border-0 shadow-lg">
            <div className="card-body text-center">
              <i className="fab fa-react fa-3x mb-3"></i>
              <h5 className="card-title">React</h5>
              <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white border-0 shadow-lg">
            <div className="card-body text-center">
              <i className="fab fa-js-square fa-3x mb-3"></i>
              <h5 className="card-title">JavaScript</h5>
              <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white border-0 shadow-lg">
            <div className="card-body text-center">
              <i className="fab fa-bootstrap fa-3x mb-3"></i>
              <h5 className="card-title">Bootstrap</h5>
              <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Add more skills as needed */}
      </div>
    </section>
  );
};

export default Skills;
