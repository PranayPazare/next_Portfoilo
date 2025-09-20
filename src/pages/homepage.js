"use client"
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
  AiOutlineCode,
  AiOutlineRocket,
  AiOutlineBulb,
  AiOutlineStar,
  AiOutlineLink,
  AiOutlineReload,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsCodeSlash, BsGearFill, BsGraphUp, BsPlayFill } from "react-icons/bs";
import { FaEthereum, FaReact, FaNodeJs, FaRust, FaAws, FaCode, FaDatabase, FaCloud, FaBrain, FaRobot, FaGlobe, FaDocker, FaJava, FaPython, FaCuttlefish } from "react-icons/fa";
import { SiSolidity, SiNextdotjs, SiMongodb, SiMysql, SiDocker, SiTypescript, SiJavascript, SiPhp, SiCplusplus, SiGo, SiDjango, SiKubernetes, SiCsharp, SiGooglecloud } from "react-icons/si";
import { TbBrandReact, TbBrandJavascript, TbBrandRust, TbBrandMongodb, TbNetwork } from "react-icons/tb";
import { HiOutlineLightningBolt, HiOutlineChip, HiOutlineGlobe } from "react-icons/hi";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import deved from "../../public/dev-ed-wave.png";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gray-900"></div>
      </div>
  
      <main className="relative z-10">
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-white"
            >
              <AiOutlineCode className="text-xl sm:text-2xl" />
              <span className="text-base sm:text-lg font-medium">Pranay&apos;s</span>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-xs sm:text-sm hover:bg-gray-700 transition-colors"
            >
              <span className="hidden sm:inline">View GitHub</span>
              <span className="sm:hidden">GitHub</span>
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 pt-16 sm:pt-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Title */}
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4"
            >
              Pranay&apos;s
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2"
            >
              Developer Portfolio
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-16 px-4"
            >
              Blockchain & Full Stack Developer | Converting ideas into scalable applications
            </motion.p>

            {/* Social Links */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center gap-4 sm:gap-8 p-4 sm:p-6 border border-blue-500/30 rounded-lg bg-blue-500/10 backdrop-blur-sm mx-4 sm:mx-0"
            >
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="#" 
                className="text-xl sm:text-2xl text-white hover:text-blue-400 transition-colors"
              >
                <AiFillGithub />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="#" 
                className="text-xl sm:text-2xl text-white hover:text-blue-400 transition-colors"
              >
                <AiFillLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="#" 
                className="text-xl sm:text-2xl text-white hover:text-blue-400 transition-colors"
              >
                <AiFillMail />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                  href="#"
                className="text-xl sm:text-2xl text-white hover:text-blue-400 transition-colors"
              >
                <FaGlobe />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Services Flow Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2"
            >
              {[
                { icon: FaCode, label: "Blockchain Development" },
                { icon: FaReact, label: "Full Stack Development" },
                { icon: FaDatabase, label: "Smart Contracts" },
                { icon: FaBrain, label: "Web3 Integration" },
                { icon: FaCloud, label: "AI Integration" }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 rounded-lg p-3 sm:p-4 border border-blue-500/30 hover:border-blue-500/50 transition-colors"
                  >
                    <service.icon className="text-xl sm:text-2xl text-white mb-2" />
                    <p className="text-xs sm:text-sm text-white/80 text-center">{service.label}</p>
                  </motion.div>
                  {index < 4 && (
                    <div className="hidden sm:flex items-center mx-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-8 h-0.5 bg-blue-500/50"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* About Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-base sm:text-lg text-white/80 leading-relaxed px-4">
                Results-driven Blockchain and Full Stack Developer with 4 years of experience in building scalable applications and microservices. Proficient in developing user-friendly interfaces using React.js and integrating Web3 functionalities for blockchain applications. Demonstrated expertise in implementing smart contracts using Solidity and Rust, optimizing database queries, and deploying cloud-based solutions. Skilled in developing decentralized applications on blockchain platforms like Ethereum and Solana. Proven ability to collaborate with cross-functional teams to deliver innovative technical solutions.
              </p>
            </motion.div>
            </div>
        </section>
        {/* Tech Stack Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">Tech Stack</h2>
            </motion.div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
              {[
                { icon: FaRust, label: "Rust" },
                { icon: SiJavascript, label: "JavaScript" },
                { icon: SiTypescript, label: "TypeScript" },
                { icon: SiPhp, label: "PHP" },
                { icon: SiSolidity, label: "Solidity" },
                { icon: FaReact, label: "React.js" },
                { icon: SiNextdotjs, label: "Next.js" },
                { icon: SiMongodb, label: "MongoDB" },
                { icon: SiMysql, label: "MySQL" },
                { icon: FaNodeJs, label: "Node.js" },
                { icon: FaAws, label: "AWS" },
                { icon: FaDocker, label: "Docker" },
                { icon: FaEthereum, label: "Ethereum" },
                { icon: TbNetwork, label: "Web3" },
                { icon: FaCloud, label: "Cloud" },
                { icon: HiOutlineChip, label: "Hardhat" },
                { icon: BsGraphUp, label: "Truffle" },
                { icon: FaBrain, label: "IPFS" },
                { icon: HiOutlineLightningBolt, label: "Chainlink" },
                { icon: HiOutlineGlobe, label: "NFTs" },
                { icon: FaRobot, label: "Staking" },
                { icon: FaDatabase, label: "Redux" },
                { icon: SiCplusplus, label: "Material UI" },
                { icon: SiGooglecloud, label: "Yew" },
                { icon: SiDjango, label: "Express.js" },
                { icon: SiKubernetes, label: "NestJS" },
                { icon: FaJava, label: "Jest" },
                { icon: SiCsharp, label: "Laravel" },
                { icon: SiGo, label: "Git" },
                { icon: FaPython, label: "RESTful APIs" }
              ].map((tech, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-lg p-2 sm:p-4 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <tech.icon className="text-lg sm:text-2xl text-white mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs text-white/80 text-center">{tech.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Interactive Element */}
        <section className="py-12 sm:py-24 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-4 sm:p-8 border border-blue-500/30"
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-6 sm:h-8 bg-gray-700 rounded border-2 border-dashed border-gray-600"></div>
                <div className="h-6 sm:h-8 bg-gray-700 rounded border-2 border-dashed border-gray-600"></div>
                <div className="h-6 sm:h-8 bg-gray-700 rounded border-2 border-dashed border-gray-600"></div>
              </div>
              <div className="flex justify-center items-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-700 rounded-full flex items-center justify-center border border-blue-500/50">
                  <AiOutlineCode className="text-xl sm:text-3xl text-white" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-2 sm:ml-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <BsPlayFill className="text-white text-lg sm:text-xl" />
                </motion.button>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="h-4 sm:h-6 bg-gray-700 rounded border-2 border-dashed border-gray-600"></div>
                <div className="h-4 sm:h-6 bg-gray-700 rounded border-2 border-dashed border-gray-600"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">Projects</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  title: "RWA Tokenization Platform",
                  description: "Real-world asset tokenization on Solana blockchain with Rust smart contracts and React frontend"
                },
                {
                  title: "NFT Marketplace",
                  description: "Full-stack NFT marketplace with Web3 wallet integration and real-time transaction events"
                },
                {
                  title: "AI-Agents Platform",
                  description: "Multi-purpose AI agent platform on Solana with token-gated AI personas and OpenAI integration"
                }
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-full h-24 sm:h-32 bg-gray-700 rounded mb-3 sm:mb-4 flex items-center justify-center">
                    <FaEthereum className="text-3xl sm:text-4xl text-blue-400" />
                  </div>
                  <div className="space-y-2 mb-3 sm:mb-4">
                    <h3 className="text-white font-semibold text-sm sm:text-base">{project.title}</h3>
                    <p className="text-white/70 text-xs sm:text-sm">{project.description}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <AiOutlineLink className="text-white text-lg sm:text-xl hover:text-blue-400 transition-colors cursor-pointer" />
                    <AiOutlineReload className="text-white text-lg sm:text-xl hover:text-blue-400 transition-colors cursor-pointer" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">Experience & Education</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-4 sm:p-8 border border-blue-500/30"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Professional Experience</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Full Stack Blockchain Developer</h4>
                    <p className="text-blue-400 text-xs sm:text-sm mb-2">Blocsys Technologies Pvt. Ltd. | Feb 2022 - Present</p>
                    <ul className="text-white/80 text-xs sm:text-sm space-y-1">
                      <li>• Integrated third-party Quest services using NestJS</li>
                      <li>• Developed modern UI designs with Web3 functionalities</li>
                      <li>• Implemented OAuth for social login functionality</li>
                      <li>• Created in-house quest offers and admin panel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Web Developer</h4>
                    <p className="text-blue-400 text-xs sm:text-sm mb-2">Zummit Info Labs | Jun 2021 - Jan 2022</p>
                    <ul className="text-white/80 text-xs sm:text-sm space-y-1">
                      <li>• Developed user interface for login page</li>
                      <li>• Integrated login API for secure authentication</li>
                      <li>• Created interactive pages for interview questions</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-4 sm:p-8 border border-blue-500/30"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Education & Skills</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Education</h4>
                    <p className="text-blue-400 text-xs sm:text-sm mb-2">Bachelor of Electronics and Telecommunication Engineering</p>
                    <p className="text-white/80 text-xs sm:text-sm">Savitribai Phule Pune University | 2021</p>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Key Projects</h4>
                    <ul className="text-white/80 text-xs sm:text-sm space-y-1">
                      <li>• RWA Tokenization Platform</li>
                      <li>• NFT Marketplace</li>
                      <li>• Staking & Farming Pools</li>
                      <li>• IDO/IGO Launchpad</li>
                      <li>• Telegram Mini-App Bot</li>
                      <li>• AI-Agents Platform</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Feel free to fill up your details, I will reach out to you asap
                </h2>
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <AiFillPhone className="text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base">+91 8551804412</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <AiFillMail className="text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base">pranayofficial09@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="text-lg sm:text-xl">📍</span>
                    <span className="text-sm sm:text-base">Pune, Maharashtra, India</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <div>
                  <label className="block text-white/80 text-xs sm:text-sm mb-2">Your name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-xs sm:text-sm mb-2">Whatsapp No.</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                    placeholder="+91 8551804412"
                    defaultValue="+91 8551804412"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-xs sm:text-sm mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                    placeholder="pranayofficial09@gmail.com"
                    defaultValue="pranayofficial09@gmail.com"
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full p-2 sm:p-3 bg-gray-800 border border-blue-500/30 rounded-lg text-white hover:border-blue-500/50 transition-colors text-sm sm:text-base"
                >
                  Let&apos;s schedule a meet
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="py-8 sm:py-12 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-base sm:text-lg mb-2">Bye</p>
              <p className="text-xs sm:text-sm text-white/60">Do Visit Again</p>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}