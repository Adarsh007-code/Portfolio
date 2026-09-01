export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Web Development' | 'Computer Science' | 'Cybersecurity';
  level: string;
  description: string;
  iconName: string;
  tags: string[];
  status: 'Core' | 'Active Practice' | 'Foundations' | 'Exploring';
}

export interface LearningTrack {
  id: string;
  title: string;
  category: string;
  description: string;
  focusAreas: string[];
  toolsAndConcepts: string[];
  status: string;
  iconName: string;
  accentColor: 'emerald' | 'cyan' | 'blue';
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  type: 'completed' | 'upcoming';
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  isPlayable?: boolean;
}

export interface TerminalCommand {
  command: string;
  output: string | string[];
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  iconName: string;
  placeholderHint: string;
  usernameDisplay: string;
}
