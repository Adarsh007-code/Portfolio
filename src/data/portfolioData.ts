import { NavItem, SkillItem, LearningTrack, ProjectItem, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Learning', href: '#learning', id: 'learning' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Problem Solving', href: '#dsa', id: 'dsa' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const PROFILE_DATA = {
  name: 'Adarsh',
  role: 'B.Tech CSE Student | Cybersecurity Enthusiast | Java Developer',
  university: 'GLA University, Mathura',
  degree: 'B.Tech — Computer Science Engineering',
  year: '2nd Year',
  duration: '2025 – Present',
  specialization: 'Cybersecurity',
  currentlyLearning: 'Ethical Hacking + DSA in Java',
  heroBio:
    "I’m a 2nd-year Computer Science student at GLA University, Mathura, passionate about cybersecurity, ethical hacking, and problem solving. I’m currently strengthening my DSA skills with Java while exploring the world of cybersecurity and building my technical foundation.",
  aboutBio: [
    "I am currently pursuing my B.Tech in Computer Science at GLA University, Mathura and am in my second year.",
    "My main interest is cybersecurity, particularly understanding how systems work, identifying vulnerabilities, and learning ethical hacking concepts.",
    "Alongside cybersecurity, I am actively practicing Data Structures & Algorithms in Java to improve my problem-solving and programming skills.",
    "I believe in learning by building and continuously improving my technical skills.",
  ],
  email: 'codeadarsh24@gmail.com',
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Java',
    category: 'Programming',
    level: 'Core Language',
    description: 'Object-oriented programming, standard collections, algorithmic problem solving & DSA implementations.',
    iconName: 'Code',
    tags: ['OOP', 'Collections', 'DSA', 'Core Java'],
    status: 'Active Practice',
  },
  {
    name: 'C Programming',
    category: 'Programming',
    level: 'Foundations',
    description: 'Memory allocation, pointers, structures, procedural logic, and low-level system understanding.',
    iconName: 'Cpu',
    tags: ['Pointers', 'Memory', 'Structures', 'CLI'],
    status: 'Core',
  },

  // Web Development
  {
    name: 'HTML',
    category: 'Web Development',
    level: 'Markup & Structure',
    description: 'Semantic markup, accessibility foundations, DOM structuring, and responsive web elements.',
    iconName: 'FileCode',
    tags: ['HTML5', 'Semantic Web', 'DOM', 'Forms'],
    status: 'Foundations',
  },
  {
    name: 'CSS',
    category: 'Web Development',
    level: 'Styling & Layouts',
    description: 'Modern styling, Flexbox, CSS Grid, responsive design, and visual aesthetics.',
    iconName: 'Palette',
    tags: ['CSS3', 'Flexbox', 'Grid', 'Responsive'],
    status: 'Foundations',
  },

  // Computer Science
  {
    name: 'Data Structures & Algorithms',
    category: 'Computer Science',
    level: 'Continuous Practice',
    description: 'Arrays, Strings, Linked Lists, Stacks, Queues, Recursion, Searching, and Sorting algorithms.',
    iconName: 'Binary',
    tags: ['Arrays', 'Searching', 'Sorting', 'Time Complexity'],
    status: 'Active Practice',
  },
  {
    name: 'Object-Oriented Programming',
    category: 'Computer Science',
    level: 'Concept Mastery',
    description: 'Encapsulation, Inheritance, Polymorphism, Abstraction, and clean modular code design.',
    iconName: 'Boxes',
    tags: ['Classes', 'Inheritance', 'Polymorphism', 'Encapsulation'],
    status: 'Core',
  },
  {
    name: 'Problem Solving',
    category: 'Computer Science',
    level: 'Active Discipline',
    description: 'Analytical decomposition, algorithmic thinking, edge-case analysis, and time/space complexity optimization.',
    iconName: 'Zap',
    tags: ['Logic', 'Complexity Analysis', 'Debugging', 'Optimization'],
    status: 'Active Practice',
  },

  // Cybersecurity
  {
    name: 'Cybersecurity Fundamentals',
    category: 'Cybersecurity',
    level: 'Core Discipline',
    description: 'CIA Triad (Confidentiality, Integrity, Availability), threat models, authentication, and security principles.',
    iconName: 'Shield',
    tags: ['CIA Triad', 'Threat Models', 'Access Control', 'Defense'],
    status: 'Exploring',
  },
  {
    name: 'Ethical Hacking',
    category: 'Cybersecurity',
    level: 'Active Learning',
    description: 'Reconnaissance, scanning methodologies, vulnerability identification, and security auditing ethics.',
    iconName: 'Terminal',
    tags: ['Recon', 'Vulnerability Assessment', 'Methodology', 'Security Audits'],
    status: 'Exploring',
  },
  {
    name: 'Networking Fundamentals',
    category: 'Cybersecurity',
    level: 'Foundations',
    description: 'OSI 7-Layer Model, TCP/IP stack, IP addressing, DNS, DHCP, routing, and basic protocol analysis.',
    iconName: 'Network',
    tags: ['TCP/IP', 'OSI Model', 'DNS/DHCP', 'Protocols'],
    status: 'Exploring',
  },
  {
    name: 'Linux Fundamentals',
    category: 'Cybersecurity',
    level: 'Foundations',
    description: 'Linux shell navigation, command-line utilities, permissions (chmod/chown), processes, and file system hierarchy.',
    iconName: 'HardDrive',
    tags: ['Bash', 'Permissions', 'Process Mgmt', 'File System'],
    status: 'Exploring',
  },
];

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    category: 'Offensive & Defensive Security',
    description:
      'Learning cybersecurity concepts, security fundamentals, vulnerabilities, and ethical hacking methodologies.',
    focusAreas: [
      'Vulnerability identification & scanning concepts',
      'Reconnaissance and enumeration methodologies',
      'Web application security fundamentals',
      'Ethical hacking frameworks & responsible disclosure',
    ],
    toolsAndConcepts: ['Vulnerability Assessment', 'Security Scanning', 'OWASP Top 10 Basics', 'Lab Practice'],
    status: 'Actively Learning',
    iconName: 'ShieldAlert',
    accentColor: 'emerald',
  },
  {
    id: 'dsa-java',
    title: 'DSA with Java',
    category: 'Problem Solving & Logic',
    description:
      'Practicing Data Structures & Algorithms in Java and solving programming problems to improve logical thinking and problem-solving.',
    focusAreas: [
      'Core Java OOP & Standard Collections framework',
      'Arrays, Strings, Two Pointers, and Binary Search',
      'Linked Lists, Stacks, and Queue implementations',
      'Time and Space complexity (Big-O analysis)',
    ],
    toolsAndConcepts: ['Java Standard Library', 'Big-O Analysis', 'Recursion & Sorting', 'Problem Solving'],
    status: 'Daily Practice',
    iconName: 'Code2',
    accentColor: 'cyan',
  },
  {
    id: 'cybersecurity-foundations',
    title: 'Cybersecurity',
    category: 'Core Infrastructure',
    description:
      'Building a strong foundation in networking, Linux, security concepts, and cybersecurity practices.',
    focusAreas: [
      'TCP/IP suite, OSI layers, and packet flow',
      'Linux CLI commands, permissions, and system administration',
      'Authentication, authorization, and cryptographic basics',
      'Defensive measures and secure system configurations',
    ],
    toolsAndConcepts: ['OSI Model', 'Linux Bash', 'TCP/UDP Protocols', 'Network Defense'],
    status: 'Foundations Building',
    iconName: 'Lock',
    accentColor: 'blue',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'number-guessing-game',
    title: 'Number Guessing Game',
    tagline: 'Interactive Java Console & Simulation Project',
    description:
      'A Java-based number guessing game developed as a programming project to practice Java fundamentals, conditional logic, loops, and user input validation.',
    technologies: ['Java', 'Control Flow', 'Scanner API', 'Math.random()', 'Exception Handling'],
    type: 'completed',
    githubUrl: 'https://github.com/your-username/number-guessing-game',
    demoUrl: '#',
    highlights: [
      'Dynamic random number generation with custom difficulty ranges (1-50, 1-100, 1-500)',
      'Adaptive feedback system giving "Too High" / "Too Low" hints with attempt counter',
      'Robust input validation preventing crashes from non-numeric user inputs',
      'Score tracking and replay mechanism with clean loop structures',
    ],
    isPlayable: true,
  },
  {
    id: 'upcoming-security-project',
    title: 'More Projects Coming Soon...',
    tagline: 'In Development / Future Security Tool',
    description:
      'Currently designing and learning concepts for upcoming projects in cybersecurity and Java tools. Stay tuned as new repositories and experiments are added.',
    technologies: ['Cybersecurity', 'Networking', 'Java', 'Linux'],
    type: 'upcoming',
    githubUrl: 'https://github.com/your-username',
    highlights: [
      'Upcoming: Network port scanning & packet analysis exploration',
      'Upcoming: Algorithm visualizer & data structures tool in Java',
      'Building in public and adding real code as learning progresses',
    ],
    isPlayable: false,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    label: 'GitHub Profile',
    url: 'https://github.com/Adarsh007-code',
    iconName: 'Github',
    placeholderHint: 'github.com/Adarsh007-code',
    usernameDisplay: 'github.com/Adarsh007-code',
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/adarsh-raj-631b63376/',
    iconName: 'Linkedin',
    placeholderHint: 'linkedin.com/in/adarsh-raj-631b63376',
    usernameDisplay: 'linkedin.com/in/adarsh-raj',
  },
  {
    name: 'LeetCode',
    label: 'LeetCode Profile',
    url: 'https://leetcode.com/u/Adarsh24leet/',
    iconName: 'Code',
    placeholderHint: 'leetcode.com/u/Adarsh24leet',
    usernameDisplay: 'leetcode.com/u/Adarsh24leet',
  },
  {
    name: 'Email',
    label: 'Direct Email',
    url: 'mailto:codeadarsh24@gmail.com',
    iconName: 'Mail',
    placeholderHint: 'Direct Mail Link',
    usernameDisplay: 'codeadarsh24@gmail.com',
  },
];

export const TERMINAL_PRESETS: Record<string, string[]> = {
  whoami: [
    'User: Adarsh',
    'Role: 2nd-Year B.Tech CSE Student',
    'University: GLA University, Mathura',
    'Specialization: Cybersecurity & Ethical Hacking',
  ],
  status: [
    '[✓] Status: Learning + Building',
    '[✓] Daily Discipline: Java DSA Practice + Problem Solving',
    '[✓] Active Roadmap: Networking & Ethical Hacking Foundations',
  ],
  focus: [
    'Primary: Ethical Hacking + DSA in Java',
    'Secondary: Linux Fundamentals + Computer Networking',
  ],
  skills: [
    'Programming: Java, C',
    'Web Dev: HTML, CSS',
    'CS Core: Data Structures & Algorithms, OOP, Problem Solving',
    'Cybersecurity: Security Fundamentals, Ethical Hacking, Networking, Linux',
  ],
  education: [
    'Institution: GLA University, Mathura',
    'Degree: B.Tech Computer Science Engineering',
    'Timeline: 2025 - Present (Currently 2nd Year)',
  ],
  projects: [
    '1. Number Guessing Game (Java) - Practice Java loops, conditionals & input handling',
    '2. More Projects Coming Soon... (Currently building)',
  ],
  contact: [
    'Email: codeadarsh24@gmail.com',
    'GitHub: https://github.com/Adarsh007-code',
    'LinkedIn: https://www.linkedin.com/in/adarsh-raj-631b63376/',
    'LeetCode: https://leetcode.com/u/Adarsh24leet/',
  ],
  help: [
    'Available commands:',
    '  whoami       - Display identity and academic status',
    '  status       - Check current learning and building status',
    '  focus        - Display current study focus areas',
    '  skills       - List technical skill categories',
    '  projects     - View project repositories',
    '  education    - Display university details',
    '  contact      - Get contact details and links',
    '  ping         - Test system ping and response time',
    '  matrix       - Toggle cyber terminal stream effect',
    '  clear        - Clear the terminal screen',
  ],
};
