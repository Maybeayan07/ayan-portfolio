import leukemiaImg from "./assets/projects/leukemia.jpg"
import verticalImg from "./assets/projects/vertical-farming.jpg";
import ninjaVideo from "./assets/videos/ninja.mp4";
export interface Skill {
    name: string;
    level: number;
    category: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    video?: string;
    technologies: string[];
    github?: string;
    live?: string;
    featured: boolean;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    achievements: string[];
}

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
}

export const skills: Skill[] = [
    // Languages
    { name: "Python", level: 95, category: "Languages" },
    { name: "JavaScript", level: 92, category: "Languages" },
    { name: "TypeScript", level: 90, category: "Languages" },
    { name: "C++", level: 80, category: "Languages" },
    { name: "SQL", level: 88, category: "Languages" },

    // Frontend
    { name: "React", level: 94, category: "Frontend" },
    { name: "Next.js", level: 88, category: "Frontend" },
    { name: "Tailwind CSS", level: 96, category: "Frontend" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    { name: "Framer Motion", level: 90, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Express.js", level: 87, category: "Backend" },
    { name: "FastAPI", level: 85, category: "Backend" },
    { name: "Flask", level: 84, category: "Backend" },
    { name: "REST APIs", level: 92, category: "Backend" },

    // AI/ML
    { name: "Machine Learning", level: 92, category: "AI/ML" },
    { name: "Deep Learning", level: 90, category: "AI/ML" },
    { name: "Computer Vision", level: 93, category: "AI/ML" },
    { name: "OpenCV", level: 91, category: "AI/ML" },
    { name: "TensorFlow", level: 88, category: "AI/ML" },
    { name: "PyTorch", level: 87, category: "AI/ML" },
    { name: "NLP", level: 85, category: "AI/ML" },
    { name: "Generative AI", level: 83, category: "AI/ML" },

    // Databases
    { name: "MongoDB", level: 86, category: "Databases" },
    { name: "PostgreSQL", level: 85, category: "Databases" },
    { name: "MySQL", level: 84, category: "Databases" },
    { name: "SQLite", level: 88, category: "Databases" },

    // Tools
    { name: "Git/GitHub", level: 94, category: "Tools" },
    { name: "Docker", level: 82, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "Postman", level: 88, category: "Tools" },
    { name: "Figma", level: 80, category: "Tools" },
];

export const projects: Project[] = [
    {
        id: "1",
        title: "Leukemia Detection Using Vision Transformers",
        description: "Medical image classification system using Vision Transformers",
        longDescription:
            "Advanced medical imaging AI that detects leukemia from blood smear images using Vision Transformer (ViT) architecture. Evaluates performance using Accuracy, Precision, Recall, and F1-score metrics.",
        image: leukemiaImg,
        technologies: ["Python", "TensorFlow", "Vision Transformers", "Computer Vision"],
        github: "https://github.com/Maybeayan07/leukemia-detection",
        featured: true,
    },
    {
        id: "3",
        title: "Weather App",
        description: "Mobile weather application with live API integration",
        longDescription:
            "Cross-platform weather application with live API integration, location-based forecasts, persistent storage using AsyncStorage, and intuitive navigation with Drawer and Stack Navigation.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
        technologies: ["React Native", "Expo", "AsyncStorage"],
        github: "https://github.com/Maybeayan07/weather-app",
        featured: true,
    },
    {
        id: "4",
        title: "House Price Prediction",
        description: "Machine learning regression model comparison",
        longDescription:
            "Comprehensive machine learning project comparing multiple regression models with data preprocessing, feature engineering, and performance evaluation using Random Forest and Linear Regression.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
        technologies: ["Python", "Scikit-learn", "Data Analysis", "Pandas"],
        github: "https://github.com/Maybeayan07/house-price-prediction",
        featured: false,
    },
    {
        id: "5",
        title: "Library Management System",
        description: "Desktop application with OOP principles",
        longDescription:
            "Desktop application demonstrating OOP principles with book issue/return functionality, member management, and automated fine calculation.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        technologies: ["Java", "OOP", "Swing"],
        github: "https://github.com/Maybeayan07/library-management",
        featured: false,
    },
    {
        id: "6",
        title: "Thrift Shoe App",
        description: "Mobile marketplace application",
        longDescription:
            "Full-featured mobile marketplace application with product search, user authentication, and complete buying/selling workflow for thrift shoes.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=300&fit=crop",
        technologies: ["React Native", "Firebase", "Authentication"],
        github: "https://github.com/Maybeayan07/thrift-shoe-app",
        featured: false,
    },
    {
        id: "7",
        title: "AI Ninja Fruit Game",
        description: "Gesture-controlled Fruit Ninja-style game with real-time hand tracking",
        longDescription:
            "Built a gesture-controlled Fruit Ninja-style game where players slice virtual fruits using hand movements captured through a webcam. Implemented real-time collision detection, score tracking, animations, and gesture recognition for an engaging touchless gaming experience.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        video: ninjaVideo,
        technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Real-time Processing"],
        github: "https://github.com/Maybeayan07/ninja-fruit-game",
        featured: true,
    },
    {
        id: "8",
        title: "Vertical Farming IoT System",
        description: "Smart agriculture system with automated irrigation and sensor monitoring",
        longDescription:
            "Designed a smart vertical farming system that monitors environmental conditions and automates irrigation based on sensor readings. The system continuously measures soil moisture, temperature, and humidity to optimize plant growth while reducing water consumption.",
        image: verticalImg,
        technologies: ["Arduino", "ESP32", "IoT", "Smart Agriculture", "Sensor Integration"],
        github: "https://github.com/Maybeayan07/vertical-farming-iot",
        featured: false,
    },
];

export const experiences: Experience[] = [
    {
        id: "1",
        company: "Carrefour (Giga Mall, Islamabad)",
        role: "IT Intern",
        duration: "2024",
        description:
            "Assisted with enterprise IT operations and infrastructure maintenance. Resolved hardware and software issues for staff and worked with real-world corporate IT systems.",
        achievements: [
            "Maintained enterprise IT infrastructure and systems",
            "Resolved hardware and software issues for 50+ staff members",
            "Documented IT procedures and best practices",
            "Learned workplace troubleshooting and technical support",
        ],
    },
    {
        id: "2",
        company: "Fincon Services",
        role: "Remote IT Intern",
        duration: "2023-2024",
        description:
            "Worked remotely on IT-related tasks with virtual collaboration. Delivered assignments independently and gained exposure to professional software workflows.",
        achievements: [
            "Completed remote IT projects independently",
            "Collaborated with distributed team members virtually",
            "Learned professional development practices",
            "Delivered high-quality work in remote environment",
        ],
    },
];

export const certifications: Certification[] = [
    {
        id: "1",
        title: "HackerRank Frontend Developer (React)",
        issuer: "HackerRank",
        date: "2024",
    },
    {
        id: "2",
        title: "Google Play Academy — App Store Listing",
        issuer: "Google",
        date: "2024",
    },
    {
        id: "3",
        title: "BS Artificial Intelligence",
        issuer: "COMSATS University Islamabad",
        date: "2023-2027",
    },
];

export const achievements = [
    { icon: "🚀", label: "10+ AI & Web Development Projects" },
    { icon: "🎓", label: "BS Artificial Intelligence • 7th Semester" },
    { icon: "🌱", label: "Passionate Open Source Learner" },
];

export const stats = [
    { number: "2+", label: "Industry Experiences" },
    { number: "6+", label: "Projects" },
    { number: "3", label: "Certifications" },
    { number: "BS AI", label: "COMSATS" },
];

export const socialLinks = [
    { label: "GitHub", url: "https://github.com/Maybeayan07", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ayan-aleem-4380932a9", icon: "linkedin" },
    { label: "Email", url: "mailto:ayanaleem1992@gmail.com", icon: "email" },
    { label: "WhatsApp", url: "https://wa.me/923035720848", icon: "whatsapp" },
];

export const techStack = [
    "Python",
    "React",
    "TypeScript",
    "TensorFlow",
    "PyTorch",
    "Node.js",
    "MongoDB",
    "Docker",
    "OpenCV",
    "FastAPI",
    "Tailwind CSS",
    "Git",
];
