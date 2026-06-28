export const profileData = {
  name: "Mark Jun W. Dominguez Jr.",
  role: "BIT - Computer Technology",
  location: "Argao, Cebu, Philippines",
  status: "Open to Work",
  education: "Cebu Technological University (2022-2026)",
  traits: ["Detail-Oriented", "Adaptable", "Team Player", "Goal-Oriented"],
  experience: [
    {
      role: "BAC Support OJT",
      company: "Cebu Technological University",
      period: "Jul 2025 - May 2026",
      focus: "Procurement, Document Prep & Admin Support"
    }
  ],
  currentlyLearning: ["Next.js", "Docker", "Cloud", "AI"],
  loves: ["Building Projects", "Continuous Learning", "Automation", "Problem Solving"]
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },

  { name: 'Certificates', href: '#certificates' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export const skillsList = {
  languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Python'],
  frameworks: ['React', 'Laravel', 'Tailwind CSS', 'Node.js', '.NET 8'],
  tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'MySQL', 'Firebase'],
  ai: ['ChatGPT', 'Claude', 'Cursor', 'V0', 'Replit', 'GitHub Copilot']
};



export const projectsData = [
  {
    id: 1,
    title: 'Smart Drainage Monitoring System',
    subtitle: 'IoT-Based Flood Prevention Using ESP32',
    categoryBadge: 'Research Project • IoT • Embedded Systems',
    description: 'An IoT-powered Smart Drainage Monitoring System developed to help prevent flooding through real-time blockage detection.',
    overview: 'An IoT-powered Smart Drainage Monitoring System developed to help prevent flooding through real-time blockage detection. The system continuously monitors drainage conditions using sensors connected to an ESP32 microcontroller and automatically sends SMS notifications whenever blockages are detected. The project focuses on proactive maintenance, automation, and improving public infrastructure through embedded systems.',
    projectDescription: 'This project demonstrates practical experience in IoT development, embedded systems, sensor integration, and automation. It showcases the complete software and hardware development lifecycle—from planning and prototyping to implementation, testing, and user evaluation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000',
    technologies: ['ESP32', 'C++', 'Arduino IDE', 'IoT', 'Embedded Systems', 'Wireless Communication', 'Sensor Integration', 'SMS Notification', 'Electronics', 'System Architecture'],
    highlights: [
      'Real-time drainage blockage detection',
      'ESP32-based embedded system',
      'Wireless IoT monitoring',
      'Automatic SMS alert notification',
      'Sensor integration',
      'Preventive flood management',
      'Automation for public infrastructure',
      'User acceptance evaluation using the UTAUT model',
    ],
    role: [
      'Full Stack Project Contributor',
      'IoT Developer',
      'Embedded Systems Developer',
      'Research & Documentation',
    ],
    achievements: [
      'Developed an IoT prototype for flood prevention.',
      'Integrated multiple sensors with ESP32.',
      'Designed an automated SMS notification workflow.',
      'Created a complete embedded monitoring system.',
      'Participated in research, documentation, and system evaluation.',
    ],
    stats: [
      { value: '150+', label: 'Survey Respondents', icon: 'users' },
      { value: 'Real-Time', label: 'Monitoring', icon: 'activity' },
      { value: 'SMS', label: 'Alert System', icon: 'bell' },
      { value: 'IoT', label: 'Automation', icon: 'cpu' },
    ],
    timeline: [
      { step: 'Planning', description: 'Project scoping and requirements gathering' },
      { step: 'System Design', description: 'Architecture design and component selection' },
      { step: 'Hardware Assembly', description: 'Physical circuit and sensor wiring' },
      { step: 'ESP32 Programming', description: 'Firmware development in C++ / Arduino IDE' },
      { step: 'Sensor Integration', description: 'Calibration and real-time data acquisition' },
      { step: 'SMS Notification', description: 'Automated alert system via GSM module' },
      { step: 'Testing', description: 'Unit, integration, and field testing' },
      { step: 'Research Evaluation', description: 'UTAUT-based user acceptance study' },
    ],
    // Place your thesis images inside public/projects/smart-drainage/
    // Format: { src: '/projects/smart-drainage/filename.jpg', caption: 'Description', orientation: 'landscape' | 'portrait' }
    galleryImages: [] as { src: string; caption: string; orientation?: 'landscape' | 'portrait' }[],
    buttons: [
      { label: 'View Gallery', icon: 'image', action: 'gallery' },
      { label: 'View Documentation', icon: 'book', href: '#' },
      { label: 'View Architecture', icon: 'git-branch', href: '#' },
    ],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Automation Tool',
    subtitle: '',
    categoryBadge: '',
    description: 'An AI powered automation tool for repetitive tasks.',
    overview: 'An AI powered automation tool for repetitive tasks.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    highlights: [
      'User authentication and authorization',
      'Real-time data synchronization',
      'Responsive and accessible UI',
      'Automated background tasks',
    ],
    role: ['Full Stack Developer'],
    achievements: [],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },

  {
    id: 4,
    title: 'Portfolio Website',
    subtitle: '',
    categoryBadge: '',
    description: 'A modern, developer-focused portfolio website.',
    overview: 'A modern, developer-focused portfolio website.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    highlights: [
      'User authentication and authorization',
      'Real-time data synchronization',
      'Responsive and accessible UI',
      'Automated background tasks',
    ],
    role: ['Full Stack Developer'],
    achievements: [],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
];

export const certificatesData = [
  {
    id: 3,
    title: 'Computer Systems Servicing NC II',
    issuer: 'Call Center Academy / TESDA',
    date: 'Nov 2024',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    link: '/certificates/css-nc2.pdf'
  }
];
