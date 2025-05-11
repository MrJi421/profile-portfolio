import type { Project, Skill, ExperienceItem, EducationItem } from '@/types';
import { Cpu, Code2, Smartphone, Album, Briefcase, Lightbulb, LayoutPanelLeft, ToyBrick, Type, Wind, GitFork, Container, Flame, FigmaIcon, BrainCircuit, Languages, Server, Palette, BriefcaseBusiness } from 'lucide-react';

export const mockProjects: Project[] = [
  {
    id: 'proj1',
    title: 'AI Powered Art Generator',
    description: 'Create stunning visuals with AI based on text prompts.',
    thumbnailUrl: 'https://picsum.photos/seed/aiart/600/400',
    dataAiHint: 'abstract art',
    tags: ['AI', 'Generative Art', 'Python', 'React'],
    category: 'AI Innovation',
    icon: Cpu,
    liveUrl: '#',
    sourceUrl: '#',
    longDescription: 'This project leverages advanced generative adversarial networks (GANs) to produce unique artwork. Users can input descriptive text, and the AI interprets these prompts to generate corresponding images. The backend is built with Python and Flask, while the frontend uses React for a dynamic user experience.'
  },
  {
    id: 'proj2',
    title: 'Ecoleta Community App',
    description: 'A platform connecting waste collection points with people.',
    thumbnailUrl: 'https://picsum.photos/seed/communityapp/600/400',
    dataAiHint: 'nature community',
    tags: ['Web App', 'Sustainability', 'Node.js', 'React Native'],
    category: 'Web Development',
    icon: Code2,
    liveUrl: '#',
    longDescription: 'Ecoleta is a social impact project aimed at facilitating efficient waste collection. It features a web platform for registering collection points and a mobile app for users to find nearby points. Built with Node.js for the backend, React for the web frontend, and React Native for the mobile app.'
  },
  {
    id: 'proj3',
    title: 'AdventureFolio Showcase',
    description: 'The very portfolio you are browsing now, built with Next.js.',
    thumbnailUrl: 'https://picsum.photos/seed/portfolio/600/400',
    dataAiHint: 'modern website',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript', 'GenAI'],
    category: 'Personal Project',
    icon: Briefcase,
    liveUrl: '#',
    sourceUrl: '#',
    longDescription: 'AdventureFolio is a personal portfolio website designed to showcase projects with a focus on modern UI/UX, animations, and AI-powered project curation. It is built using Next.js, TypeScript, Tailwind CSS, and integrates Genkit for intelligent content features.'
  },
  {
    id: 'proj4',
    title: 'Mobile Fitness Tracker',
    description: 'Track your workouts and progress with this sleek mobile app.',
    thumbnailUrl: 'https://picsum.photos/seed/fitnesstracker/600/400',
    dataAiHint: 'fitness app',
    tags: ['Mobile App', 'SwiftUI', 'HealthKit', 'Firebase'],
    category: 'Mobile Development',
    icon: Smartphone,
    liveUrl: '#',
    longDescription: 'A comprehensive fitness tracking application for iOS, built with SwiftUI. It integrates with HealthKit to seamlessly sync workout data and provides users with detailed analytics and progress charts. Firebase is used for backend services like authentication and data storage.'
  },
   {
    id: 'proj5',
    title: 'Interactive Music Visualizer',
    description: 'Experience music in a new dimension with real-time audio visualization.',
    thumbnailUrl: 'https://picsum.photos/seed/musicvis/600/400',
    dataAiHint: 'music soundwave',
    tags: ['Creative Coding', 'p5.js', 'Web Audio API', 'JavaScript'],
    category: 'Creative Tech',
    icon: Album,
    liveUrl: '#',
    sourceUrl: '#',
    longDescription: 'This web-based music visualizer uses the Web Audio API to analyze sound frequencies in real-time and p5.js to generate captivating visual patterns. Users can upload their own music tracks or use sample audio to see dynamic art unfold.'
  },
  {
    id: 'proj6',
    title: 'Smart Home Automation Hub',
    description: 'Control your smart home devices from a centralized dashboard.',
    thumbnailUrl: 'https://picsum.photos/seed/smarthome/600/400',
    dataAiHint: 'smart home',
    tags: ['IoT', 'Raspberry Pi', 'Python', 'MQTT', 'Vue.js'],
    category: 'IoT Solutions',
    icon: Lightbulb,
    liveUrl: '#',
    longDescription: 'A DIY smart home hub built using a Raspberry Pi. It allows users to control various smart devices through a web interface created with Vue.js. Python scripts handle device communication via MQTT protocol, offering a flexible and extensible automation system.'
  }
];

export const mockUserHistory = "User has shown interest in AI-related projects and projects involving modern web technologies like React and Next.js. Previously viewed 'AI Powered Art Generator' and 'Mobile Fitness Tracker'.";

export const mockSkills: Skill[] = [
  { id: 'skill1', name: 'React.js', icon: LayoutPanelLeft, level: 'Advanced' },
  { id: 'skill2', name: 'Next.js', icon: LayoutPanelLeft, level: 'Advanced' },
  { id: 'skill3', name: 'Node.js', icon: ToyBrick, level: 'Intermediate' },
  { id: 'skill4', name: 'TypeScript', icon: Type, level: 'Advanced' },
  { id: 'skill5', name: 'Python', icon: Code2, level: 'Intermediate' },
  { id: 'skill6', name: 'Tailwind CSS', icon: Wind, level: 'Advanced' },
  { id: 'skill7', name: 'Git & GitHub', icon: GitFork, level: 'Advanced' },
  { id: 'skill8', name: 'Docker', icon: Container, level: 'Intermediate' },
  { id: 'skill9', name: 'Firebase', icon: Flame, level: 'Intermediate' },
  { id: 'skill10', name: 'Figma', icon: FigmaIcon, level: 'Proficient' },
  { id: 'skill11', name: 'GenAI / LLMs', icon: BrainCircuit, level: 'Intermediate' },
  { id: 'skill12', name: 'JavaScript (ES6+)', icon: Languages, level: 'Advanced' },
  { id: 'skill13', name: 'REST APIs', icon: Server, level: 'Advanced' },
  { id: 'skill14', name: 'UI/UX Design', icon: Palette, level: 'Proficient' },
];

export const mockExperience: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    companyUrl: '#',
    duration: 'Jan 2021 - Present',
    descriptionPoints: [
      'Led the development of a new client-facing dashboard using React, Next.js, and TypeScript, improving user engagement by 25%.',
      'Collaborated with backend teams to design and implement RESTful APIs.',
      'Mentored junior developers and conducted code reviews to maintain high code quality.',
      'Integrated AI-powered features for data analysis and visualization.'
    ],
    logoUrl: 'https://picsum.photos/seed/techinc/100/100',
    dataAiHint: 'company logo',
    tags: ['React', 'Next.js', 'TypeScript', 'AI', 'Leadership']
  },
  {
    id: 'exp2',
    role: 'Full Stack Developer',
    company: 'Innovatech Ltd.',
    companyUrl: '#',
    duration: 'Jun 2018 - Dec 2020',
    descriptionPoints: [
      'Developed and maintained web applications using Node.js, Express, and React.',
      'Worked on database design and management with PostgreSQL and MongoDB.',
      'Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment times by 40%.',
      'Contributed to agile development processes, including sprint planning and retrospectives.'
    ],
    logoUrl: 'https://picsum.photos/seed/innovatech/100/100',
    dataAiHint: 'company logo abstract',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Docker', 'Agile']
  }
];

export const mockEducation: EducationItem[] = [
  {
    id: 'edu1',
    institution: 'University of Advanced Technology',
    institutionUrl: '#',
    degree: 'Master of Science in Computer Science',
    fieldOfStudy: 'Specialization in Artificial Intelligence',
    duration: '2016 - 2018',
    description: 'Thesis on "Natural Language Processing for Sentiment Analysis". Graduated with honors.',
    logoUrl: 'https://picsum.photos/seed/unitech/100/100',
    dataAiHint: 'university building'
  },
  {
    id: 'edu2',
    institution: 'State College of Engineering',
    institutionUrl: '#',
    degree: 'Bachelor of Engineering in Software Engineering',
    duration: '2012 - 2016',
    description: 'Capstone project on "E-commerce Platform Development". Active member of the coding club.',
    logoUrl: 'https://picsum.photos/seed/stateeng/100/100',
    dataAiHint: 'college campus'
  }
];
