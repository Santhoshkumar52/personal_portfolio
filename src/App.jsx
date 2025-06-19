import React, { useState, useEffect } from 'react';
import { Menu, X, User, BookOpen, Mail, Github, Linkedin, ExternalLink, ChevronDown, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'JavaScript', level: 70, category: 'Frontend' },
    { name: 'React', level: 50, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 50, category: 'Backend' },
    { name: 'MongoDB', level: 60, category: 'Database' },
    { name: 'Git', level: 70, category: 'Tools' },
  ];

  const projects = [
    {
      title: 'Shoppe- Shopping Site',
      description: 'Responsive Frontend Project',
      tech: ['React', 'Html', 'Tailwind','Javascript'],
      link: '#'
    },
    {
      title: 'Mc Book Store',
      description: 'List of Books with CRUD operations',
      tech: ['JavaScript', 'Express', 'MongoDb','Node.js','Tailwindcss'],
      link: ''
    },
    {
      title: 'Weather Dashboard',
      description: 'weather application with data visualization',
      tech: ['React', 'Api',],
      link: '#'
    },
    {
      title: 'Mc Bakers',
      description: 'Responsive Landing Page',
      tech: ['Html', 'Css','Jquery','Javascript','Bootstrap'],
      link: 'https://mcbakers.onrender.com'
    }
  ];

  return (
    <div className="min-h-screen  from-green-50 via-white to-green-100">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.3)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-green-800">V.Santhosh Kumar</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'about', label: 'About', icon: User },
                  { id: 'skills', label: 'Skills', icon: BookOpen },
                  { id: 'contact', label: 'Contact', icon: Mail }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                      activeSection === id
                        ? 'bg-green-500/20 text-green-800 font-medium'
                        : 'text-green-700 hover:bg-green-500/10'
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-green-700 hover:bg-green-500/10 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'skills', label: 'Skills', icon: BookOpen },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeSection === id
                      ? 'bg-green-500/20 text-green-800 font-medium'
                      : 'text-green-700 hover:bg-green-500/10'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
              <img srcSet="VSK.jpg" className='size-32 object-cover mx-auto mb-8 rounded-full flex items-end justify-center shadow-2xl' alt="VSK profile img"/>
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
              V.Santhosh Kumar
            </h1>
            <p className="text-xl md:text-2xl text-green-600 mb-8">
              MERN Stack Developer
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              More About Me
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-green-700 mb-6 leading-relaxed">
                I’m a self-driven MERN Stack Developer with a strong foundation in React.js, Node.js, JavaScript, and MongoDB.
                Passionate about building responsive, user-friendly web applications, I enjoy turning ideas into real-world solutions through clean and efficient code. I’m actively seeking opportunities where I can contribute to impactful projects, collaborate with forward-thinking teams, and continue growing as a full-stack developer.
                </p>
                <p className="text-lg text-green-700 mb-6 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies and keep myself busy with other creative things.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Santhoshkumar52?tab=repositories"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/santhosh-kumar-v-55bb6b254"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Featured Projects</h3>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-green-800">{project.title}</h4>
                    </div>
                    <p className="text-green-700 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
              Skills Learnt
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Frontend', 'Backend', 'Database', 'Tools'].map((category) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">{category}</h3>
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-green-700 font-medium">{skill.name}</span>
                          <span className="text-green-600 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Certifications & Learning</h3>
                <div className="grid md:grid-cols-2 gap-4 ">
                  <div className="text-left">
                    <h4 className="font-medium text-green-700">MERN Stack Developer</h4>
                    <p className="text-green-600 text-sm">FITA Academy • 2025</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
              Get In Touch
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-6">Let's Connect</h3>
                <p className="text-green-700 mb-6 leading-relaxed">
                  I'm always interested in hearing about new opportunities and projects. 
                  Whether you're looking to hire, collaborate, reach me out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800">Email</h4>
                      <p className="text-green-600">santhosh5002kumar@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Github size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800">GitHub</h4>
                      <p className="text-green-600">github.com/Santhoshkumar52</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800">LinkedIn</h4>
                      <p className="text-green-600">linkedin.com/in/santhosh-kumar-v-55bb6b254</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800">+91 9884150605</h4>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Mail size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-green-700">
              © 2025 V.Santhosh Kumar. Designed & Developed with React.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;