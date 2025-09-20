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
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsCodeSlash, BsGearFill, BsGraphUp } from "react-icons/bs";
import { FaEthereum, FaReact, FaNodeJs, FaRust, FaAws, FaCode, FaDatabase, FaCloud, FaBrain, FaRobot } from "react-icons/fa";
import { SiSolidity, SiNextdotjs, SiMongodb, SiMysql, SiDocker, SiTypescript, SiJavascript, SiPhp } from "react-icons/si";
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background with subtle grid */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
  
      <main className="relative z-10">
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              PRANAY PAZARE
            </motion.div>
            <div className="flex items-center space-x-8">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#about" 
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                About
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#skills" 
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                Skills
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#projects" 
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                Projects
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#contact" 
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                Contact
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Sign In
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 pt-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Logo/Title with large circular glow */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative mb-16"
            >
              {/* Large circular glow background */}
              <div className="absolute inset-0 w-96 h-96 mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              
              {/* Main title */}
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative text-8xl md:text-9xl font-black text-white mb-8"
                style={{ textShadow: '0 0 50px rgba(0, 212, 255, 0.5)' }}
              >
                PRANAY
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-2xl md:text-3xl font-medium text-white/90 mb-8"
            >
              Blockchain & Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="max-w-4xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed mb-12"
            >
              I harness cutting-edge blockchain technology, build scalable applications, and use AI to help your business 
              dominate the market. The best part? I automate everything for maximum efficiency.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12"
            >
              <div className="flex items-center gap-3 text-white/80">
                <AiFillPhone className="text-xl" />
                <span className="font-medium">+91 8551804412</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <AiFillMail className="text-xl" />
                <span className="font-medium">pranayofficial09@gmail.com</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="flex justify-center gap-8"
            >
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="#" 
                className="text-2xl text-white/60 hover:text-white transition-colors"
              >
                <AiFillLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="#" 
                className="text-2xl text-white/60 hover:text-white transition-colors"
              >
                <AiFillGithub />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                  href="#"
                className="text-2xl text-white/60 hover:text-white transition-colors"
              >
                <AiFillTwitterCircle />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* What Makes Me Better Section */}
        <section id="about" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Makes Me Better
            </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Combining deep technical expertise with innovative solutions to deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/10"
                  >
                    <FaBrain className="text-4xl text-white" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Deep Data Analysis</h3>
                <p className="text-white/70 leading-relaxed">
                  Advanced understanding of blockchain architecture, smart contracts, and Web3 technologies
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/10"
                  >
                    <HiOutlineLightningBolt className="text-4xl text-white" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Driven Growth</h3>
                <p className="text-white/70 leading-relaxed">
                  Leveraging AI tools and automation to accelerate development and optimize performance
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/10"
                  >
                    <BsGraphUp className="text-4xl text-white" />
                  </motion.div>
            </div>
                <h3 className="text-2xl font-bold text-white mb-4">Save Time & Money</h3>
                <p className="text-white/70 leading-relaxed">
                  Efficient development processes that deliver results faster while maintaining quality
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* AI-Driven Services Section */}
        <section id="skills" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My AI-Driven Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive blockchain and full-stack development services powered by cutting-edge technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
                  <p className="text-white/70 leading-relaxed">
                    Advanced blockchain data analysis and insights for informed decision making
                  </p>
                </div>
                
                <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">Predictive Modeling</h3>
                  <p className="text-white/70 leading-relaxed">
                    AI-powered predictive models for market trends and user behavior analysis
                  </p>
                </div>
                
                <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Contracts</h3>
                  <p className="text-white/70 leading-relaxed">
                    Secure and efficient smart contract development and deployment
            </p>
          </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-12 border border-white/10 rounded-3xl text-center bg-white/5">
                  <div className="relative mb-8">
                    <div className="w-48 h-48 mx-auto bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <TbNetwork className="text-6xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">AI-Driven Insights</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Real-time analytics and intelligent insights for blockchain transactions and user behavior
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* All Features in One Place */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Features in One Place
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive technical expertise covering every aspect of modern blockchain and web development
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FaDatabase, title: "Data Integration", desc: "Seamless integration of blockchain data with traditional databases" },
                { icon: BsGraphUp, title: "Predictive Analytics", desc: "AI-powered analytics for blockchain transactions and market trends" },
                { icon: HiOutlineChip, title: "Smart Contracts", desc: "Secure and efficient smart contract development and deployment" },
                { icon: TbNetwork, title: "Web3 Integration", desc: "Complete Web3 ecosystem integration and wallet connectivity" },
                { icon: FaRobot, title: "Automated Workflows", desc: "AI-driven automation for development and deployment processes" },
                { icon: HiOutlineGlobe, title: "Global Deployment", desc: "Scalable cloud infrastructure for worldwide application deployment" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 border border-white/10 rounded-2xl text-center bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <feature.icon className="text-3xl text-white" />
            </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Latest Projects */}
        <section id="projects" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My Latest Projects
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Innovative blockchain solutions and Web3 applications that push the boundaries of technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Chatbot</h3>
                  <p className="text-white/70 leading-relaxed">
                    Intelligent chatbot with blockchain integration for enhanced user interactions
                  </p>
                </div>
                
                <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">NFT Marketplace</h3>
                  <p className="text-white/70 leading-relaxed">
                    Full-stack NFT marketplace with Web3 wallet integration and real-time events
                  </p>
                </div>
                
                <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">DeFi Protocol</h3>
                  <p className="text-white/70 leading-relaxed">
                    Decentralized finance protocol with automated yield farming and staking
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-12 border border-white/10 rounded-3xl text-center bg-white/5">
                  <div className="relative mb-8">
                    <div className="w-48 h-48 mx-auto bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <FaRobot className="text-6xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Robo-Arm Plant Optimization</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    AI-driven robotic arm system for automated plant optimization and blockchain-based monitoring
            </p>
          </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-16 border border-white/10 rounded-3xl bg-white/5"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
                I&apos;ve delivered 30% automation, boosted client revenue by over 50.5%, and saved thousands of hours. 
                The best part? I manage everything effortlessly.
              </h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
              >
                Automate now the resource drain
              </motion.button>
            </motion.div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Ready to build something amazing together? Let&apos;s connect and discuss your next blockchain or web development project.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-12 border border-white/10 rounded-3xl bg-white/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/10 rounded-full">
                        <AiFillMail className="text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Email</p>
                        <p className="text-white font-medium">pranayofficial09@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/10 rounded-full">
                        <AiFillPhone className="text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Phone</p>
                        <p className="text-white font-medium">+91 8551804412</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/10 rounded-full">
                        <span className="text-2xl text-white">📍</span>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Location</p>
                        <p className="text-white font-medium">Pune, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-white mb-4">Education</h4>
                    <p className="text-white/80">
                      Bachelor of Electronics and Telecommunication Engineering<br />
                      Savitribai Phule Pune University | 2021
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
                  <div className="flex gap-6 mb-8">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href="#" 
                      className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <AiFillLinkedin className="text-3xl text-white" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href="#" 
                      className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <AiFillGithub className="text-3xl text-white" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href="#" 
                      className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <AiFillTwitterCircle className="text-3xl text-white" />
                    </motion.a>
                  </div>
                  
                  <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                    <h4 className="text-xl font-bold text-white mb-4">Professional Experience</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-white font-semibold">Full Stack Blockchain Developer</h5>
                        <p className="text-white/70 text-sm">Blocsys Technologies Pvt. Ltd. | Feb 2022 - Present</p>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold">Web Developer</h5>
                        <p className="text-white/70 text-sm">Zummit Info Labs | Jun 2021 - Jan 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4"
            >
              PRANAY PAZARE
            </motion.div>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/60 mb-6"
            >
              Blockchain & Full Stack Developer | Building the Future of Web3
            </motion.p>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center gap-8 mb-8"
            >
              <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-white/60 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-white/60 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
            </motion.div>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm"
            >
              © 2024 Pranay Pazare. All rights reserved.
            </motion.p>
          </div>
        </footer>
      </main>
    </div>
  );
}