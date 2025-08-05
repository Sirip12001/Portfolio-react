import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Header Navbar */}
      <nav className="navbar">
        <div className="navbar-title">Paidi Sirisha</div>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Hi, I'm Sirisha!</h1>
        <p>
          Aspiring Web Developer | AI Enthusiast | Problem Solver
        </p>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m passionate about building smart, easy-to-use web applications and automating workflows. I enjoy solving problems, exploring creative UI designs, and learning new technologies. Graduated in Information Technology (CGPA: 8.27), currently working with AI workflow automation and prompt engineering.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React JS</li>
          <li>Python, Java</li>
          <li>SQL</li>
          <li>GitHub &amp; Version Control</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>AI Interview Performance Analysis</h3>
          <p>
            Developed an AI-based tool to analyze and predict interview performance using audio features and NLP. Helped recruiters assess candidates' emotional and psychological profiles.
          </p>
        </div>
        <div className="project-card">
          <h3>Symmetric Algorithms Comparison</h3>
          <p>
            Compared AES and DES encryption algorithms to assess speed, complexity, and security for data transmission.
          </p>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certifications" className="certifications">
        <h2>Certifications &amp; Achievements</h2>
        <ul>
          <li>Smart India Hackathon 2022 Qualified</li>
          <li>Introduction to Prompt Engineering for Generative AI</li>
          <li>AWS Cloud Foundations, AWS Academy</li>
          <li>Robo Race - 2019, GMRIT</li>
          <li>Paper Presentations &amp; 5G Technology Workshop</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>
          Email: <a href="mailto:sirishapaidi02@gmail.com">sirishapaidi02@gmail.com</a><br />
          LinkedIn: <a href="https://www.linkedin.com/in/paidi-sirisha/" target="_blank" rel="noopener noreferrer">Paidi Sirisha</a>
        </p>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required /><br/>
          <input type="email" placeholder="Your Email" required /><br/>
          <textarea placeholder="Your Message" required></textarea><br/>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2025 Paidi Sirisha. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
