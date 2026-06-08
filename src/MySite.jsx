import React, { useState } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Menu, X, MessageSquare, GraduationCap, Award, Cloud, Infinity, Layers, Code, Server, Activity, Rocket } from 'lucide-react';
import TrafficDashboard from './TrafficDashboard.jsx';

const PersonalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    {
      title: "IaC Portfolio Website",
      summary: "Full AWS environment, provisioned from scratch with Terraform",
      bullets: [
        "VPC, subnets, ALB, ECS Fargate cluster",
        "Dockerized with multi-stage build, stored in ECR",
        "Reproducible, on-demand teardown",
      ],
      tech: ["Terraform", "Docker", "AWS ECS Fargate", "AWS ECR", "ALB", "VPC", "nginx", "IaC"],
      github: "https://github.com/hagelis/catherinehagelis.com-IaC",
      Icon: Server,
      iconBg: "from-blue-500/30 to-cyan-500/30",
      iconColor: "text-cyan-300",
    },
    {
      title: "Serverless Analytics Pipeline",
      summary: "Automated weekly traffic insights, powered by AI",
      bullets: [
        "Lambda + EventBridge run it weekly, hands-free",
        "Claude API summarizes CloudFront logs",
        "Live dashboard backed by DynamoDB",
      ],
      tech: ["AWS Lambda", "EventBridge", "DynamoDB", "SES", "Secrets Manager", "CloudFront", "Claude API", "Node.js"],
      Icon: Activity,
      iconBg: "from-purple-500/30 to-violet-600/30",
      iconColor: "text-violet-400",
      dashboard: true,
    },
    {
      title: "Portfolio Website",
      summary: "This site, deployed on AWS with keyless CI/CD",
      bullets: [
        "React + Vite + Tailwind, served via CloudFront",
        "GitHub Actions CI/CD with OIDC keyless auth",
        "Auto cache invalidation + spend alerts",
      ],
      tech: ["React","Vite","Tailwindcss","Github Actions (CI/CD)","OIDC","AWS S3","Route 53", "Cloudfront", "AWS Certificate Manager (ACM)", "AWS Budgets / Spend Alerts"],
      github: "https://github.com/hagelis/catherinehagelis.com.git",
      live: "https://catherinehagelis.com",
      Icon: Rocket,
      iconBg: "from-orange-500/30 to-violet-600/30",
      iconColor: "text-orange-300",
    },
  ];

  const skills = [
    { category: "Cloud Platforms", items: [{ name: "AWS", subitems: ["S3", "CloudFront", "CloudWatch", "Route 53", "ACM", "Lambda", "DynamoDB", "EventBridge", "Secrets Manager", "SES", "Budgets", "ECS Fargate", "ECR", "ALB", "VPC"] }] },
    { category: "DevOps Tools", items: ["Docker", "GitHub Actions", "CI/CD", "OIDC"] },
    { category: "Programming", items: ["Bash", "Java", "JavaScript (React, Vite)", "Python"] },
    { category: "Infrastructure", items: ["Terraform", "nginx", "Linux, macOS", "Windows", "Tailwind CSS"] }
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">Hi, I'm</span> Catherine Hagelis
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              AWS-certified Computer Science grad building cloud infrastructure, serverless pipelines, and CI/CD automation.
            </p>

            {/* Stat strip */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { value: "2", label: "AWS certs", href: "#skills" },
                { value: "3", label: "Cloud projects", href: "#projects" },
                { value: "15+", label: "AWS services", href: "#skills" },
              ].map(({ value, label, href }) => (
                <a key={label} href={href} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 min-w-[120px] hover:border-purple-400/50 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">{value}</div>
                  <div className="text-gray-400 text-sm mt-1">{label}</div>
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:cat.hagelis@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-violet-700 transition-all hover:scale-105 font-medium">
                <Mail size={18} /> Get in touch
              </a>
              <a
                href="https://github.com/hagelis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full hover:border-purple-400 hover:text-purple-300 transition-all hover:scale-105 font-medium">
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/catherine-hagelis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full hover:border-purple-400 hover:text-purple-300 transition-all hover:scale-105 font-medium">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-0 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {/* Graduation Card */}
            <div>
              <div className="mx-auto w-full max-w-sm bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-purple-400/20 to-violet-500/20">
                    <GraduationCap size={56} className="text-white/80" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Arizona State University</h3>
                <p className="text-gray-300 mt-2">BS Computer Science</p>
                <p className="text-gray-300">December 2025</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Computer Science Graduate | DevOps & Cloud</h3>
              <p className="text-gray-300 text-lg mb-6">
                Computer Science graduate focused on DevOps, cloud infrastructure, and automation. I like bridging development and operations to ship efficient, scalable systems.
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

                <a
                  href="https://www.linkedin.com/in/catherine-hagelis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-colors"
                  aria-label="LinkedIn">
                  <Linkedin size={24} />
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-500 mx-auto"></div>
          </div>

      {/* Certifications & Badges Card (top) */}
      <div className="mb-12">
        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors text-center">
          {/* Centered title + icon */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-white">Certifications & Badges</h3>
            <Award className="text-white/70" size={22} />
          </div>

          {/* Center grid items */}
          <div className="flex flex-wrap justify-center gap-6">

            {/* Cloud Practitioner Badge */}
            <div className="p-3 flex items-center justify-center">
              <a href="https://www.credly.com/badges/aa49179c-1925-463b-82eb-01be3c24f1f8/public_url" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 hover:scale-105 transition-all">
              <img
                src="/badges/aws-certified-cloud-practitioner.png"
                alt="AWS Certified Cloud Practitioner"
                className="h-48 w-auto object-contain"
              />
              </a>
            </div>

            {/* SAA Badge */}
            <div className="p-3 flex items-center justify-center">
              <a href="https://www.credly.com/badges/39b24bc9-8fb0-475d-b577-7b7e2bc24387/public_url" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 hover:scale-105 transition-all">
              <img
                src="/badges/aws-certified-solutions-architect-associate.png"
                alt="AWS Certified Solutions Architect Associate"
                className="h-48 w-auto object-contain"
              />
              </a>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-3">Click a badge to view certification</p>
        </div>
      </div>

          {/* AWS full-width pill card */}
          <div className="mb-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Cloud size={20} className="text-purple-300" />
                <h3 className="text-xl font-bold text-white">Cloud / AWS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["S3","CloudFront","CloudWatch","Route 53","ACM","Lambda","DynamoDB","EventBridge","Secrets Manager","SES","Budgets","ECS Fargate","ECR","ALB","VPC"].map(s => (
                  <span key={s} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Other skill categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "DevOps", Icon: Infinity, items: ["Docker","GitHub Actions","CI/CD","OIDC"] },
              { label: "Infrastructure", Icon: Layers, items: ["Terraform","nginx","Linux, macOS","Windows"] },
              { label: "Programming", Icon: Code, items: ["Bash","Java","JavaScript (React, Vite)","Python","Tailwind CSS"] },
            ].map(({ label, Icon, items }) => (
              <div key={label} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={20} className="text-purple-300" />
                  <h3 className="text-xl font-bold text-white">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(s => (
                    <span key={s} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">{s}</span>
                  ))}
                </div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-500 mx-auto"></div>
          </div>

          {/* ProjectCard helper rendered inline */}
          {(() => {
            const ProjectCard = ({ project, className = "" }) => {
              const { Icon, iconBg, iconColor } = project;
              return (
                <div className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all hover:scale-[1.02] flex flex-col ${className}`}>
                  <div className={`h-28 flex items-center justify-center bg-gradient-to-br ${iconBg}`}>
                    <Icon size={48} className={iconColor} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-purple-300 text-sm font-medium mb-4">{project.summary}</p>
                    <ul className="space-y-2 mb-4">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                    {(project.github || project.live) && (
                      <div className="flex space-x-4 mb-4">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-purple-300 transition-colors" aria-label="GitHub">
                            <Github size={20} />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="text-white hover:text-purple-300 transition-colors" aria-label="Live site">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    )}
                    {project.dashboard && (
                      <div className="mt-28 border-t border-white/10 pt-4">
                        <TrafficDashboard />
                      </div>
                    )}
                  </div>
                </div>
              );
            };

            const analytics = projects.find(p => p.dashboard);
            const portfolioCards = projects.filter(p => !p.dashboard);

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Left column: two portfolio cards stacked */}
                <div className="flex flex-col gap-6">
                  {portfolioCards.map((p, i) => (
                    <ProjectCard key={i} project={p} className="flex-1" />
                  ))}
                </div>
                {/* Right column: analytics card full height */}
                <ProjectCard project={analytics} className="h-full" />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-500 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center justify-center mb-6">
                <MessageSquare size={40} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's talk DevOps & Cloud Opportunities</h3>
              <p className="text-gray-300 mb-6">
                 I bring AWS certifications, a CS foundation, real-world deployment experience, 
                 and I'm ready to contribute and grow with your team.
              </p>
              <a href="mailto:cat.hagelis@gmail.com" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-violet-700 transition-all transform hover:scale-105">
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
            <p className="text-gray-400">© 2026 Catherine Hagelis. Built with React, Vite, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
