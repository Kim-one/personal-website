import {Search, Infinity, UserRoundGroup, Wrench} from 'lucide-react';
export const mockData = [
    {
        id: 1,
        status: 'in_progress',
        name: 'Bookish',
        slogan: 'Book tracking mobile app',
        description: '',
        imageUrl: '',
        techStack: '',
        platform: '',
    },
    {
        id: 2,
        status: 'in_progress',
        name: '876Explore',
        slogan: 'Directory for local hidden gems in Jamaica',
        description: '',
        imageUrl: '',
        techStack: '',
        platform: '',
    },
    {
        id: 3,
        status: 'learning',
        name: 'AI/ML',
        slogan: 'Anomaly Detection & Modern LLMs',
        description: '',
        imageUrl: '',
        techStack: '',
        platform: '',
    },
    {
        id: 4,
        status: 'learning',
        name: 'AI/ML',
        slogan: 'Anomaly Detection & Modern LLMs',
        description: '',
        imageUrl: '',
        techStack: '',
        platform: '',
    },
]

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
]
const date = new Date();
export const JournalEntries = [
    {
        id: 1,
        date: '2026-08-15',
        totalReadTime: '5',
        type: 'Tech',
        status: 'building',
        title: 'Why I chose SQLite for my Mobile Book Tracker',
        slug: 'mobile_app',
        image: '',
        description: 'A deep dive into offline-first local state architecture, query performance on mobile devices, and why relational storage felt right over plain key-value stores.',
        techStack: ['React Native', 'Expo', 'SQLite'],
        articleofmonth: '2026-10',
    },
    {
        id: 2,
        date: '2026-09-20',
        totalReadTime: '2',
        type: 'Thoughts',
        status: '',
        title: 'My Thoughts about life after university',
        slug: 'life_after_university',
        image:'',
        description: 'How my life has been since graduating in 2026.',
        techStack: [],
        articleofmonth: '2026-03',
    },
    {
        id: 3,
        date: '2026-09-27',
        totalReadTime: '6',
        type: 'Building',
        status: '',
        title: 'Building My First Mobile App for the App store',
        slug: 'buildingmyfirstmobilappfortheappstore',
        image:'/projects/mobile_app.png',
        description: 'What I learned taking an idea from an initial Figma sketch to a real React Native application with offline-first SQLite synchronization, gesture physics, and App Store submission readiness.',
        techStack: [`React \u00B7 Expo`, 'Offline First SQLite'],
        articleofmonth: '2026-09',
    },
];

export const Tools = [
    {
        title: 'Frontend',
        techStack: [
            'React', 'NextJs', 'React Native', 'TailwindCSS', 'TypeScript', 'JavaScript',
        ]
    },
    {
        title: 'Backend',
        techStack: [
            'Laravel', 'PHP', 'MySQL/SQL', 'NodeJs', 'Rest APIs', 'Python'
        ]
    },
    {
        title: 'Tools',
        techStack: [
            'Git', 'GitHub', 'Intellij', 'Expo', 'Figma',
        ]
    }
];

export const AreasOfInterest = [
    {
        type: 'Web',
        title: 'Web Applications',
        description: `I enjoy creating interfaces that are both function and thoughtfully designed. 
        I'm particularly interested in the space in web development where a technically goof application can also feel intuitive 
         and enjoyable to use.`,
        techStack: ['React', 'TailwindCSS', 'TypeScript'],
    },
    {
        type: 'Mobile',
        title: 'Mobile',
        description: `I've recently been exploring mobile development through React Native and Expo. Building my own apps
        has given me a change to think more deeply about user experience, local data, navigation, and what makes an application
        feel natural on a smaller screen.`,
        techStack: ['React Native', 'Expo', 'SQLite'],
    },
    {
        type: 'AI & ML',
        title: 'AI & Machine Learning',
        description: `AI and machine learning are areas I'm continuing to explore. I'm interested in understanding how these 
        technologies can be applied to solve practical problems rather than simply using them because they're popular.`,
        techStack: ['Python', 'Scikit-Learn', 'Transformers'],
    },
    {
        type: 'Games',
        title: 'Games',
        description: `Game development is another area I'd like to explore more. I like combining programming, 
        design, storytelling, and interaction into something people can experience.`,
        techStack: ['Interactive', 'Storytelling', 'Flow'],
    },
]

export const Principles = [
    {
        approach: 'Curious',
        description: `I like understanding how things work. If I come across something unfamiliar, my first instinct is usually
        to figure it out rather than avoid it.`,
        icon: Wrench,
    },
    {
        approach: 'Hands-on',
        description: `A lot of my learning happens through building. Sometimes the easiest way for me to understand a 
        technology is to create something with it.`,
        icon: Search,
    },{
        approach: 'Collaborative',
        description: `I enjoy working with people who bring different perspective to a project. Some of the best ideas
        come from conversations that change the way you originally thought about a problem.`,
        icon: UserRoundGroup,
    },{
        approach: 'Always Learning',
        description: `Technology changes constantly, which means there's always something new to learn. I'm confortable
        being a beginner, experimenting, making mistakes, and trying again.`,
        icon: Infinity,
    },

]

export type WorkItem = {
    type: string;
    time: string;
    company: string;
    jobTitle: string;
    companyType: string;
    jobDescription: string;
    stack: string[];
};

export type ResumeEntry = {
    year: string;
    workType: string;
    work: WorkItem[];
};

export const resumeContent: ResumeEntry[] = [
    {
        year: '2026',
        workType: 'Current Engagements',
        work: [
            {
                type: 'Client Work',
                time: 'Contract',
                company: 'RentalHist',
                jobTitle: 'Frontend / UX Developer',
                companyType: 'SaaS Property Management Platform',
                jobDescription: 'Architectured customer onboarding flows, built interactive occupancy, and revenue analytics dashboards,\n' +
                    '                and engineered reusable UI components with responsive ergonomics.',
                stack: [
                    'React', 'TailwindCSS', 'TypeScript'
                ]
            },
            {
                type: 'Client Work',
                time: '2026',
                company: 'Millennial Designs',
                jobTitle: 'Web Developer',
                companyType: '',
                jobDescription: `Developed high-conversion client facing website, structured modular design systems,
                and audited site performance and search accessibility for regional businesses`,
                stack: [
                    'React', 'TailwindCSS', 'TypeScript', 'SEO Auditing', 'UI Design'
                ]
            },
        ]
    },
    {
        year: '2025',
        workType: 'Externships',
        work: [
            {
                type: 'Externship',
                time: '2025',
                company: 'Extern',
                jobTitle: 'Interactive & Spacial Systems',
                companyType: `Snap AR · BeReal · Unreal Engine (Epic Games)`,
                jobDescription: `Hands-on project sprint exploring real-time rendering, augmented reality shaders, social
                UX heuristics, and interactive engine systems.`,
                stack: [
                    'PowerBI',
                ]
            },
        ]
    },
    {
        year: '2023',
        workType: 'Co-op',
        work: [
            {
                type: 'Co-op',
                time: '2025',
                company: 'Lucas Technologies & Analytics',
                jobTitle: 'Web Developer Intern',
                companyType: '',
                jobDescription: `Developed high-conversion client facing website, structured modular design systems,
                and audited site performance and search accessibility for regional businesses`,
                stack: [
                    'PowerBI',
                ]
            },
        ]
    }
]
