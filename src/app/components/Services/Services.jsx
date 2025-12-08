"use client"
import React from "react";
import "./Services.css";
import { Atom, Monitor, Settings, SlidersHorizontal } from "lucide-react";
import { FaReact, FaDesktop, FaSlidersH, FaCog } from "react-icons/fa";
import Image from "next/image";
export const Services = () => {
 const features = [
  {
    id: 1,
    icon: "icon/one.svg",
    title: "Modern Front-End Development",
    text: "I build fast, interactive applications using React and Next.js with clean, scalable code."
  },
  {
    id: 2,
    icon: "icon/two.svg",
    title: "Responsive & Mobile-First",
    text: "I ensure every design adapts smoothly to all devices for a seamless user experience."
  },
  {
    id: 3,
    icon: "icon/three.svg",
    title: "Clean UI & Smooth UX",
    text: "I add subtle animations and micro-interactions that make the user experience more lively and enjoyable."
  },
  {
    id: 4,
    icon: "icon/four.svg",
    title: "Performance Optimized",
    text: "I improve loading speed, rendering, and overall performance to deliver fast web experiences."
  }
];

  return (
    <div className="service-bg">
    <div className="service-main" >
      <div className="main-service-heading">Services</div>
      <div className="service-flex">
        {features.map((item)=>(
            <div className="service-circle" key={item.id}>
              <div style={{textAlign:"center"}}>
                <Image src={item.icon} width={45} height={45} alt="icons"/>
                </div>
                <div className="circle-text">
                {item?.title}
                </div>
                <div className="description">
                {item?.text}
                </div>
            </div>
            ))}
             
      </div>
    </div>
    </div>
  );
};
