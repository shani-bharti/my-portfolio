import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="my-5 p-4 bg-glass rounded shadow-lg">
      <h2 className="text-glow mb-4">My Projects 🚀</h2>
      
      {/* Project Cards */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white border-0 shadow-lg project-card">
            {/* <img
              src="https://via.placeholder.com/350x200.png?text=Project+1"
              className="card-img-top"
              alt="Project 1"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">
                A brief description of Project 1. A sleek React To-Do app to organize your tasks with ease. Built with modern UI and seamless functionality. Perfect for boosting productivity in style! 🚀.
              </p>
              <a href="https://shani-to-do.netlify.app" className="btn btn-info">View Demo</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white border-0 shadow-lg project-card">
            {/* <img
              src="https://via.placeholder.com/350x200.png?text=Project+2"
              className="card-img-top"
              alt="Project 2"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">
              A fiery React Expense Tracker that keeps your finances in check with swagger! Packed with vibrant visuals and smooth functionality, it’s your ultimate money-managing sidekick. 💸🔥
              </p>
              <a href="https://shani-expense.netlify.app" className="btn btn-info">View Demo</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white border-0 shadow-lg project-card">
            {/* <img
              src="https://via.placeholder.com/350x200.png?text=Project+1"
              className="card-img-top"
              alt="Project 1"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">
                Allready on that - A dazzling React Portfolio project that showcases your skills with electrifying flair! Crafted with sleek design and dynamic vibes, it’s your digital stage to shine. 🌟💼.
              </p>
              <a href="#" className="btn btn-info">View Demo</a>
            </div>
          </div>
        </div>
        

        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
