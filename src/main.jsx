import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Mail, ArrowUpRight, Code2, Database, Server, Terminal, Cpu, ExternalLink } from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'CarePath',
    repo: 'Carepath',
    href: 'https://carepath-sage.vercel.app/',
    description: 'A full-stack AI healthcare platform with symptom analysis, doctor discovery, consultation booking, and secure account-based consultation storage.',
    tech: ['Next.js', 'MongoDB', 'Gemini API', 'Vercel'],
    featured: true,
  },
  {
    title: 'AI Chatbot',
    repo: 'ai-chat-bot-trial-1',
    href: 'https://github.com/Gurkamalvirk/ai-chat-bot-trial-1',
    description: 'A full AI-powered chatbot project exploring modern conversational interfaces and application integration.',
    tech: ['AI', 'Full Stack', 'Web'],
    featured: true,
  },
  {
    title: 'PDF Text Editor',
    repo: 'PDF-editor-Desktop-application',
    href: 'https://github.com/Gurkamalvirk/PDF-editor-Desktop-application',
    description: 'A local-first Windows desktop application for opening PDFs, selecting visible text, editing it in place, preserving detected font styling, undo/redo, zoom and safe PDF export.',
    tech: ['C#', '.NET', 'WPF', 'PDFium'],
    featured: true,
  },
  {
    title: 'Web Chat App',
    repo: 'webChat_App',
    href: 'https://github.com/Gurkamalvirk/webChat_App',
    description: 'A browser-based real-time chat application built around interactive communication and responsive UI.',
    tech: ['JavaScript', 'Web', 'Realtime'],
  },
  {
    title: 'Library Management System',
    repo: 'library_management',
    href: 'https://github.com/Gurkamalvirk/library_management',
    description: 'A database-backed library system for managing books, borrowers and lending records.',
    tech: ['Python', 'Flask', 'MySQL'],
  },
  {
    title: 'Tourist Information System',
    repo: 'Toursist-Information-System-Java-project-',
    href: 'https://github.com/Gurkamalvirk/Toursist-Information-System-Java-project-',
    description: 'A Java project focused on organizing and presenting tourist information through a structured application.',
    tech: ['Java', 'OOP'],
  },
  {
    title: 'React Cart Project',
    repo: 'react-cart-project',
    href: 'https://github.com/Gurkamalvirk/react-cart-project',
    description: 'A React shopping cart project demonstrating reusable components, state management and UI interaction.',
    tech: ['React', 'JavaScript'],
  },
  {
    title: 'Full Stack Node.js',
    repo: 'Full-Stack-Node.js',
    href: 'https://github.com/Gurkamalvirk/Full-Stack-Node.js',
    description: 'Full-stack practice work using Node.js and modern web-development fundamentals.',
    tech: ['Node.js', 'Backend', 'JavaScript'],
  },
];

const skillGroups = [
  { icon: Code2, title: 'Languages', skills: ['C++', 'C#', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { icon: Server, title: 'Web & Backend', skills: ['React', 'Node.js', 'Flask', 'REST APIs'] },
  { icon: Database, title: 'Data', skills: ['MySQL', 'MongoDB', 'Database Design'] },
  { icon: Terminal, title: 'Tools', skills: ['Git', 'GitHub', 'Linux', 'VS Code', '.NET', 'WPF'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const phrase = 'build software that feels useful.';

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(phrase.slice(0, i));
      if (i >= phrase.length) clearInterval(id);
    }, 48);
    return () => clearInterval(id);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="noise" />
      <nav className="nav glass">
        <button className="brand" onClick={() => go('home')} aria-label="Home">
          <span className="prompt">~/</span>gurkamal
        </button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>menu</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => go('about')}>about</button>
          <button onClick={() => go('projects')}>projects</button>
          <button onClick={() => go('skills')}>skills</button>
          <button onClick={() => go('contact')}>contact</button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> available for opportunities</div>
            <p className="kicker">COMPUTER SCIENCE UNDERGRADUATE · SOFTWARE DEVELOPER</p>
            <h1>Gurkamal<br /><span>Singh.</span></h1>
            <p className="hero-line">I {typed}<span className="cursor">▌</span></p>
            <p className="hero-sub">I enjoy turning ideas into working software — from AI-powered applications and full-stack systems to Windows desktop software, Java, backend and database projects.</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => go('projects')}>Explore projects <ArrowUpRight size={17} /></button>
              <a className="ghost-btn" href="https://github.com/Gurkamalvirk" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            </div>
          </div>

          <div className="terminal-card glass">
            <div className="terminal-top"><span/><span/><span/><b>gurkamal@portfolio</b></div>
            <div className="terminal-body">
              <p><span className="green">$</span> whoami</p>
              <p className="output">Gurkamal Singh</p>
              <p><span className="green">$</span> cat focus.txt</p>
              <p className="output">AI · Full Stack · Desktop/.NET · Java · Databases</p>
              <p><span className="green">$</span> git status</p>
              <p className="output">On branch: building-things</p>
              <p className="output">Your portfolio is up to date.</p>
              <p><span className="green">$</span> <span className="blink">_</span></p>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div><strong>20+</strong><span>GitHub repositories</span></div>
          <div><strong>8</strong><span>featured projects</span></div>
          <div><strong>5+</strong><span>core technologies</span></div>
          <div><strong>2027</strong><span>graduation track</span></div>
        </section>

        <section id="about" className="section split-section">
          <div>
            <p className="section-label">01 / ABOUT</p>
            <h2>Curious by default.<br/>Builder by choice.</h2>
          </div>
          <div className="about-copy">
            <p>I’m a Computer Science undergraduate focused on learning by building. My GitHub is a mix of academic work, experiments and practical projects across AI, full-stack development, Windows desktop software, Java and databases.</p>
            <p>I care about clean interfaces, understandable code and turning coursework into real systems that can actually be demonstrated.</p>
            <div className="about-grid">
              <div><span>Currently</span><b>Undergraduate</b></div>
              <div><span>Based in</span><b>India</b></div>
              <div><span>GitHub</span><b>@Gurkamalvirk</b></div>
              <div><span>Focus</span><b>Software + AI</b></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <div><p className="section-label">02 / PROJECTS</p><h2>Selected work.</h2></div>
            <a href="https://github.com/Gurkamalvirk?tab=repositories" target="_blank" rel="noreferrer">all repositories <ExternalLink size={15}/></a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <a className={`project-card ${project.featured ? 'featured' : ''}`} key={project.repo} href={project.href} target="_blank" rel="noreferrer">
                <div className="project-top"><span>0{index + 1}</span><ArrowUpRight size={19}/></div>
                <div>
                  <p className="repo-name">github/{project.repo}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-label">03 / TOOLKIT</p>
          <h2>Things I work with.</h2>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, skills }) => (
              <div className="skill-card glass" key={title}>
                <Icon size={22}/><h3>{title}</h3>
                <div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div><p className="section-label">04 / EDUCATION</p><h2>Computer Science<br/>undergraduate.</h2></div>
          <div className="edu-card glass">
            <Cpu size={26}/>
            <div><span>2023 — 2027</span><h3>B.E. Computer Science</h3><p>Chandigarh University</p><small>Data Structures · OOP · DBMS · Full Stack · Software Engineering</small></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="section-label">05 / CONTACT</p>
          <h2>Have an opportunity<br/>or an idea?</h2>
          <p>My inbox is open for internships, projects, collaborations and interesting technical conversations.</p>
          <div className="contact-actions">
            <a className="primary-btn" href="mailto:baliharsinghv@gmail.com"><Mail size={18}/> Send an email</a>
            <a className="ghost-btn" href="https://github.com/Gurkamalvirk" target="_blank" rel="noreferrer"><Github size={18}/> @Gurkamalvirk</a>
            <a className="ghost-btn" href="https://github.com/Gurkamalvirk/Resume" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={17}/></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Gurkamal Singh</span>
        <span>built with React · powered by curiosity</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
