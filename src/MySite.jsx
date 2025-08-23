import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Briefcase, User, MessageSquare, GraduationCap, Cloud } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-lg border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-gray-800 font-bold text-xl tracking-wide">
              Your Name
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-green-800 transition-colors font-medium">Home</a>
                <a href="#about" className="text-gray-700 hover:text-green-800 transition-colors font-medium">About</a>
                <a href="#skills" className="text-gray-700 hover:text-green-800 transition-colors font-medium">Skills</a>
                <a href="#projects" className="text-gray-700 hover:text-green-800 transition-colors font-medium">Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-green-800 transition-colors font-medium">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-green-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-200/50 hover:ring-green-300/70 transition-all duration-300 transform hover:scale-105">
                <img 
                  src="your-photo.jpg" 
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
                {/* Fallback if no image */}
                <div className="w-full h-full bg-gradient-to-br from-green-700 to-green-800 flex items-center justify-center text-white text-4xl font-bold">
                  YN
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 relative">
                Catherine Hagelis
                <div className="absolute -inset-1 bg-gradient-to-r from-green-800/20 to-green-900/20 blur-sm -z-10 rounded-lg"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Recent CS Graduate passionate about DevOps, Cloud Infrastructure, and Building Scalable Systems
            </p>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              I'm actively seeking DevOps and Cloud Engineering opportunities where I can apply my Computer Science foundation 
              and growing expertise in cloud infrastructure, automation, and scalable system design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-700 to-green-800 text-white px-8 py-3 rounded-lg hover:from-green-800 hover:to-green-900 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                View My Projects
              </button>
              <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg hover:bg-green-700 hover:text-white transition-all shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/80">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-800 mx-auto rounded-full shadow-sm"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-xl ring-2 ring-green-200/50 hover:ring-green-300/70 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <GraduationCap size={80} className="text-green-800 mx-auto mb-4" />
                  <div className="text-gray-700 font-semibold">Arizona State University</div>
                  <div className="text-gray-600">BS Computer Science</div>
                  <div className="text-gray-600">December 2025</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Graduate & Aspiring DevOps Engineer</h3>
              <p className="text-gray-600 text-lg mb-6">
                Computer Science student at Arizona State University (graduating December 2025) with a passion 
                for DevOps practices, cloud infrastructure, and automation. I love bridging the gap between 
                development and operations to create efficient, scalable systems.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Currently expanding my expertise in cloud platforms, containerization, CI/CD pipelines, 
                and infrastructure as code while seeking opportunities to contribute to DevOps teams and 
                cloud-native projects.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-green-800 transition-colors p-2 bg-gray-100 rounded-lg hover:bg-green-50">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-800 transition-colors p-2 bg-gray-100 rounded-lg hover:bg-green-50">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-800 transition-colors p-2 bg-gray-100 rounded-lg hover:bg-green-50">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Certification Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Certifications</h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-xl ring-2 ring-green-200/50 hover:ring-green-300/70 transition-all duration-300 transform hover:scale-105 max-w-sm">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 border border-green-300 mb-4">
                    <p className="text-gray-500 text-xs">Place your AWS certification badge here</p>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">AWS Cloud Practitioner</h4>
                  <p className="text-gray-600 text-sm">Foundational cloud knowledge and AWS services understanding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-stone-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-800 mx-auto rounded-full shadow-sm"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 hover:border-green-300/50 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Cloud size={24} className="text-green-800 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 hover:text-gray-800 transition-colors flex items-center">
                      <div className="w-2 h-2 bg-green-700 rounded-full mr-2"></div>
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
      <section id="projects" className="py-20 bg-white/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-800 mx-auto rounded-full shadow-sm"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-200 hover:border-green-300/50 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Code size={60} className="text-green-800" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-green-200 text-green-900 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-gray-600 hover:text-green-800 transition-colors p-2 bg-gray-50 rounded-lg hover:bg-green-50">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-gray-600 hover:text-green-800 transition-colors p-2 bg-gray-50 rounded-lg hover:bg-green-50">
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
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-stone-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-700 to-green-800 mx-auto rounded-full shadow-sm"></div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 text-lg mb-8">
              I'm excited to connect with DevOps teams, Cloud Engineers, and technology leaders. 
              Let's discuss how I can contribute to your infrastructure and automation goals.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-stone-200 hover:border-green-300/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-green-200 rounded-full">
                  <MessageSquare size={40} className="text-green-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to launch my DevOps career!</h3>
              <p className="text-gray-600 mb-6">
                As a CS student eager to break into DevOps and Cloud Engineering, I'd love to discuss 
                entry-level opportunities, internships, or collaborative projects.
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-800 text-white px-8 py-3 rounded-lg hover:from-green-800 hover:to-green-900 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2025 Catherine Hagelis. Built with React, Vite, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;