// Central Portfolio Data Configuration
// Easily update your profile, projects, skills, and links from this single file.

const portfolioData = {
    personal: {
        name: "Kanimozhi R",
        roleTitle: "AI & Data Science Student | Data Analyst | Full-Stack Developer",
        heroTagline: "I build data-driven applications, intelligent solutions, and full-stack products that solve real-world problems.",
        aboutHeading: "About Me",
        aboutBio: [
            "I am a B.Tech Artificial Intelligence and Data Science student at Kalaignarkarunanidhi Institute of Technology, Coimbatore. I am passionate about engineering intelligent solutions that bridge data science and scalable full-stack development.",
            "My core interests encompass Data Analytics, Machine Learning, Artificial Intelligence, Database Management, and Full-Stack Development. I focus on building robust, end-to-end software solutions that solve real-world challenges with clean, efficient code."
        ],
        email: "kani74608@gmail.com",
        location: "Coimbatore, Tamil Nadu, India",
        resumeUrl: "assets/Kanimozhi_R_Resume.pdf",
        socialLinks: {
            github: "https://github.com/kanimozhi-Rajendran",
            linkedin: "https://www.linkedin.com/in/kanimozhi-r-86267437b/",
            email: "mailto:kani74608@gmail.com"
        }
    },

    education: [
        {
            degree: "B.Tech in Artificial Intelligence & Data Science",
            institution: "Kalaignarkarunanidhi Institute of Technology, Coimbatore",
            score: "CGPA: 8.88 / 10",
            duration: "2022 – 2026",
            highlights: [
                "Strong foundation in Data Structures, Algorithms, Machine Learning, and Database Management.",
                "Consistent academic excellence with a focus on real-world AI and software projects."
            ]
        }
    ],

    experience: [
        {
            company: "UK Infotech",
            role: "Data / ML Intern",
            duration: "May 2026 – June 2026",
            technologies: ["Python", "Pandas", "NumPy", "Machine Learning", "Data Analytics"],
            description: "Engaged in data analysis and ML model workflows on HR dataset projects, performing exploratory data analysis, data preprocessing, and analytical reporting."
        },
        {
            company: "Cognifyz Technologies",
            role: "Web Development Intern",
            duration: "Internship",
            technologies: ["HTML", "CSS", "JavaScript", "Responsive UI"],
            description: "Developed responsive web interfaces, implemented modern styling standards, and enhanced user experience across cross-browser environments."
        }
    ],

    skills: {
        programming: [
            { name: "Python", icon: "fa-brands fa-python" },
            { name: "Java", icon: "fa-brands fa-java" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "SQL", icon: "fa-solid fa-database" }
        ],
        dataAndAi: [
            { name: "Machine Learning", icon: "fa-solid fa-brain" },
            { name: "Data Analytics", icon: "fa-solid fa-chart-line" },
            { name: "Pandas", icon: "fa-solid fa-table" },
            { name: "NumPy", icon: "fa-solid fa-calculator" },
            { name: "Data Visualization", icon: "fa-solid fa-chart-pie" }
        ],
        frontend: [
            { name: "HTML5", icon: "fa-brands fa-html5" },
            { name: "CSS3", icon: "fa-brands fa-css3-alt" },
            { name: "React", icon: "fa-brands fa-react" },
            { name: "React Native", icon: "fa-brands fa-react" }
        ],
        backend: [
            { name: "Node.js", icon: "fa-brands fa-node-js" },
            { name: "Express.js", icon: "fa-solid fa-server" }
        ],
        database: [
            { name: "MySQL", icon: "fa-solid fa-database" },
            { name: "MongoDB", icon: "fa-solid fa-leaf" },
            { name: "Mongoose", icon: "fa-solid fa-diagram-project" }
        ],
        tools: [
            { name: "Git", icon: "fa-brands fa-git-alt" },
            { name: "GitHub", icon: "fa-brands fa-github" },
            { name: "VS Code", icon: "fa-solid fa-code" }
        ]
    },

    projects: [
        {
            id: "gov-scheme-advisor",
            title: "AI Personalized Government Scheme Advisor",
            category: "featured",
            tagline: "Intelligent eligibility classification and explainable scheme recommendations.",
            description: "An intelligent application that helps citizens discover government schemes tailored to their demographic profile and eligibility criteria with ML scoring.",
            features: [
                "Eligibility filtering & ML classification",
                "Dynamic eligibility & confidence scores",
                "Scheme ranking & explainable recommendations",
                "Interactive AI Chatbot & analytics dashboard"
            ],
            technologies: ["React", "Node.js", "Python", "Machine Learning", "MongoDB"],
            image: "assets/projects/government-scheme-advisor.png",
            video: "assets/videos/government-scheme-advisor.mp4",
            demoVideo: "assets/videos/government-scheme-advisor.mp4",
            hasVideo: true,
            githubUrl: "https://github.com/kanimozhi-Rajendran",
            demoUrl: "assets/videos/government-scheme-advisor.mp4"
        },
        {
            id: "smart-school",
            title: "Smart School Management System",
            category: "featured",
            tagline: "Comprehensive role-based platform for schools, teachers, and students.",
            description: "A complete school management platform featuring isolated Student, Teacher, and Admin portals with automated attendance, grade calculations, and verification.",
            features: [
                "Role-based portals (Student, Teacher, Admin)",
                "Attendance management & timetable generation",
                "Marks calculation & grade management",
                "Excel import & Student Reg/DOB verification"
            ],
            technologies: ["React", "Node.js", "Express.js", "MySQL"],
            image: "assets/projects/smart-school.png",
            video: "assets/videos/smart-school.mp4",
            demoVideo: "assets/videos/smart-school.mp4",
            hasVideo: true,
            githubUrl: "https://github.com/kanimozhi-Rajendran",
            demoUrl: "assets/videos/smart-school.mp4"
        },
        {
            id: "namma-covai",
            title: "Namma Covai",
            category: "featured",
            tagline: "Smart city & tourism discovery mobile application for Coimbatore.",
            description: "A mobile application for discovering iconic places, restaurants, stays, and tourism-related locations across Coimbatore with categorized browsing and geolocation.",
            features: [
                "Curated tourism places, stays & dining spots",
                "Detailed location information & imagery",
                "Category-based browsing & interactive filters",
                "Location-aware navigation & discovery"
            ],
            technologies: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB"],
            image: "assets/projects/namma-covai.png",
            video: "assets/videos/namma-covai.mp4",
            demoVideo: "assets/videos/namma-covai.mp4",
            hasVideo: true,
            githubUrl: "https://github.com/kanimozhi-Rajendran",
            demoUrl: "assets/videos/namma-covai.mp4"
        },
        {
            id: "saas-crm",
            title: "SaaS CRM System",
            category: "featured",
            tagline: "Enterprise role-based CRM with AI onboarding and lead pipelines.",
            description: "A full-scale role-based CRM platform designed to streamline lead management, client lifecycle tracking, and sales analytics with intelligent onboarding.",
            features: [
                "Admin, Sales Person, and Customer roles",
                "Role-based authentication & Google OAuth",
                "Real-time lead tracking & pipeline management",
                "AI onboarding assistant & executive dashboard"
            ],
            technologies: ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB"],
            image: "assets/projects/saas-crm.png",
            video: "saas-crm-demo.mp4",
            demoVideo: "saas-crm-demo.mp4",
            hasVideo: true,
            githubUrl: "https://github.com/kanimozhi-Rajendran",
            demoUrl: "saas-crm-demo.mp4"
        },
        {
            id: "healthcare-management",
            title: "Healthcare Management System",
            category: "featured",
            tagline: "Data-driven health analysis and customized lifestyle recommendations.",
            description: "A data-driven healthcare management system analyzing patient biometric inputs to generate personalized dietary and exercise recommendations.",
            features: [
                "Patient vitals & health record tracking",
                "Biometric analytics & diagnostic charts",
                "Dietary & exercise recommendation engine",
                "Doctor-patient appointment metrics"
            ],
            technologies: ["React", "Data Science", "Python", "Analytics", "Node.js"],
            image: "assets/projects/healthcare-management.png",
            video: "assets/videos/healthcare-management.mp4",
            demoVideo: "assets/videos/healthcare-management.mp4",
            hasVideo: true,
            githubUrl: "https://github.com/kanimozhi-Rajendran/Healthcare-Management-System",
            demoUrl: "assets/videos/healthcare-management.mp4"
        },
        {
            id: "student-task-manager",
            title: "Student Task Manager",
            category: "additional",
            tagline: "Productivity tracking tool for academic task prioritization.",
            description: "A web application that helps students organize course tasks, deadlines, priorities, and academic milestones with visual progress metrics.",
            features: [
                "Task prioritization and deadline tracking",
                "Clean categorization by subject and urgency",
                "Interactive task status updates"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
            image: "assets/projects/student-task-manager.png",
            video: "assets/videos/student-task-manager.mp4",
            demoVideo: "assets/videos/student-task-manager.mp4",
            hasVideo: true,
            githubUrl: "https://github.com/kanimozhi-Rajendran",
            demoUrl: "assets/videos/student-task-manager.mp4"
        },
        {
            id: "todo-app",
            title: "Todo Application",
            category: "additional",
            tagline: "Task management web tool with persistent state and responsive UI.",
            description: "A lightweight task tracking application with clean styling, instant local storage persistence, filtering, and cross-device optimization.",
            features: [
                "CRUD operations with persistent local state",
                "Task completion filters and responsive layout",
                "Minimalist user interface"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
            image: "assets/projects/todo-app.png",
            video: "assets/videos/todo-app.mp4",
            demoVideo: "assets/videos/todo-app.mp4",
            hasVideo: true,
            githubUrl: "https://github.com/kanimozhi-Rajendran/TodoApp",
            demoUrl: "assets/videos/todo-app.mp4"
        }
    ],

    featuredCertifications: [
        {
            id: "nptel-java-programming",
            title: "Programming in Java — Elite Certificate",
            issuer: "NPTEL / IIT Kharagpur (SWAYAM)",
            subtitleBadge: "Elite — 77% Score | 19,306 candidates certified",
            image: "assets/certs/nptel-java-programming.png",
            fallbackImage: "assets/certs/nptel-java-programming.svg",
            rollNo: "NPTEL26CS36S863800119",
            link: "https://archive.nptel.ac.in/", // [ADD_VERIFICATION_LINK] - Can be updated with direct QR / portal verification URL
            verifyAction: "nptel-verify",
            isFeatured: true
        },
        {
            id: "mongodb-ai-agents",
            title: "Building AI Agents with MongoDB",
            issuer: "MongoDB",
            image: "assets/certs/mongodb-ai-agents.png",
            fallbackImage: "assets/certs/mongodb-ai-agents.svg",
            link: "https://www.credly.com/badges/de0864f3-81a3-488f-b596-4752d23ba28f",
            isFeatured: true
        },
        {
            id: "mongodb-rag-apps",
            title: "Building RAG Apps Using MongoDB",
            issuer: "MongoDB",
            image: "assets/certs/mongodb-rag-apps.png",
            fallbackImage: "assets/certs/mongodb-rag-apps.svg",
            link: "https://www.credly.com/badges/1b37061d-986c-40e0-9ea0-83bf389c4fdd",
            isFeatured: true
        }
    ],

    allCertifications: [
        {
            id: "mongodb-sql-to-document",
            title: "From Relational Model (SQL) to MongoDB's Document Model",
            issuer: "MongoDB",
            image: "assets/certs/mongodb-sql-to-document.png",
            fallbackImage: "assets/certs/mongodb-sql-to-document.svg",
            link: "https://www.credly.com/badges/982e3670-2a01-47ac-9349-4b11b0886317"
        },
        {
            id: "cisco-python-essentials-2",
            title: "Python Essentials 2",
            issuer: "Cisco Networking Academy × OpenEDG Python Institute",
            image: "assets/certs/cisco-python-essentials-2.png",
            fallbackImage: "assets/certs/cisco-python-essentials-2.svg",
            pdfFile: "assets/certs/cisco-python-essentials-2.pdf",
            isPdf: true,
            link: "assets/certs/cisco-python-essentials-2.svg" // [ADD_LINK_IF_AVAILABLE] - Links to certificate SVG preview/PDF
        },
        {
            id: "ibm-ai-fundamentals-language-vision",
            title: "AI Fundamentals: Language and Vision in AI",
            issuer: "IBM SkillsBuild",
            image: "assets/certs/ibm-ai-fundamentals-language-vision.png",
            fallbackImage: "assets/certs/ibm-ai-fundamentals-language-vision.svg",
            link: "assets/certs/ibm-ai-fundamentals-language-vision.svg" // [ADD_LINK_IF_AVAILABLE] - Replace with IBM Credential link
        },
        {
            id: "ibm-ai-fundamentals-foundations",
            title: "AI Fundamentals: Foundations for Understanding AI",
            issuer: "IBM SkillsBuild",
            image: "assets/certs/ibm-ai-fundamentals-foundations.png",
            fallbackImage: "assets/certs/ibm-ai-fundamentals-foundations.svg",
            link: "assets/certs/ibm-ai-fundamentals-foundations.svg" // [ADD_LINK_IF_AVAILABLE] - Replace with IBM Credential link
        },
        {
            id: "cisco-data-analytics-essentials",
            title: "Data Analytics Essentials",
            issuer: "Cisco Networking Academy",
            image: "assets/certs/cisco-data-analytics-essentials.png",
            fallbackImage: "assets/certs/cisco-data-analytics-essentials.svg",
            pdfFile: "assets/certs/cisco-data-analytics-essentials.pdf",
            isPdf: true,
            link: "assets/certs/cisco-data-analytics-essentials.svg" // [ADD_LINK_IF_AVAILABLE] - Links to certificate SVG preview/PDF
        },
        {
            id: "cisco-intro-cybersecurity",
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            image: "assets/certs/cisco-intro-cybersecurity.png",
            fallbackImage: "assets/certs/cisco-intro-cybersecurity.svg",
            pdfFile: "assets/certs/cisco-intro-cybersecurity.pdf",
            isPdf: true,
            link: "assets/certs/cisco-intro-cybersecurity.svg" // [ADD_LINK_IF_AVAILABLE] - Links to certificate SVG preview/PDF
        }
    ],

    // Backward compatibility pointer
    get certifications() {
        return [...this.featuredCertifications, ...this.allCertifications];
    },

    achievements: [
        {
            id: "leetcode-200-days",
            title: "LeetCode 200 Days Badge 2026",
            label: "LeetCode 200 Days",
            stat: "Consistency — DSA",
            icon: "fa-solid fa-fire-flame-curved",
            accentColor: "#FFA116",
            badgeImage: "assets/certs/leetcode-200-days.svg",
            link: "https://leetcode.com/u/kit28adb072/"
        },
        {
            id: "leetcode-100-days",
            title: "LeetCode 100 Days Badge 2026",
            label: "LeetCode 100 Days",
            stat: "Problem Solving",
            icon: "fa-solid fa-bolt",
            accentColor: "#38bdf8",
            badgeImage: "assets/certs/leetcode-100-days.svg",
            link: "https://leetcode.com/u/kit28adb072/"
        },
        {
            id: "leetcode-50-days",
            title: "LeetCode 50 Days Badge 2026",
            label: "LeetCode 50 Days",
            stat: "Active Streak",
            icon: "fa-solid fa-medal",
            accentColor: "#c084fc",
            badgeImage: "assets/certs/leetcode-50-days.svg",
            link: "https://leetcode.com/u/kit28adb072/"
        },
        {
            id: "codechef-div3",
            title: "CodeChef — Division 3, Rating 1436",
            label: "CodeChef Division 3",
            stat: "Rating 1436",
            icon: "fa-solid fa-laptop-code",
            accentColor: "#f59e0b",
            link: "https://www.codechef.com/users/kit28adb072"
        }
    ],

    codingProfiles: [
        {
            name: "GitHub",
            username: "@kanimozhi-Rajendran",
            icon: "fa-brands fa-github",
            url: "https://github.com/kanimozhi-Rajendran",
            accent: "github"
        },
        {
            name: "LeetCode",
            username: "@kit28adb072",
            icon: "fa-solid fa-code",
            url: "https://leetcode.com/u/kit28adb072/",
            accent: "leetcode"
        },
        {
            name: "CodeChef",
            username: "@kit28adb072",
            icon: "fa-solid fa-laptop-code",
            url: "https://www.codechef.com/users/kit28adb072",
            accent: "codechef"
        },
        {
            name: "Codeforces",
            username: "@Kanimozhi_2007",
            icon: "fa-solid fa-chart-simple",
            url: "https://codeforces.com/profile/Kanimozhi_2007",
            accent: "codeforces"
        },
        {
            name: "AtCoder",
            username: "@KANIMOZHI",
            icon: "fa-solid fa-terminal",
            url: "https://atcoder.jp/users/KANIMOZHI",
            accent: "atcoder"
        },
        {
            name: "Codolio",
            username: "@Kanimozhi R",
            icon: "fa-solid fa-network-wired",
            url: "https://codolio.com/profile/Kanimozhi%20R",
            accent: "codolio"
        },
        {
            name: "HackerRank",
            username: "@Kanimozhi R",
            icon: "fa-brands fa-hackerrank",
            url: "https://www.hackerrank.com/",
            accent: "hackerrank"
        }
    ]
};

if (typeof window !== 'undefined') {
    window.portfolioData = portfolioData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}

