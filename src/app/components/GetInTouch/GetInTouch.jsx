import React from "react";
import "./GetInTouch.css";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <div>
      {/* <div className='getintouch-heading'>
            Get In Touch
        </div>
         <div className='getintouch-desc'>I'm always excited to discuss new projects or job opportunities. Feel free to reach out!</div>
         <div className="contact-buttons">
    <a href="mailto:celestamamachan@gmail.com" className="contact-btn">Email Me</a>
    <a href="https://www.linkedin.com/in/celesta-mamachan-660873245" target="_blank" className="contact-btn secondary">
      LinkedIn
    </a>
  </div> */}
      <section className="contact-card-section">
        <div className="contact-card">
          <div className="contact-left">
            <div className="getintouch-header">Contact Me</div>
            <div className="getintouch-flex">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/icon/location1.svg"
                    width={20}
                    height={20}
                    alt="mail"
                  />
                </div>
                <div>Kollam,Kerala</div>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=celestamamachan@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Celesta,"
                target="_blank"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Image
                      src="/icon/Frame.svg"
                      width={20}
                      height={20}
                      alt="mail"
                     
                    />
                  </div>
                  <div>celestamamachan@gmail.com</div>
                </div>
              </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/icon/linkedin.svg"
                    width={15}
                    height={15}
                    alt="mail"
                  />
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/celesta-mamachan-660873245/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/icon/github.svg"
                    width={20}
                    height={20}
                    alt="mail"
                  />
                </div>
                <a href="https://github.com/cel200" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out for frontend opportunities or
              collaborations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
