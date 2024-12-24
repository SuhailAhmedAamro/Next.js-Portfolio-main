"use client";
import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
const skills = [
  {
    title: "HTML",
    icon: <SiHtml5 className="h-16 w-16 text-orange-500" />,
  },
  {
    title: "CSS",
    icon: <SiCss3 className="h-16 w-16 text-blue-500" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className="h-16 w-16 text-yellow-500" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-blue-500" />,
  },
  {
    title: "Next.js",
    icon: <img src="/nextjs.webp" alt="Next.js Logo" className="h-16 w-16" />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-teal-500" />,
  },
];

const Skill = () => {
  return (
    <section className="relative bg-gray-900 text-white p-10 shadow-black rounded-[50px]
    
    
    
    border-[10px] border-red-400">
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Skill;
