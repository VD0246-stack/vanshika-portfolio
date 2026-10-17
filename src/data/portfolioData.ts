export interface FeaturedProject {
  number: string;
  title: string;
  categories: string;
  description: string;
  contribution: string;
}

export interface MoreProject {
  number: string;
  title: string;
  technologies: string[];
  description: string;
  contribution: string;
}

export interface SkillCategory {
  title: string;
  note?: string;
  skills: string[];
}

export interface LegacySkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  specialization?: string;
}

export interface LeadershipEntry {
  organization: string;
  role: string;
}

export interface CertificationItem {
  title: string;
  credentialUrl: string;
}

export interface ApproachStage {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  category: 'hackathon' | 'student-org' | 'leadership' | 'academic';
  description: string;
  contributions: string[];
  isConfirmed: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    wordmark: string;
    smallIntro: string;
    headline: {
      line1: string;
      line2: string;
    };
    description: string;
    academic: string[];
    availability: string;
    aboutHeading: string;
    aboutParagraphs: string[];
  };
  approach: ApproachStage[];
  featuredProjects: FeaturedProject[];
  moreProjects: MoreProject[];
  skillGroups: SkillCategory[];
  skills: LegacySkillGroup[];
  education: {
    degrees: EducationEntry[];
    cgpa: string;
    sgpa: string;
  };
  certifications: CertificationItem[];
  leadership: LeadershipEntry[];
  experience: ExperienceItem[];
  contact: {
    label: string;
    heading: string;
    description: string;
    closingLine: string;
    email: string;
    socialLinks: {
      name: string;
      url: string;
      note?: string;
    }[];
    emailStatus?: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Vanshika Dhaka',
    wordmark: 'VANSHIKA',
    smallIntro: 'COMPUTER SCIENCE · AI/ML · PRODUCT THINKING',
    headline: {
      line1: 'I build things that',
      line2: 'think.',
    },
    description:
      'I turn real-world problems into technology-driven ideas, learning what it takes to transform them into useful experiences.',
    academic: [
      'B.Tech CSE (AI & ML), Bennett University',
      'BS AI & Data Science, IIT Jodhpur',
    ],
    availability: 'OPEN TO INTERNSHIP OPPORTUNITIES',
    aboutHeading: 'Curiosity gets me started. Building teaches me the rest.',
    aboutParagraphs: [
      "I'm Vanshika Dhaka, a Computer Science student pursuing a B.Tech in Computer Science with AI & ML at Bennett University alongside a BS in AI and Data Science at IIT Jodhpur.",
      "I enjoy figuring out why problems exist, researching possible solutions, and working out how technology can make a meaningful difference. I've learned many of the technologies I use by starting from scratch, experimenting, and applying what I've learned to real projects.",
      "My strength lies in connecting the problem, the product idea, and the way a solution should work for its users. Whether I'm independently developing an application, researching AI capabilities, or shaping a product's user experience, I focus on making the solution useful, understandable, and practical.",
      "I'm particularly interested in software development, AI/ML, and product development — especially where technical problem-solving meets human needs.",
    ],
  },

  approach: [
    {
      number: '01',
      title: 'UNDERSTAND',
      description:
        'Identify the problem, the people affected, and what actually needs to change.',
    },
    {
      number: '02',
      title: 'EXPLORE',
      description:
        'Research existing approaches, investigate technologies, and consider alternative solutions.',
    },
    {
      number: '03',
      title: 'DESIGN',
      description:
        'Think through the user experience, product flow, and information people need.',
    },
    {
      number: '04',
      title: 'BUILD',
      description:
        'Learn the necessary tools, experiment, implement, test, and improve.',
    },
  ],

  featuredProjects: [
    {
      number: '01',
      title: 'KRISHISETU',
      categories: 'AI-ENABLED AGRICULTURAL MARKETPLACE · HACKATHON PROJECT',
      description:
        'An agricultural marketplace concept exploring how farmers can connect with different categories of buyers and improve access to markets. The project considers marketplace design, agricultural distribution, and AI-assisted verification.',
      contribution:
        'Led the core ideation, shaped the product flow and UI/UX direction, contributed to frontend development, and researched suitable AI models.',
    },
    {
      number: '02',
      title: 'FLASHGENIUS',
      categories: 'AI · RESEARCH · IDEATION · LEARNING TECHNOLOGY',
      description:
        'An AI-powered flashcard project exploring how learning materials can be transformed into structured revision resources and how technology can support a more personalized learning experience.',
      contribution:
        'Worked on ideation and research, exploring the problem, potential features, and ways AI could support learners.',
    },
    {
      number: '03',
      title: 'RURALCONNECT',
      categories: 'AGRICULTURAL TECHNOLOGY · INDEPENDENT DEVELOPMENT',
      description:
        'An independently developed project addressing challenges farmers can face during harvesting seasons, especially when they need access to additional agricultural workers and equipment. The concept focuses on helping farmers connect with the people and resources they need during busy farming periods.',
      contribution: 'Independently developed the project.',
    },
    {
      number: '04',
      title: 'START SMART',
      categories: 'HACKATHON PROJECT · FEATURE RESEARCH',
      description:
        'A project where I explored potential product features and researched how the proposed functionality could address the problem being solved.',
      contribution: 'Focused on researching and exploring the feature set.',
    },
  ],

  moreProjects: [
    {
      number: '05',
      title: 'SPORTS GROUND BOOKING SYSTEM',
      technologies: ['Python', 'Flask', 'HTML', 'CSS'],
      description:
        'A sports ground booking application designed to organize reservations, time-slot availability, and equipment selection.',
      contribution:
        'Independently developed the application, including its booking flow, validation, availability handling, and related functionality.',
    },
    {
      number: '06',
      title: 'ONLINE MOVIE BOOKING SYSTEM',
      technologies: ['Java', 'Spring Boot', 'JavaScript', 'SQL'],
      description:
        'A movie booking application covering movie browsing, showtime selection, seat selection, and booking management.',
      contribution:
        'Worked across the project, including backend development, application logic, database integration, and booking functionality.',
    },
  ],

  skillGroups: [
    {
      title: 'PROGRAMMING',
      note: 'C++ is currently being learned for Data Structures and Algorithms.',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
    },
    {
      title: 'WEB AND APPLICATION DEVELOPMENT',
      skills: [
        'HTML',
        'CSS',
        'React',
        'Node.js',
        'Express.js',
        'Flask',
        'Spring Boot',
      ],
    },
    {
      title: 'AI AND DATA',
      skills: [
        'AI model research',
        'AI integration',
        'Machine learning exploration',
        'Dataset research',
      ],
    },
    {
      title: 'DESIGN AND PRODUCT',
      skills: [
        'Figma',
        'Canva',
        'UI/UX design',
        'Product ideation',
        'Feature research',
        'User-flow planning',
      ],
    },
    {
      title: 'DATABASE AND DEVELOPMENT TOOLS',
      skills: ['SQL', 'Git', 'GitHub', 'VS Code'],
    },
  ],

  skills: [
    {
      category: 'Programming Languages',
      description:
        'Foundational languages used for problem solving and systems development',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++ (DSA)'],
    },
    {
      category: 'Web & Application Development',
      description: 'Modern frontends, microservices, and server frameworks',
      items: [
        'HTML',
        'CSS',
        'React',
        'Node.js',
        'Express.js',
        'Flask',
        'Spring Boot',
      ],
    },
    {
      category: 'AI & Data Exploration',
      description: 'Model research, AI integration, and dataset workflows',
      items: [
        'AI model research',
        'AI integration',
        'Machine learning exploration',
        'Dataset research',
      ],
    },
    {
      category: 'Design & Product',
      description: 'Ideation, user journeys, and interfaces',
      items: [
        'Figma',
        'Canva',
        'UI/UX design',
        'Product ideation',
        'Feature research',
        'User-flow planning',
      ],
    },
  ],

  education: {
    degrees: [
      {
        institution: 'BENNETT UNIVERSITY',
        degree: 'B.Tech in Computer Science and Engineering',
        specialization: 'Specializing in AI & ML',
      },
      {
        institution: 'IIT JODHPUR',
        degree: 'BS in AI and Data Science',
      },
    ],
    cgpa: '9.44',
    sgpa: '10.00',
  },

  certifications: [
    {
      title: 'Google Project Management Certificate',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/specialization/NWCZV0RBE22D',
    },
    {
      title: 'Meta Full-Stack Developer Certificate',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/specialization/PU9ZNQS80D5L',
    },
    {
      title: 'Data Structures and Algorithms Course — Udemy',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-155fb221-d9b8-47ef-ad55-a74ba8aeb001/',
    },
  ],

  leadership: [
    {
      organization: 'Google Developer Groups',
      role: 'Core team — PR and Outreach',
    },
    {
      organization: 'GeeksforGeeks',
      role: 'Core team — Management',
    },
    {
      organization: 'Women in Engineering',
      role: 'Core team — Management',
    },
    {
      organization: 'National Cadet Corps',
      role: 'Current rank: CQMS',
    },
  ],

  experience: [
    {
      period: 'CORE TEAM',
      role: 'PR & Outreach Core',
      organization: 'Google Developer Groups',
      category: 'leadership',
      description:
        'Technical community outreach, workshop organization, and student engagements.',
      contributions: [
        'Promoting tech initiatives and cross-campus development events.',
      ],
      isConfirmed: true,
    },
    {
      period: 'CORE TEAM',
      role: 'Management Core',
      organization: 'GeeksforGeeks',
      category: 'leadership',
      description:
        'Planning programming competitions, coding webinars, and peer workshops.',
      contributions: [
        'Coordinating collegiate developer events and algorithm learning sessions.',
      ],
      isConfirmed: true,
    },
    {
      period: 'CORE TEAM',
      role: 'Management Core',
      organization: 'Women in Engineering',
      category: 'leadership',
      description:
        'Organizing initiatives and mentorship programs for women in technical domains.',
      contributions: [
        'Supporting diversity and technical participation across campus.',
      ],
      isConfirmed: true,
    },
    {
      period: 'CADET CORPS',
      role: 'CQMS',
      organization: 'National Cadet Corps',
      category: 'leadership',
      description:
        'Leadership, discipline, supply management, and parade operations.',
      contributions: ['Serving as Company Quartermaster Sergeant.'],
      isConfirmed: true,
    },
  ],

  contact: {
    label: "LET'S CONNECT",
    heading: 'Good ideas begin with a conversation.',
    description:
      "I'm open to internship opportunities in software development, AI/ML, and product development. I'm always interested in learning, collaborating, and exploring problems worth solving.",
    closingLine: "Let's build something thoughtful.",
    email: 'vanshikadhaka0246@gmail.com',
    socialLinks: [
      {
        name: 'Email',
        url: 'mailto:vanshikadhaka0246@gmail.com',
        note: 'Direct email for professional inquiries',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vanshika-dhaka-6a4591368/',
        note: 'Connect for internships & collaborations',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/VD0246-stack',
        note: 'Repositories & technical explorations',
      },
      {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/jQzE9rfb5Y/',
        note: 'Algorithm & DSA practice',
      },
    ],
    emailStatus: 'vanshikadhaka0246@gmail.com',
  },
};
