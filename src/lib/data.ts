import type { Project, Skill, ExperienceItem, EducationItem, Certification, Achievement, LeadershipRole, Publication } from '@/types';
import {
  Cpu, Code2, Smartphone, Album, Briefcase, Lightbulb, LayoutPanelLeft, ToyBrick, Type, Wind, GitFork, Container, Flame, FigmaIcon, BrainCircuit, Languages, Server, Palette, Github, Database, DatabaseZap, Sigma, BarChart3, PieChart, Workflow, AreaChart, FileSpreadsheet, Binary, Coffee, FileCode2, CodeXml, Cloud, CloudCog, Calculator, Files, ShieldCheck, MailWarning, Users, Award, Trophy, Star, UserCheck, BriefcaseBusiness, GraduationCap, Link as LinkIcon, CalendarDays, Target, Table, BarChartHorizontalBig, ServerCog, FileText, Network, ScanSearch, BotMessageSquare
} from 'lucide-react';

// Updated User History for AI Curation
export const mockUserHistory = "User is Hemant Kumar, a Data Analytics professional interested in Python, Machine Learning, Data Analysis, and Full-Stack Development. Interested in projects showcasing these skills.";

// Updated Projects from Resume
export const mockProjects: Project[] = [
  {
    id: 'proj_browser_ext',
    title: 'Browser Extension – Malicious Link & File Detector',
    description: 'Developed a browser extension to detect and block malicious URLs and downloads in real-time using threat intelligence APIs and Gemini API for advanced risk analysis.',
    longDescription: 'This browser extension aims to enhance online security by proactively identifying and neutralizing threats from malicious links and file downloads. It integrates multiple threat intelligence APIs like URLScan.io and Google Safe Browsing, coupled with the Gemini API for sophisticated real-time risk assessment. The system employs data analysis, NLP, and machine learning techniques to understand the behavior of URL servers and predict potential threats.',
    thumbnailUrl: 'https://picsum.photos/seed/cybersecuritytech/600/400',
    dataAiHint: 'cyber security',
    tags: ['Browser Extension', 'Security', 'Python', 'JavaScript', 'Gemini API', 'NLP', 'Machine Learning', 'Data Analysis', 'URLScan.io', 'Google Safe Browsing'],
    category: 'AI & Security',
    icon: ScanSearch, // Changed from ShieldCheck
    date: 'Expected March 2025',
    // liveUrl: '#', // Add if available
    // sourceUrl: '#', // Add if available
  },
  {
    id: 'proj_spam_detector',
    title: 'Spam Email Detector using Machine Learning',
    description: 'Developed an ML model to classify emails as spam or not, utilizing Python libraries like Scikit-learn and Pandas for high accuracy in email filtering.',
    longDescription: 'This project focuses on building an efficient spam email detection system using machine learning. By leveraging Python libraries such as Scikit-learn for model training and Pandas for data preprocessing, the model accurately classifies emails. Key tasks involved feature extraction from email content, training various classification models, and evaluating their performance to achieve high precision in identifying spam, thereby improving user experience and email security.',
    thumbnailUrl: 'https://picsum.photos/seed/aimodel/600/400',
    dataAiHint: 'AI algorithm',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Pandas', 'NLP', 'Data Analysis', 'Email Filtering'],
    category: 'Machine Learning',
    icon: BotMessageSquare, // Changed from MailWarning
    date: 'Jan 2024',
    // liveUrl: '#', // Add if available
    // sourceUrl: '#', // Add if available
  },
  {
    id: 'proj_portfolio',
    title: 'Personal Portfolio Website (AdventureFolio)',
    description: 'The very portfolio you are browsing now, built with Next.js, Tailwind CSS, TypeScript, and Genkit for AI-powered features.',
    thumbnailUrl: 'https://picsum.photos/seed/webarchitecture/600/400',
    dataAiHint: 'web architecture',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript', 'Genkit', 'Vercel'],
    category: 'Web Development',
    icon: Code2, // Changed from Briefcase
    date: 'Ongoing',
    liveUrl: '#', // This site's URL
    // sourceUrl: '#', // Add if available
  },
];

// Updated Skills from Resume
export const mockSkills: Skill[] = [
  // Machine Learning & Data Analysis
  { id: 'skill_sklearn', name: 'Scikit-learn', icon: BrainCircuit, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_pandas', name: 'Pandas', icon: Table, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_numpy', name: 'NumPy', icon: Sigma, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_matplotlib', name: 'Matplotlib', icon: BarChart3, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_sql', name: 'SQL', icon: Database, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_mysql', name: 'MySQL', icon: DatabaseZap, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_mongodb', name: 'MongoDB', icon: Database, category: 'Machine Learning & Data Analysis', level: 'Intermediate' },
  { id: 'skill_powerbi', name: 'Power BI', icon: BarChartHorizontalBig, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_qlik', name: 'Qlik Sense', icon: PieChart, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_celonis', name: 'Celonis EMS', icon: Workflow, category: 'Machine Learning & Data Analysis', level: 'Proficient' },
  { id: 'skill_tableau', name: 'Tableau', icon: AreaChart, category: 'Machine Learning & Data Analysis', level: 'Intermediate' },
  { id: 'skill_excel', name: 'MS Excel', icon: FileSpreadsheet, category: 'Machine Learning & Data Analysis', level: 'Advanced' },

  // Programming & Development
  { id: 'skill_python', name: 'Python', icon: Code2, category: 'Programming & Development', level: 'Advanced' },
  { id: 'skill_c', name: 'C', icon: Binary, category: 'Programming & Development', level: 'Intermediate' },
  { id: 'skill_java', name: 'Java', icon: Coffee, category: 'Programming & Development', level: 'Intermediate' },
  { id: 'skill_javascript', name: 'JavaScript', icon: Languages, category: 'Programming & Development', level: 'Intermediate' },
  { id: 'skill_vbnet', name: 'VB.NET', icon: FileCode2, category: 'Programming & Development', level: 'Familiar' },
  { id: 'skill_flask', name: 'Flask', icon: ServerCog, category: 'Programming & Development', level: 'Intermediate' },
  { id: 'skill_react', name: 'React.js', icon: LayoutPanelLeft, category: 'Programming & Development', level: 'Intermediate' },
  { id: 'skill_html', name: 'HTML', icon: CodeXml, category: 'Programming & Development', level: 'Proficient' },
  { id: 'skill_css', name: 'CSS', icon: Palette, category: 'Programming & Development', level: 'Proficient' },
  { id: 'skill_git', name: 'Git', icon: GitFork, category: 'Programming & Development', level: 'Advanced' },
  { id: 'skill_github', name: 'GitHub', icon: Github, category: 'Programming & Development', level: 'Advanced' },

  // Cloud & Business Tools
  { id: 'skill_aws', name: 'AWS (Basics)', icon: Cloud, category: 'Cloud & Business Tools', level: 'Basic' },
  { id: 'skill_azure', name: 'Azure (Basics)', icon: CloudCog, category: 'Cloud & Business Tools', level: 'Basic' },
  { id: 'skill_tally', name: 'Tally ERP 9.0', icon: Calculator, category: 'Cloud & Business Tools', level: 'Familiar' },
  { id: 'skill_msoffice', name: 'MS Office Suite', icon: Files, category: 'Cloud & Business Tools', level: 'Advanced' },
];

// Updated Experience from Resume
export const mockExperience: ExperienceItem[] = [
  {
    id: 'exp_codingraja',
    role: 'Machine Learning Intern',
    company: 'Coding Raja Technologies',
    // companyUrl: '#', // Add if available
    duration: 'May 2024 – June 2024',
    descriptionPoints: [
      'Played a key role in the development, optimization, and fine-tuning of machine learning models to enhance algorithm performance, leading to improved results across various projects.',
      'Collaborated closely with cross-functional teams, contributing insights to refine model accuracy and operational efficiency, which directly impacted the overall project success.',
    ],
    logoUrl: 'https://picsum.photos/seed/airesearchlab/100/100',
    dataAiHint: 'AI research lab',
    tags: ['Machine Learning', 'Model Optimization', 'Algorithm Performance', 'Team Collaboration']
  },
  {
    id: 'exp_cazelabs',
    role: 'Python Intern',
    company: 'Caze Labs Pvt. Ltd.',
    // companyUrl: '#', // Add if available
    duration: 'March 2024 – May 2024',
    descriptionPoints: [
      'Led the development of Python-based applications aimed at optimizing system performance, improving the efficiency of data processing and computational tasks.',
      'Worked collaboratively with cross-functional teams, playing an integral role in enhancing algorithm scalability and ensuring seamless integration with existing systems.',
      'Automated and streamlined various data analysis processes using Python libraries and frameworks such as Pandas and NumPy, which significantly improved workflow and reduced manual effort.',
    ],
    logoUrl: 'https://picsum.photos/seed/pythoncode/100/100',
    dataAiHint: 'python code',
    tags: ['Python', 'System Optimization', 'Data Processing', 'Pandas', 'NumPy', 'Automation']
  },
  {
    id: 'exp_gfg',
    role: 'Freelance Tech Writer',
    company: 'GeeksforGeeks',
    companyUrl: 'https://www.geeksforgeeks.org/',
    duration: 'March 2023 – May 2024',
    descriptionPoints: [
      'Authored in-depth articles on a wide range of complex technical topics, breaking down intricate concepts into easy-to-understand content for readers at all skill levels.',
      'Developed content that enhanced my technical communication skills while contributing valuable resources to the GeeksforGeeks platform, helping others learn and grow in the tech field.',
    ],
    logoUrl: 'https://picsum.photos/seed/techdocs/100/100', 
    dataAiHint: 'technical documentation',
    tags: ['Technical Writing', 'Content Creation', 'Communication', 'EdTech']
  }
];

// Updated Education from Resume
export const mockEducation: EducationItem[] = [
  {
    id: 'edu_kjc',
    institution: 'Kristu Jayanti College, Bengaluru, IN',
    // institutionUrl: '#', // Add if available
    degree: 'Bachelor of Computer Science',
    fieldOfStudy: 'Computer Science & Analytics',
    duration: 'Expected July 2025',
    // description: '', // Add if more details are needed
    logoUrl: 'https://picsum.photos/seed/universitytech/100/100', 
    dataAiHint: 'university tech'
  }
];

// Certifications from Resume
export const mockCertifications: Certification[] = [
  { id: 'cert1', name: 'Qlik Sense Business Analyst Certification', issuer: 'Qlik', icon: PieChart },
  { id: 'cert2', name: 'Qlik Sense Data Architect Certification', issuer: 'Qlik', icon: DatabaseZap }, // Changed icon
  { id: 'cert3', name: 'Celonis Rising Star – Technical', issuer: 'Celonis', icon: Workflow },
  { id: 'cert4', name: 'Celonis Rising Star – Automation', issuer: 'Celonis', icon: ToyBrick },
  { id: 'cert5', name: 'DBMS Certification', issuer: 'NPTEL (IIT Kanpur)', icon: Database },
  { id: 'cert6', name: 'The Joy of Python Programming Certification', issuer: 'NPTEL (IIT Madras)', icon: Code2 },
  { id: 'cert7', name: 'Certified Computing Course (CCC)', issuer: 'NIELIT (Govt. of India)', icon: Cpu },
  { id: 'cert8', name: 'Machine Learning and Pandas Certification', issuer: 'Kaggle', icon: BrainCircuit },
  { id: 'cert9', name: 'RPA and Automation', issuer: 'UiPath', icon: Lightbulb },
  { id: 'cert10', name: 'Java & Python Programming', issuer: 'HackerRank', icon: CodeXml }, // Changed icon
];

// Achievements from Resume
export const mockAchievements: Achievement[] = [
  {
    id: 'ach1',
    title: 'Best Project Presentation and Business Analysis',
    issuer: 'Kristu Jayanti College',
    date: 'March 2025',
    description: 'For the WoodCorp O2C (Order to Cash) Process Mining project, utilizing Celonis EMS. Led a team of four, presenting optimized solutions based on process mining and data-driven insights, improving operational efficiency. Recognized for comprehensive business analysis and impactful recommendations.',
    icon: Trophy
  },
  {
    id: 'ach2',
    title: "2nd Runner-Up in 'Datathon 2024'",
    issuer: 'Kristu Jayanti College',
    date: 'Aug 2024', // Assuming this is the expected/actual date of award
    description: 'Awarded 2nd Runner-Up in the "Datathon 2024," a competitive data analysis competition. Highlighted ability to leverage advanced data analysis and visualization techniques using Qlik Sense and Power BI.',
    icon: Award
  },
  {
    id: 'ach3',
    title: "1st Runner-Up in 'Bhashan' Competition",
    issuer: 'Department of Hindi, Kristu Jayanti College',
    date: 'Sept 2023',
    description: 'Won 1st Runner-Up in the "Bhashan" (public speaking) competition. Speech in Hindi recognized for clarity, eloquence, and impactful delivery.',
    icon: Star
  },
  {
    id: 'ach4',
    title: '1st Runner-Up in Blogging Competition',
    issuer: 'Department of English, Kristu Jayanti College',
    date: 'Feb 2023',
    description: 'Secured 1st Runner-Up in a blogging competition. Entry recognized for creativity, research, and ability to communicate technical concepts engagingly.',
    icon: Star
  }
];

// Leadership Roles from Resume
export const mockLeadership: LeadershipRole[] = [
  {
    id: 'lead1',
    role: 'Organizer, International Conference on Computational Intelligence 2025 (ICCI 2025)',
    organization: 'Kristu Jayanti College',
    // duration: 'Ongoing',
    description: 'Involved in all aspects of conference organization, including logistics, speaker coordination, and attendee engagement, enhancing leadership and team coordination skills.',
    icon: Users
  },
  {
    id: 'lead2',
    role: 'Student Coordinator, International Conference on Computational Intelligence 2024 (ICCI 2024)',
    organization: 'Kristu Jayanti College',
    description: 'Spearheaded logistics and operational coordination, managing schedules, registration, and session arrangements. Collaborated with faculty and external partners.',
    icon: UserCheck
  },
  {
    id: 'lead4',
    role: 'Event Head, Xploit Cybersecurity Event (Synchrotech \'24)',
    organization: 'KJC, Bengaluru, IN',
    duration: 'Sep-2024',
    description: 'Led a cybersecurity CTF-style event focused on web exploitation, cryptography, and binary analysis. Boosted peer interest in ethical hacking and VAPT practices. participant engagement.', 
    icon: Target
  },
  {
    id: 'lead3',
    role: 'Class Representative',
    organization: 'Kristu Jayanti College',
    duration: '2023-2024',
    description: 'Led class activities, bridging communication between students and faculty, organizing events, and fostering a positive class environment.',
    icon: BriefcaseBusiness
  }
];

// Publications & Presentations Data
export const mockPublications: Publication[] = [
  {
    id: 'pub1',
    type: 'Journal Publication',
    title: 'Use Cases of Generative and Predictive AI for Enhancing Security in IoT and Cloud Systems',
    authors: 'Dr. Kalaiselvi K, Dr. Mary Jacob, Hemant Kumar, Hannah Jess John, George Shaiju',
    venue: 'Scopus Springer Q2 Journal',
    date: 'Feb-2025',
    description: 'The AI-Driven Security Architecture and Zero Trust Security Model provide a multi-layered approach to securing IoT and cloud systems. The architecture utilizes predictive threat analysis, synthetic data generation, and adaptive defence mechanisms, while the Zero Trust model enforces continuous verification, AI-powered access controls, and micro-segmentation. Together, they create an adaptive, resilient security framework that improves threat detection and response, ensuring robust protection against emerging risks.',
    icon: FileText,
  },
  {
    id: 'pub2',
    type: 'Conference Presentation',
    title: 'Cryptographic Algorithm Optimization: An Empirical Study on Enhancing Security and Efficiency',
    authors: 'Dr. Kalaiselvi K, Hemant Kumar, Hannah Jess John',
    venue: '7th International Conference on Computational Intelligence 2024 (Paper Presentation)',
    date: 'Feb-2024',
    description: 'This paper presents an empirical study on optimizing cryptographic algorithms to improve both security and efficiency. The study addresses the challenges faced by existing cryptographic systems and suggests enhancements that balance performance and security.',
    icon: Network, // Changed icon
  },
];

export const personalDetails = {
  name: "Hemant Kumar",
  title: "Data Analytics Professional",
  location: "Bengaluru, IN",
  phone: "+91 7651901638",
  email: "hemantk.research@gmail.com",
  linkedin: "https://www.linkedin.com/in/hemantkumar421",
  githubUsername: "hemantkumar421",
  summary: "Data Analytics professional with hands-on experience in Python, Machine Learning, and Data Analysis. Specialized in developing ML models, conducting data analysis, and creating insightful reports. Proven track record in delivering high-quality outputs in tech and research roles, with a focus on problem-solving and effective communication. Seeking a position as an Analyst, to contribute technical expertise in data analytics, problem-solving, and market research."
};
