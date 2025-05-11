import type { Project } from '@/types';
import { Cpu, Code2, Smartphone, Album, Briefcase, Lightbulb } from 'lucide-react';

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
