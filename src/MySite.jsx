import React, { useState } from 'react';
import { Github, Mail, ExternalLink, Menu, X, MessageSquare, GraduationCap, Award } from 'lucide-react';

const PersonalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    { title: "Personal Portfolio Website", 
      description: "Developed a responsive personal website using React, Vite, and Tailwind CSS, then containerized and deployed it to AWS using Docker and Terraform. The site is fully automated with infrastructure as code and serves as a live example of practical DevOps deployment.", 
      tech: ["React","Vite","Tailwindcss","Docker","Terraform","AWS S3","Route 53"], 
      github: "https://github.com/hagelis/catherinehagelis.com.git", 
      live: "https://catherinehagelis.com",
      image: "/images/personal-site.jpeg",
    },

    { title: "AI Fitness Web App (Capstone Project) (Work In Progress...)", 
      description: "Collaborated with a small team to design and build an AI-powered fitness platform that generates personalized workout plans and exercise videos. My focus was on the front-end UI using React and Tailwind, integrating APIs for AI-generated content, and managing user interactions through dashboards.", 
      tech: ["React", "Tailwind", "Node.js", "Express", "PostgreSQL", "REST APIs", "AI Integration"], 
      github: "#", 
      live: "#", 
      image: "/images/capstone.jpeg",
    
    },

    { title: "Recipe Card Web App (Work In Progress...)", 
      description: "Developed a full-stack recipe management application that allows users to create, edit, and organize their favorite recipes. Implemented the front-end with React and Tailwind CSS, and built a Node.js + Express backend connected to a PostgreSQL database. Fully dockerized for local and cloud deployment.", 
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "Tailwind"], 
      github: "#", 
      live: "#", 
      image: "/images/recipe-app.jpeg",
    }
  ];

  const skills = [
    { category: "Cloud Platforms", items: ["AWS, DigitalOcean"] },
    { category: "DevOps Tools", items: ["Docker","Terraform","GitHub Actions","Kubernetes","Jenkins"] },
    { category: "Programming", items: ["Bash","Java", "JavaScript (React, Vite)","Python","C-Languages"] },
    { category: "Infrastructure", items: ["Linux, macOS", "Windows","Monitoring","IaC","Tailwind CSS"] }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-white font-bold text-xl">Catherine Hagelis</div>

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
              <button onClick={toggleMenu} className="text-white hover:text-purple-300 transition-colors">
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
            {/* Photo */}
            <div className="mb-8">
              <div className="w-52 h-52 mx-auto rounded-full overflow-hidden ring-4 ring-white/30">
                <img src="images/profileCrop.jpeg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Catherine Hagelis</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Recent Computer Science BS Graduate passionate about DevOps, Cloud Infrastructure, and Building Scalable Systems
            </p>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              I'm actively seeking DevOps and Cloud Engineering opportunities where I can apply my Computer Science foundation 
              and growing expertise in cloud infrastructure, automation, and scalable system design.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-0 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {/* Graduation Card */}
            <div>
              <div className="mx-auto w-full max-w-sm bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20">
                    <GraduationCap size={56} className="text-white/80" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Arizona State University</h3>
                <p className="text-gray-300 mt-2">BS Computer Science</p>
                <p className="text-gray-300">December 2025</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Recent Graduate & Aspiring DevOps Engineer</h3>
              <p className="text-gray-300 text-lg mb-6">
                Computer Science student at Arizona State University (graduating December 2025) with a passion 
                for DevOps practices, cloud infrastructure, and automation. I love bridging the gap between 
                development and operations to create efficient, scalable systems.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Currently expanding my expertise in cloud platforms, containerization, CI/CD pipelines, 
                and infrastructure as code while seeking opportunities to contribute to DevOps teams and 
                cloud-native projects.
              </p>
              <div className="flex space-x-4">
                {/* target and rel make it so the link opens in a new tab instead of navigating away from my site */}
                <a 
                  href="https://github.com/hagelis" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-colors" 
                  aria-label="GitHub">
                  <Github size={24} />
                </a>

                <a 
                  href={`mailto:${"cat.hagelis"}@${"gmail.com"}`} 
                  className="text-white hover:text-purple-300 transition-colors" 
                  aria-label="Email">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills and Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

      {/* Certifications & Badges Card (top) */}
      <div className="mb-12">
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors text-center">
      {/* Centered title + icon */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-white">Certifications & Badges</h3>
            <Award className="text-white/70" size={22} />
          </div>

      {/* Center grid items */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="rounded-lg overflow-hidden bg-white/10 border border-white/10 p-3 flex items-center justify-center">
              <img
                src="/badges/aws-certified-cloud-practitioner.png"
                alt="AWS Certified Cloud Practitioner"
                className="max-h-36 max-w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>


          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 hover:text-white transition-colors">{skill}</li>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all md:hover:scale-105 hover:scale-[1.02]">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300 transition-colors" 
                      aria-label="External link">
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
              <a href="mailto:cat.hagelis@gmail.com" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                <Mail size={20} /> Send me an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Catherine Hagelis. Built with React, Vite, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
