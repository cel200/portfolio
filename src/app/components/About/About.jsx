import React from "react";
import "./About.css";
import { LinearProgress } from "@mui/material";
import Image from "next/image";
const About = () => {
  return (
    <div style={{paddingTop:"70px",paddingBottom:"70px",backgroundColor:"white"}}>
      <div className="main-about">
        <div className="main-about-flex">
          <div className="about-flex-1">
            <div className="about-myself">ABOUT MYSELF</div>
            {/* <div>
              <Image  width={300} height={300}  alt="profile"/>
            </div> */}
            <div className="myself-content">
              Hi, I’m Celesta Mamachan, a passionate Front-End Developer who
              loves creating elegant and user-focused web experiences. I
              specialize in building responsive and interactive interfaces using
              React.js, Next.js, and modern JavaScript technologies.
              <br />
              <br />
              My goal is to bring designs to life with clean code, smooth
              performance, and intuitive user experiences. I enjoy turning
              complex ideas into simple, visually appealing solutions that make
              an impact.
              <br />
              <br />
              I’m constantly exploring new tools, design trends, and frameworks
              to stay ahead in the ever-evolving world of web development.
              Currently, I’m focused on growing my career and exploring exciting
              opportunities in Dubai’s tech industry.
              <br />
              <br />
              When I’m not coding, I enjoy experimenting with UI design ideas
              and learning about emerging technologies that make the web more
              dynamic and creative.
            </div>
          </div>
          <div className="about-flex-2">
            <div className="skills-text">Skills</div>
            <div style={{ width: "100%" }}>
              <div className="skills">HTML</div>
              <div>
                <LinearProgress
                  variant="determinate"
                  value={90}
                  color="primary"
                  sx={{
                    height: 10, // adjust thickness (default is 4px)
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="skills">CSS</div>
              <div>
                <LinearProgress
                  variant="determinate"
                  value={88}
                  color="primary"
                  sx={{
                    height: 10, // adjust thickness (default is 4px)
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="skills">JAVASCRIPT</div>
              <div>
                <LinearProgress
                  variant="determinate"
                  value={93}
                  color="primary"
                  sx={{
                    height: 10, // adjust thickness (default is 4px)
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="skills">REACT</div>
              <div>
                <LinearProgress
                  variant="determinate"
                  value={95}
                  color="primary"
                  sx={{
                    height: 10, // adjust thickness (default is 4px)
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="skills">NEXT.JS</div>
              <div>
                <LinearProgress
                  variant="determinate"
                  value={90}
                  color="primary"
                  sx={{
                    height: 10, // adjust thickness (default is 4px)
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="skills">REDUX</div>
              <div>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  color="primary"
                  sx={{
                    height: 10, // adjust thickness (default is 4px)
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="skills">BOOTSTRAP</div>
              <div>
                <LinearProgress
                  variant="determinate"
                  value={95}
                  color="primary"
                  sx={{
                    height: 10, // adjust thickness (default is 4px)
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
             <div style={{ width: "100%" }}>
              <div className="skills">MUI</div>
              <div>
                <LinearProgress
                  variant="determinate"
                  value={95}
                  color="primary"
                  sx={{
                    height: 10, // adjust thickness (default is 4px)
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
