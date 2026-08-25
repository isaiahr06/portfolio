const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();


// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// EJS Setup
app.set('views', './views');
app.set('view engine', 'ejs');


// ==========================
// PROJECT DATA
// ==========================

const projects = [
  {
    name: 'NFL Fantasy Analyzer',
    image: '/images/fantasy-preview.png',
    description: 'Compare NFL players, review stats, and watch highlight videos.',
    tech: 'React, Vite, APIs',
    liveUrl: 'https://react100-nfl-fantasy-analyzer.vercel.app/',
    githubUrl: 'https://github.com/isaiahr06/react100-nfl-fantasy-analyzer'
  },
  {
    name: 'Very Simple Todo App',
    image: '/images/vstda-preview.png',
    description: 'A lightweight todo application for adding and managing tasks.',
    tech: 'JavaScript, HTML, CSS',
    liveUrl: 'https://react100-vstda-project-ashy.vercel.app/',
    githubUrl: 'https://github.com/isaiahr06/react100-vstda-project'
  },
  {
    name: 'San Diego Top Spots',
    image: '/images/san-diego-top-spots-preview.png',
    description: 'Explore popular San Diego destinations with descriptions and map links.',
    tech: 'JavaScript, jQuery, HTML, CSS',
    liveUrl: 'https://web102-san-diego-top-spots-seven.vercel.app/',
    githubUrl: 'https://github.com/isaiahr06/web102-san-diego-top-spots'
  },
  {
    name: 'Change Calculator',
    image: '/images/change-cal-preview.png',
    description: 'Calculates the exact change owed using dollars, quarters, dimes, nickels, and pennies.',
    tech: 'JavaScript, Playwright',
    liveUrl: 'https://react100-change-calculator-project-taupe.vercel.app/',
    githubUrl: 'https://github.com/isaiahr06/react100-change-calculator-project'
  },
  {
    name: 'Mortgage Calculator',
    image: '/images/mort-calc-preview.png',
    description: 'Calculates mortgage payments based on principal, interest rate, and loan term.',
    tech: 'JavaScript, Node.js, Testing',
    liveUrl: 'https://react100-mortgage-calculator-projec-beta.vercel.app/',
    githubUrl: 'https://github.com/isaiahr06/react100-mortgage-calculator-project'
  }
];


// ==========================
// SKILLS DATA
// ==========================

const skills = [
  {
    category: 'Frontend',
    items: ['JavaScript', 'React', 'HTML', 'CSS', 'jQuery']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'EJS']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'SQL', 'Redis']
  },
  {
    category: 'Tools & Testing',
    items: ['Git', 'GitHub', 'Vite', 'Playwright']
  }
];


// ==========================
// EXPERIENCE DATA
// ==========================

const experience = [
  {
    company: 'Creating Coding Careers',
    role: 'Software Development Apprentice',
    period: 'June 2026 - Present',
    bullets: [
      'Developed responsive web applications using JavaScript, React, HTML, CSS, and REST APIs following modern front-end development practices.',
      'Developed multiple React and JavaScript applications utilizing REST APIs, component-based architecture, and responsive design principles.',
      'Collaborated with mentors and fellow developers using Git/GitHub to manage source code and implement feature enhancements.',
      'Solved algorithmic programming challenges involving arrays, strings, objects, recursion, and data manipulation using JavaScript.',
      'Designed, tested, and deployed full-stack and front-end applications while following clean code and version control best practices.'
    ]
  },
  {
    company: 'United States Air Force',
    role: 'Capabilities Manager',
    period: 'October 2024 - June 2026',
    bullets: [
      'Managed 24/7 global IT infrastructure by monitoring and resolving outages supporting more than 50,000 analysts worldwide while maintaining over 4,000 network assets across 600+ locations.',
      'Managed incident tracking, system analysis, and enterprise record management for mission-critical technology infrastructure.'
    ]
  },
  {
    company: 'United States Air Force',
    role: 'Tactical Communication Technician',
    period: 'May 2022 - October 2024',
    bullets: [
      'Configured routers, switches, modems, and other networking equipment for optimal performance.',
      'Maintained IT hardware and software for local computers.',
      'Configured, coordinated, and set up portable satellite dishes such as the Hawkeye 3 Lite, Hawkeye Heavy, and Starlink.',
      'Developed user training materials for new communication systems being deployed.'
    ]
  },
  {
    company: 'United States Air Force, Eielson AFB, AK',
    role: 'Client Systems Technician',
    period: 'January 2021 - May 2022',
    bullets: [
      'Procured, installed, configured, monitored, and maintained IT hardware and software in accordance with DoD policy and guidance.',
      'Troubleshot program and system malfunctions to restore normal functioning.',
      'Linked computer systems within the organization to increase compatibility and enable information sharing.'
    ]
  }
];


// ==========================
// EDUCATION DATA
// ==========================

const education = [
  {
    school: 'Western Governors University',
    degree: 'B.S. Computer Science',
    period: '2026'
  }
];


// ==========================
// CERTIFICATION DATA
// ==========================

const certifications = [
  'CompTIA Security+',
  'Linux Essentials',
  'ITIL 4 Foundation'
];


// ==========================
// ROUTES
// ==========================

// Home
app.get('/', (req, res) => {
  res.render('index');
});


// Skills
app.get('/skills', (req, res) => {
  res.render('skills', { skills });
});


// Experience + Education + Certifications
app.get('/experience', (req, res) => {
  res.render('experience', {
    experience,
    education,
    certifications
  });
});


// Projects
app.get('/projects', (req, res) => {
  res.render('projects', { projects });
});


// Contact
app.get('/contact', (req, res) => {
  res.render('contact');
});


// Contact Form Submission
app.post('/thanks', (req, res) => {
  res.render('thanks', {
    contact: req.body
  });
});


// ==========================
// SERVER
// ==========================

app.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});