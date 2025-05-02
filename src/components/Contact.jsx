import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! We'll get back to you soon.");
    // Add your form submission logic here (e.g., sending data to an API or email)
  };

  return (
    <section id="contact" className="my-5 p-4 bg-glass rounded shadow-lg">
      <h2 className="text-glow mb-4">Contact Me 📬</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label text-white">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-info">Submit</button>
      </form>

      {/* Social Media Links */}
      <div className="mt-4 text-center">
        <h5 className="text-white">Follow Me</h5>
        <div>
          <a href="https://github.com/shani-bharti" className="text-white mx-3">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-white mx-3">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/shani_bharti.in" className="text-white mx-3">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
