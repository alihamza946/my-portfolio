import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import React from "react";
import "./index.css";


export default function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <h1>Hi, I'm <span className="highlight">M. Ali Hamza</span></h1>
        <p>A passionate Web Developer crafting modern websites & apps 🚀</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a Computer Science graduate and full-stack web developer skilled in React, Node.js,
          Express, and PostgreSQL. I love building clean, fast, and user-friendly applications
          that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">

          <div className="project-card">
            <h3>🛒 E-Commerce Website</h3>
            <p>
              A full-stack online shopping platform with product listings,
              shopping cart, and checkout system.
            </p>
          </div>

          <div className="project-card">
            <h3>🌐 Portfolio Website</h3>
            <p>
              A personal portfolio to showcase projects and skills with a clean,
              responsive UI.
            </p>
          </div>

          <div className="project-card">
            <h3>📚 Library Management System</h3>
            <p>
              Built with Node.js, Express, PostgreSQL, and React. Includes admin
              and user features like book management, downloads, and profiles.
            </p>
          </div>

          <div className="project-card">
            <h3>🍲 Recipe Book</h3>
            <p>
              A recipe management app for browsing, adding, and categorizing
              recipes. Built using C#, .NET, SQL, and Tomcat.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:m.alihamza.cs@gmail.com">m.alihamza.cs@gmail.com</a></p>
        <p>LinkedIn: <a href="http://www.linkedin.com/in/aleehamzaa" target="_blank" rel="noopener noreferrer">linkedin.com/in/aleehamzaa</a></p>
        <p>GitHub: <a href="https://github.com/alihamza946" target="_blank" rel="noopener noreferrer">github.com/alihamza946</a></p>

        {/* CV Download */}
        <a 
          href="/Ali_Hamza_CV.pdf" 
          download="M_Ali_Hamza_CV.pdf" 
          className="cv-btn"
        >
          Download CV
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} M. Ali Hamza — All rights reserved.</p>
      </footer>
    </div>
  );
}
