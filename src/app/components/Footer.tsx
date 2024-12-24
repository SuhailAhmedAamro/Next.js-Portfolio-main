import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
return (
<footer className="bg-gray-800 text-white py-8  shadow-black rounded-[50px] border-[10px] border-red-400">
<div className="container mx-auto text-center">
<p className="mb-4 text-gray-400">
&copy; {new Date().getFullYear()} {"Suhail Ahmed's Portfolio. All rights reserved."}
</p>
<div className="flex justify-center space-x-6 mb-4">
<a href="https://www.linkedin.com/in/suhail-ahmed-aamro-623863279/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-200">
<FaLinkedin className="h-6 w-6" />
</a>
<a href="https://github.com/SuhailAhmedAamro?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-200">
<FaGithub className="h-6 w-6" />
</a>

<a href="https://www.instagram.com/suhailahmedaamro333/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-200">
<FaInstagram className="h-6 w-6" />
</a>
<a href="https://www.facebook.com/profile.php?id=61556963879555" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-200">
<FaFacebook className="h-6 w-6" />
</a>
</div>
<p className="text-gray-500 text-sm">
Designed by SUHAIL AHMED AAMRO❤️.
</p>
</div>
</footer>
);
};

export default Footer;
