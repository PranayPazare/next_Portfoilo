"use client"
import Head from "next/head";
import {
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
import { BsFillMoonStarsFill, BsCodeSlash, BsGearFill, BsGraphUp, BsPlayFill, BsDribbble } from "react-icons/bs";
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
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Advanced background with multiple layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.1, 0.05]);

  return (
    <div className="min-h-screen bg-[#0a0d12] text-[#d4e1f7] overflow-x-hidden font-inter">
      {/* Advanced Cyberpunk Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0d12]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d12] via-[#0f1419] to-[#0a0d12]"></div>
        
        {/* Animated gradient overlay */}
        <motion.div 
          style={{ y: backgroundY, opacity: backgroundOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-[#d4e1f7]/5 via-[#9fb8d1]/3 to-[#d4e1f7]/5"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,225,247,0.1)_0%,transparent_50%)]"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 225, 247, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 225, 247, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#d4e1f7] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 bg-[#0a0d12]/80 backdrop-blur-md border-b border-[#d4e1f7]/10"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-[#d4e1f7] cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-[#d4e1f7] to-[#9fb8d1] rounded-lg flex items-center justify-center">
              <AiOutlineCode className="text-[#0a0d12] text-lg" />
            </div>
            <span className="text-lg font-semibold font-poppins">Pranay</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Tech', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-[#9fb8d1] hover:text-[#d4e1f7] transition-colors font-montserrat text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[#2a2e38] border border-[#d4e1f7]/20 rounded-lg text-[#d4e1f7] hover:border-[#d4e1f7]/40 transition-colors text-sm font-medium"
          >
            Resume
          </motion.button>
        </div>
      </motion.nav>
  
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative pt-16 sm:pt-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Welcome Text */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-[#9fb8d1] text-base sm:text-lg font-montserrat tracking-wide">Welcome to</p>
            </motion.div>

            {/* Separator Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-16 sm:w-24 h-px bg-[#d4e1f7] mx-auto mb-6 sm:mb-8"
            />

            {/* Main Name */}
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#d4e1f7] mb-6 sm:mb-8 font-poppins tracking-wider"
              style={{
                textShadow: '0 0 20px rgba(212, 225, 247, 0.3)',
                background: 'linear-gradient(135deg, #d4e1f7 0%, #9fb8d1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Pranay&apos;s
            </motion.h1>

            {/* Developer Portfolio */}
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#d4e1f7] mb-4 sm:mb-6 font-poppins tracking-wide"
              style={{
                textShadow: '0 0 15px rgba(212, 225, 247, 0.2)'
              }}
            >
              Developer Portfolio
            </motion.h2>

            {/* Tagline */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-[#9fb8d1] text-base sm:text-lg font-inter mb-12 sm:mb-16"
            >
              Converting caffeine into code
            </motion.p>

            {/* Social Links - Simple and Clean */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex justify-center gap-6 sm:gap-8"
            >
              {[
                { icon: AiFillGithub, href: "#", label: "GitHub" },
                { icon: AiFillLinkedin, href: "#", label: "LinkedIn" },
                { icon: AiFillMail, href: "#", label: "Email" },
                { icon: BsDribbble, href: "#", label: "Dribbble" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  whileHover={{ 
                    scale: 1.2,
                    y: -2
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  aria-label={social.label}
                  className="text-xl sm:text-2xl text-[#d4e1f7] hover:text-[#9fb8d1] transition-colors duration-300"
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tech Grid Section */}
        <section id="tech" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4e1f7] mb-4 font-poppins tracking-wide"
                    style={{
                      textShadow: '0 0 20px rgba(212, 225, 247, 0.3)',
                      background: 'linear-gradient(135deg, #d4e1f7 0%, #9fb8d1 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                >
                  Tech Stack
                </h2>
                <motion.div
                  className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#d4e1f7] to-[#9fb8d1] rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-[#9fb8d1] text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto font-inter px-4"
              >
                Technologies I work with to build innovative solutions
              </motion.p>
            </motion.div>
            
            {/* Enhanced Tech Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: FaAws, label: "AWS" },
                { icon: FaReact, label: "React" },
                { icon: FaPython, label: "Python" },
                { icon: SiDjango, label: "Django" },
                { icon: SiCplusplus, label: "C++" },
                { icon: FaDocker, label: "Docker" },
                { icon: SiKubernetes, label: "Kubernetes" },
                { icon: SiJavascript, label: "JavaScript" },
                { icon: SiTypescript, label: "TypeScript" },
                { icon: FaNodeJs, label: "Node.js" },
                { icon: SiMongodb, label: "MongoDB" },
                { icon: SiMysql, label: "MySQL" },
                { icon: SiNextdotjs, label: "Next.js" },
                { icon: FaRust, label: "Rust" },
                { icon: SiPhp, label: "PHP" },
                { icon: SiSolidity, label: "Solidity" },
                { icon: FaEthereum, label: "Ethereum" },
                { icon: TbNetwork, label: "Web3" },
                { icon: FaCloud, label: "Cloud" },
                { icon: HiOutlineChip, label: "AI" },
                { icon: BsGraphUp, label: "Analytics" },
                { icon: FaBrain, label: "ML" },
                { icon: HiOutlineLightningBolt, label: "Fast" },
                { icon: HiOutlineGlobe, label: "Global" },
                { icon: FaRobot, label: "Auto" },
                { icon: FaDatabase, label: "DB" },
                { icon: SiCsharp, label: "C#" },
                { icon: SiGo, label: "Go" },
                { icon: SiGooglecloud, label: "GCP" },
                { icon: FaJava, label: "Java" }
              ].map((tech, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative cursor-pointer"
                >
                  <div className="bg-[#1c1f26] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#d4e1f7]/20 hover:border-[#d4e1f7]/40 transition-all duration-300 backdrop-blur-sm h-full flex flex-col items-center justify-center"
                       style={{
                         boxShadow: '0 0 20px rgba(212, 225, 247, 0.1), inset 0 1px 0 rgba(212, 225, 247, 0.1)'
                       }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                      }}
                      className="mb-2 sm:mb-3"
                    >
                      <tech.icon className="text-xl sm:text-2xl md:text-3xl text-[#d4e1f7] group-hover:text-[#9fb8d1] transition-colors duration-300"
                                 style={{
                                   filter: 'drop-shadow(0 0 10px rgba(212, 225, 247, 0.3))'
                                 }}
                      />
                    </motion.div>
                    <p className="text-xs sm:text-sm text-[#9fb8d1] text-center font-montserrat font-medium group-hover:text-[#d4e1f7] transition-colors duration-300">
                      {tech.label}
                    </p>
            </div>
                  
                  {/* Enhanced hover effects */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#d4e1f7]/10 to-[#9fb8d1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(212,225,247,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                       style={{
                         boxShadow: '0 0 30px rgba(212, 225, 247, 0.2)'
                       }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4e1f7] mb-4 font-poppins tracking-wide"
                    style={{
                      textShadow: '0 0 20px rgba(212, 225, 247, 0.3)',
                      background: 'linear-gradient(135deg, #d4e1f7 0%, #9fb8d1 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                >
                  About
                </h2>
                <motion.div
                  className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#d4e1f7] to-[#9fb8d1] rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#1c1f26]/50 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-[#d4e1f7]/20 shadow-2xl"
                   style={{
                     boxShadow: '0 0 40px rgba(212, 225, 247, 0.1), inset 0 1px 0 rgba(212, 225, 247, 0.1)'
                   }}
              >
                <div className="relative z-10">
                  <p className="text-sm sm:text-base md:text-lg text-[#d4e1f7] leading-relaxed font-inter"
                     style={{
                       textShadow: '0 0 10px rgba(212, 225, 247, 0.2)'
                     }}
                  >
                    Results-driven <span className="text-[#9fb8d1] font-semibold">Blockchain and Full Stack Developer</span> with 4 years of experience in building scalable applications and microservices. Proficient in developing user-friendly interfaces using <span className="text-[#9fb8d1] font-semibold">React.js</span> and integrating <span className="text-[#9fb8d1] font-semibold">Web3 functionalities</span> for blockchain applications.
                  </p>
                  <br />
                  <p className="text-sm sm:text-base md:text-lg text-[#d4e1f7] leading-relaxed font-inter"
                     style={{
                       textShadow: '0 0 10px rgba(212, 225, 247, 0.2)'
                     }}
                  >
                    Demonstrated expertise in implementing smart contracts using <span className="text-[#9fb8d1] font-semibold">Solidity and Rust</span>, optimizing database queries, and deploying cloud-based solutions. Skilled in developing decentralized applications on blockchain platforms like <span className="text-[#9fb8d1] font-semibold">Ethereum and Solana</span>. Proven ability to collaborate with cross-functional teams to deliver innovative technical solutions.
                  </p>
                </div>
                
                {/* Glowing background effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#d4e1f7]/5 via-[#9fb8d1]/5 to-[#d4e1f7]/5 opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl sm:rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(212,225,247,0.1)_0%,transparent_70%)]"></div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4e1f7] mb-4 font-poppins tracking-wide"
                    style={{
                      textShadow: '0 0 20px rgba(212, 225, 247, 0.3)',
                      background: 'linear-gradient(135deg, #d4e1f7 0%, #9fb8d1 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                >
                  Projects
                </h2>
                <motion.div
                  className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#d4e1f7] to-[#9fb8d1] rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-[#9fb8d1] text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto font-inter px-4"
              >
                Featured projects showcasing my expertise in blockchain and full-stack development
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "RWA Tokenization Platform",
                  description: "Real-world asset tokenization on Solana blockchain with Rust smart contracts and React frontend",
                  icon: FaEthereum
                },
                {
                  title: "NFT Marketplace",
                  description: "Full-stack NFT marketplace with Web3 wallet integration and real-time transaction events",
                  icon: TbNetwork
                },
                {
                  title: "AI-Agents Platform",
                  description: "Multi-purpose AI agent platform on Solana with token-gated AI personas and OpenAI integration",
                  icon: FaRobot
                }
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className="bg-[#1c1f26] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#d4e1f7]/20 hover:border-[#d4e1f7]/40 transition-all duration-300 backdrop-blur-sm h-full"
                       style={{
                         boxShadow: '0 0 30px rgba(212, 225, 247, 0.1), inset 0 1px 0 rgba(212, 225, 247, 0.1)'
                       }}
                  >
                    <div className="w-full h-24 sm:h-32 md:h-40 bg-[#2a2e38] rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center border border-[#d4e1f7]/20">
                      <project.icon className="text-3xl sm:text-4xl md:text-5xl text-[#d4e1f7] group-hover:text-[#9fb8d1] transition-colors duration-300"
                                   style={{
                                     filter: 'drop-shadow(0 0 15px rgba(212, 225, 247, 0.4))'
                                   }}
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#d4e1f7] font-poppins"
                          style={{
                            textShadow: '0 0 10px rgba(212, 225, 247, 0.2)'
                          }}
                      >
                        {project.title}
              </h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#9fb8d1] leading-relaxed font-inter">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-[#2a2e38] border border-[#d4e1f7]/20 hover:border-[#d4e1f7]/40 transition-colors cursor-pointer"
                      >
                        <AiOutlineLink className="text-[#d4e1f7] text-base sm:text-lg" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-[#2a2e38] border border-[#d4e1f7]/20 hover:border-[#d4e1f7]/40 transition-colors cursor-pointer"
                      >
                        <AiOutlineReload className="text-[#d4e1f7] text-base sm:text-lg" />
                      </motion.div>
            </div>
            </div>
                  
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4e1f7]/5 via-[#9fb8d1]/5 to-[#d4e1f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4e1f7] mb-4 font-poppins tracking-wide"
                    style={{
                      textShadow: '0 0 20px rgba(212, 225, 247, 0.3)',
                      background: 'linear-gradient(135deg, #d4e1f7 0%, #9fb8d1 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                >
                  Contact
                </h2>
                <motion.div
                  className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#d4e1f7] to-[#9fb8d1] rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-[#9fb8d1] text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto font-inter px-4"
              >
                Let&apos;s collaborate and build something amazing together
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Contact Info */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-[#1c1f26]/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#d4e1f7]/20"
                     style={{
                       boxShadow: '0 0 30px rgba(212, 225, 247, 0.1), inset 0 1px 0 rgba(212, 225, 247, 0.1)'
                     }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#d4e1f7] mb-6 font-poppins"
                      style={{
                        textShadow: '0 0 10px rgba(212, 225, 247, 0.2)'
                      }}
                  >
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#9fb8d1]">
                      <div className="p-2 rounded-lg bg-[#2a2e38] border border-[#d4e1f7]/20">
                        <AiFillPhone className="text-[#d4e1f7] text-lg" />
                      </div>
                      <span className="text-sm sm:text-base">+91 8551804412</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#9fb8d1]">
                      <div className="p-2 rounded-lg bg-[#2a2e38] border border-[#d4e1f7]/20">
                        <AiFillMail className="text-[#d4e1f7] text-lg" />
                      </div>
                      <span className="text-sm sm:text-base">pranayofficial09@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#9fb8d1]">
                      <div className="p-2 rounded-lg bg-[#2a2e38] border border-[#d4e1f7]/20">
                        <span className="text-[#d4e1f7] text-lg">📍</span>
                      </div>
                      <span className="text-sm sm:text-base">Pune, Maharashtra, India</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1c1f26]/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#d4e1f7]/20"
                style={{
                  boxShadow: '0 0 30px rgba(212, 225, 247, 0.1), inset 0 1px 0 rgba(212, 225, 247, 0.1)'
                }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#d4e1f7] mb-6 font-poppins"
                    style={{
                      textShadow: '0 0 10px rgba(212, 225, 247, 0.2)'
                    }}
                >
                  Send Message
                </h3>
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-[#9fb8d1] text-sm mb-2 font-montserrat">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 sm:p-4 bg-[#2a2e38] border border-[#d4e1f7]/20 rounded-xl text-[#d4e1f7] focus:border-[#d4e1f7]/40 focus:outline-none text-sm sm:text-base transition-colors"
                      placeholder="Enter your name"
                      style={{
                        boxShadow: '0 0 10px rgba(212, 225, 247, 0.1)'
                      }}
                    />
                  </div>
          <div>
                    <label className="block text-[#9fb8d1] text-sm mb-2 font-montserrat">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 sm:p-4 bg-[#2a2e38] border border-[#d4e1f7]/20 rounded-xl text-[#d4e1f7] focus:border-[#d4e1f7]/40 focus:outline-none text-sm sm:text-base transition-colors"
                      placeholder="Enter your email"
                      style={{
                        boxShadow: '0 0 10px rgba(212, 225, 247, 0.1)'
                      }}
                    />
          </div>
                  <div>
                    <label className="block text-[#9fb8d1] text-sm mb-2 font-montserrat">WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 sm:p-4 bg-[#2a2e38] border border-[#d4e1f7]/20 rounded-xl text-[#d4e1f7] focus:border-[#d4e1f7]/40 focus:outline-none text-sm sm:text-base transition-colors"
                      placeholder="Enter your WhatsApp number"
                      style={{
                        boxShadow: '0 0 10px rgba(212, 225, 247, 0.1)'
                      }}
              />
            </div>
                  <div>
                    <label className="block text-[#9fb8d1] text-sm mb-2 font-montserrat">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 sm:p-4 bg-[#2a2e38] border border-[#d4e1f7]/20 rounded-xl text-[#d4e1f7] focus:border-[#d4e1f7]/40 focus:outline-none text-sm sm:text-base transition-colors resize-none"
                      placeholder="Enter your message"
                      style={{
                        boxShadow: '0 0 10px rgba(212, 225, 247, 0.1)'
                      }}
                    />
                  </div>
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(205, 214, 232, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-3 sm:p-4 bg-[#2a2e38] border border-[#cdd6e8]/30 rounded-xl text-[#d4e1f7] hover:border-[#cdd6e8]/50 transition-all duration-300 text-sm sm:text-base font-semibold font-montserrat"
                    style={{
                      boxShadow: '0 0 20px rgba(205, 214, 232, 0.2)',
                      background: 'linear-gradient(135deg, #2a2e38 0%, #3a3e48 100%)'
                    }}
                  >
                    Let&apos;s schedule a meet
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#d4e1f7]/20 z-50"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Footer */}
        <footer className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 border-t border-[#d4e1f7]/10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6 sm:mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 sm:gap-3 text-[#d4e1f7] mb-3 sm:mb-4"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#d4e1f7] to-[#9fb8d1] rounded-lg flex items-center justify-center">
                    <AiOutlineCode className="text-[#0a0d12] text-sm sm:text-lg" />
            </div>
                  <span className="text-base sm:text-lg font-semibold font-poppins">Pranay</span>
                </motion.div>
                <p className="text-base sm:text-lg md:text-xl mb-2 font-poppins font-semibold"
                   style={{
                     textShadow: '0 0 10px rgba(212, 225, 247, 0.3)',
                     background: 'linear-gradient(135deg, #d4e1f7 0%, #9fb8d1 100%)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text'
                   }}
                >
                  Bye
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#9fb8d1] font-montserrat mb-4 sm:mb-6">Do Visit Again</p>
            </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  { icon: AiFillGithub, href: "#", label: "GitHub" },
                  { icon: AiFillLinkedin, href: "#", label: "LinkedIn" },
                  { icon: AiFillMail, href: "#", label: "Email" },
                  { icon: BsDribbble, href: "#", label: "Dribbble" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    aria-label={social.label}
                    className="text-[#9fb8d1] hover:text-[#d4e1f7] transition-colors duration-300"
                  >
                    <social.icon className="text-lg sm:text-xl" />
                  </motion.a>
                ))}
            </div>
              
              <div className="text-xs sm:text-sm text-[#9fb8d1]/60 font-montserrat">
                © 2024 Pranay. Built with Next.js & Framer Motion
            </div>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}