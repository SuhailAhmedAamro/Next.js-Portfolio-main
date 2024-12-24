"use client";
import React from "react";
import Image from "next/image";
import './About.css';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const About = () => {
return (
<div id="about" className=" top-9 relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden 
shadow-black rounded-[50px]



border-[10px] border-red-400">

{/* Content Section */}
<div className="relative z-10 p-10 bg-black bg-opacity-70 rounded-lg shadow-lg max-w-4xl text-center">
<div className="flex justify-center mb-6">
<Image
src="pic.jpg"
alt="Suhail Ahmed Aamroa"
className="profile"
width={150}
height={150}
/>
</div>
<h1 className="text-4xl md:text-5xl font-bold mb-4">Suhail Ahmed</h1>
<p className="text-lg md:text-xl mb-6">
Originally from Dadu, Sindh, Pakistan, now residing in Karachi, pursuing the Governor's Initiative in Metaverse, Web 3.0, and AI at the Governor House. Proficient in HTML5, CSS3, TypeScript, and familiar with Python, React, and Tailwind CSS.





</p>


{/* Social Icons */}
<div className="flex justify-center space-x-4 mt-6">
<a href="https://www.linkedin.com/in/suhail-ahmed-aamro-623863279/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
<FaLinkedin size={30} />
</a>
<a href="https://github.com/SuhailAhmedAamro?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
<FaGithub size={30} />
</a>
<a href="https://www.instagram.com/suhailahmedaamro333/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
<FaInstagram size={30} />
</a>
<a href="https://www.facebook.com/profile.php?id=61556963879555" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
<FaFacebook size={30} />
</a>
</div>
</div>


</div>
);
};

export default About;
