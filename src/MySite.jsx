import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Briefcase, User, MessageSquare } from 'lucide-react';

const PersonalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    {
      title: "Multi-Cloud Infrastructure",
      description: "Deployed scalable web application across AWS and Azure using Terraform for infrastructure as code, with automated CI/CD pipeline and monitoring.",
      tech: ["Terraform", "AWS", "Azure", "Docker", "GitHub Actions"],
      github: "#",
      live: "#"
    },
    {
      title: "Kubernetes Cluster Setup",
      description: "Built and configured production-ready Kubernetes cluster with automated deployments, load balancing, and persistent storage solutions.",
      tech: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana"],
      github: "#",
      live: "#"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed comprehensive CI/CD pipeline with automated testing, security scanning, and multi-environment deployments using GitOps practices.",
      tech: ["Jenkins", "Docker", "ArgoCD", "SonarQube", "AWS"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Heroku"] },
    { category: "DevOps Tools", items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"] },
    { category: "Programming", items: ["Python", "JavaScript", "Go", "Bash", "Java"] },
    { category: "Infrastructure", items: ["Linux", "CI/CD", "Monitoring", "IaC", "Networking"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-white font-bold text-xl">
              Your Name
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-white hover:text-purple-300 transition-colors">Home</a>
                <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
                <a href="#skills" className="text-white hover:text-purple-300 transition-colors">Skills</a>
                <a href="#projects" className="text-white hover:text-purple-300 transition-colors">Projects</a>
                <a href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-purple-300 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors">About</a>
              <a href="#skills" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold">
                YN
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Recent CS Graduate passionate about DevOps, Cloud Infrastructure, and Building Scalable Systems
            </p>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              I'm actively seeking DevOps and Cloud Engineering opportunities where I can apply my Computer Science foundation 
              and growing expertise in cloud infrastructure, automation, and scalable system design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                View My Projects
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-900 transition-all">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl flex items-center justify-center">
                <User size={120} className="text-white/60" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Recent Graduate & Aspiring DevOps Engineer</h3>
              <p className="text-gray-300 text-lg mb-6">
                Fresh Computer Science graduate from Arizona State University (December 2024) with a passion 
                for DevOps practices, cloud infrastructure, and automation. I love bridging the gap between 
                development and operations to create efficient, scalable systems.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Currently expanding my expertise in cloud platforms, containerization, CI/CD pipelines, 
                and infrastructure as code while seeking opportunities to contribute to DevOps teams and 
                cloud-native projects.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-purple-300 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-white hover:text-purple-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-purple-300 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 hover:text-white transition-colors">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                  <Code size={60} className="text-white/60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-white hover:text-purple-300 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-white hover:text-purple-300 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-8">
              I'm excited to connect with DevOps teams, Cloud Engineers, and technology leaders. 
              Let's discuss how I can contribute to your infrastructure and automation goals.
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center justify-center mb-6">
                <MessageSquare size={40} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to launch my DevOps career!</h3>
              <p className="text-gray-300 mb-6">
                As a recent CS graduate eager to break into DevOps and Cloud Engineering, I'd love to discuss 
                entry-level opportunities, internships, or collaborative projects.
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                <Mail size={20} />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Your Name. Built with React, Vite, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;