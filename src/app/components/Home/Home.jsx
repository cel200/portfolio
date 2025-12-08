"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Moon, Sun, User, Menu, X } from "lucide-react";
import Image from "next/image";
import { Services } from "../Services/Services";
import GetInTouch from "../GetInTouch/GetInTouch";
import About from "../About/About";
import Projects from "../Projects/Projects";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const aboutref = useRef();
   const serviceref = useRef();
    const projectsref = useRef();
     const touchref = useRef();
    
  function handleAbout (){
     aboutref.current?.scrollIntoView({ behavior: "smooth" });
  }
   function handleProject (){
     projectsref.current?.scrollIntoView({ behavior: "smooth" });
  }
   function handleServices (){
     serviceref.current?.scrollIntoView({ behavior: "smooth" });
  }
   function handleContact (){
     touchref.current?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-home">
      {/* Navbar */}
      <div
        style={{
          backgroundImage: "url(/icon/home-banner.jpg)",
          height: "100vh",
        }}
      >
        <div className={`navbar-home ${isScrolled ? "navbar-scrolled" : ""}`}>
          {/* Left: Logo / Name */}
          <div className="navbar-first">
            <User size={40} color="#000" strokeWidth={2} />
            <div className="user-style">Celesta</div>
          </div>

          {/* Hamburger Icon (only visible <768px) */}
          <div
            className="hamburger-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          {/* Nav Links */}
          <div className="nav-flex ">
            <div className="nav-text" onClick={handleAbout}>About</div>
            <div className="nav-text" onClick={handleProject}>Projects</div>
            <div className="nav-text" onClick={handleServices}>Services</div>
            <div className="nav-text"onClick={handleContact}>Contact</div>
          </div>

          {/* Right: Color Mode Toggle */}
          {/* <div className="nav-text-1" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
          <div>Color mode</div>
        </div> */}
        </div>

        {/* Hero Section */}
        <div className="content-home">
          <div style={{ width: "53%" }}>
            <div className="first-content">
              Hey folks, I'm <span className="text"></span>
            </div>
            <br />
            <span className="second-content">
              Driven by curiosity and creativity, I build modern,
              high-performance web applications that deliver smooth user
              experiences and impactful results.
            </span>

            <div className="button-flex">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/icon/CELESTA_MAMACHAN.pdf"; // file inside public/icon/
                  link.download = "Celesta-Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="dwld-btn"
              >
                Download Resume
              </button>

              <button className="quote-btn">Get a free quote</button>
            </div>
          </div>

          {/* Right Illustration */}
          <div>
            <Image src="/icon/main.svg" width={400} height={400} alt="main" />
          </div>
        </div>
      </div>
      <div ref={aboutref} >
      <About />
      </div>
      <div ref={serviceref} >
      <Services />
      </div>
      <div ref={projectsref} >
      <Projects />
      </div>
      <div ref={touchref} >
        
      <GetInTouch />
     </div>
    </div>
  );
}

export default Home;
