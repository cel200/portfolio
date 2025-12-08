"use client";
import Image from "next/image";
import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
function Projects() {
  const data = [
    {
      id: 1,
      heading: "Nearshopz:E-Commerce Website",
      image: "/icon/seller.png",
      desc: " NearShopz is a Trivandrum-based eCommerce platform where customers can purchase products directly from local online stores. The portal was developed using modern technologies such as React.js, Next.js, MongoDB, and GraphQL, ensuring a responsive and efficient user experience. The platform includes comprehensive features like product listing, a shopping cart, and user authentication, making it easy for users to browse and securely purchase items. Additionally, we developed a responsive admin portal to manage product inventories, orders, and user data.",
    },
    {
      id: 2,
      heading: "4Labs website",
      image: "/icon/4labs.png",
      desc: "Developed the 4labs website using Next.js with a focus on creating responsive, user-friendly UI components and optimizing overall performance. Improved SEO through metadata management, server-side rendering, and enhanced page load speed. Integrated the frontend with the Strapi CMS to enable dynamic content updates and contributed to backend structures and APIs. Ensured smooth functionality by debugging issues, testing responsiveness across devices, and collaborating closely with designers and developers.",
    },
    {
      id: 3,
      heading: "Marketing Portal",
      image: "/icon/marketing.png",
      desc: "Developed the user interface for a marketing automation portal that enables sending bulk WhatsApp messages to seller groups, ensuring a smooth and intuitive user experience. Integrated backend APIs to support messaging and campaign management while also implementing file upload functionality via REST APIs for efficient store-list management. Improved application stability by identifying and resolving front-end issues, and collaborated closely with cross-functional teams to deliver features on time and meet project requirements.",
    },
    //  {
    //     id:4,
    //   heading: "Axia Kairos",
    //   image: "/icon/seller.png",
    //   desc: "Developed the user interface for the Axia Kairos company website, creating a clean and professional design with fully responsive layouts across all screen sizes. Improved overall site stability and performance by identifying and resolving UI bugs. Collaborated closely with team members to maintain consistent design standards and ensure smooth functionality throughout the website.",
    // },
    {
      id: 4,
      heading: "Manpower Souq Admin Panel",
      image: "/icon/manpower.png",
      desc: "Currently developing the admin panel for a Manpower Management System using Next.js, focusing on a clean UI and intuitive user flow. Ensuring full responsiveness across desktop, tablet, and mobile devices while integrating REST and GraphQL APIs for dynamic features such as company details, worker profiles, and account request handling. Actively identifying and resolving UI issues to improve performance and maintain interface stability. Collaborating with the development team to uphold design consistency and implement new features based on project requirements.",
    },
    {
      id: 5,
      heading: "Sub Contractor Portal",
      image: "/icon/image.png",
      desc: " Currently developing the Subcontractor Portal as part of the Manpower Souq project, enabling subcontractors to manage contracts, bulk-upload worker data, and maintain detailed worker listings. The portal is designed with an intuitive and responsive UI to ensure smooth navigation across all devices. I am integrating backend APIs to support bulk upload functionality, dynamic data management, and seamless communication with the main Manpower Souq system. Additionally, I work closely with the team to refine features, resolve UI issues, and maintain consistent design and performance standards throughout the portal.",
    },
  ];
  return (
    <div>
      <div className="project-main-flex">
        <div className="project-heading">Projects</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="project-card">
            {data.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  className="project-card-item"
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="project-card-right">
                    <Image
                      src={item.image}
                      width={300}
                      height={140}
                      alt="project image"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "40px",
                      }}
                    />
                  </div>

                  <div className="project-card-left">
                    <div className="project-card-heading">{item.heading}</div>
                    <div className="project-card-subheading">{item.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
