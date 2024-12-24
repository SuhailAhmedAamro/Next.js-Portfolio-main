"use client";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const projects = [
{
title: "Stylish Calculator",
description: "A sleek and modern calculator app with a user-friendly interface and advanced features.",
image: "/calcu.png", // Replace with actual image path
link: "https://stylish-calculatorxyz.vercel.app/", // Replace with actual project link
},
{
title: "Hackathon Project",
description: "An innovative solution developed during a hackathon, focused on solving real-world problems with technology.",
image: "/hackathon.jpg", // Replace with actual image path
link: "https://milestone-5-unique-path-and-shareable-link-lac.vercel.app/", // Replace with actual project link
},
{
title: "E-Commerce",
description: "An innovative solution developed during a hackathon, focused on solving real-world problems with technology.",
image: "/E-Commerce.jpg", // Replace with actual image path
link: "https://full-respo-web-site-8sp1wjm4t-suhailahmeds-projects.vercel.app/", // Replace with actual project link
},




];
;

const Project = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
if (!isHovered) {
const interval = setInterval(() => {
setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
}, 3000); // Slide will change every 3 seconds
return () => clearInterval(interval);
}
}, [isHovered]);

const nextSlide = () => {
setCurrentIndex((prevIndex) => (prevIndex + 5) % projects.length);
};

const prevSlide = () => {
setCurrentIndex((prevIndex) =>
prevIndex === 0 ? projects.length - 1 : prevIndex - 1
);
};

return (
<section className=" mb-10 top-9 relative min-h-screen bg-gray-900 text-white p-10 rounded-[50px]



border-[10px] border-red-400">


<div
className="container mx-auto relative z-10"
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
>
<h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

<div className="relative flex items-center justify-center">
{projects.map((project, index) => (
<motion.div
key={index}
initial={{ opacity: 0, x: 100 }}
animate={{
opacity: currentIndex === index ? 5: 0,
x: currentIndex === index ? 0 : 100,
}}
transition={{ duration: 0.5 }}
className={`absolute top-0 ${
currentIndex === index ? "block" : "hidden"
}`}
>
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
<img
src={project.image}
alt={project.title}
className="w-full h-48 object-cover"
/>
<div className="p-4">
<h3 className="text-xl font-semibold">{project.title}</h3>
<p className="text-gray-400 mt-2">{project.description}</p>
<a
href={project.link}
target="_blank"
rel="noopener noreferrer"
className="text-pink-500 hover:underline mt-4 inline-block"
>
View Project
</a>
</div>
</div>
</motion.div>
))}

{/* Navigation Buttons */}
<button
onClick={prevSlide}
className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
>
&#8592;
</button>
<button
onClick={nextSlide}
className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
>
&#8594;
</button>
</div>
</div>
</section>
);
};



export default Project;
