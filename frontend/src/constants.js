// src/constants.js

export const PERSONAL_INFO = {
    name: "Ozuu Chidiebere Divine",
    title: "Frontend Developer & UI/UX Designer",
    nickname: "T3MPEST",
    description: "I craft immersive digital experiences through modern web development and thoughtful design. From sleek interfaces to responsive layouts, I bring ideas to life with precision and creativity, I build projects that are not only functional - but unforgettable.",
    email: "Chidiebereozuu@gmail.com",
    phone: "+234 701 723 7002",
    dob: "24 Jan 2004",
    pob: "Abia State, Nigeria",
    education: "Michael Okpara University of Agriculture, Umudike",
    socials: {
        twitter: "https://twitter.com/messages/compose?recipient_id=1712396737901879378",
        github: "https://github.com/T3MPEST-21",
        whatsapp: "https://wa.me/2347072070736?text=Hello%20Chidiebere%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect",
        linkedin: "https://www.linkedin.com/in/chidiebere-ozuu-927644341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    stats: {
        experience: "1 year+",
        mainLanguage: "TypeScript/JavaScript",
        totalProjects: "5+ Projects"
    }
};

export const SKILLS = [
    {
        category: "Frontend",
        items: [
            { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
            { name: "React", icon: "FaReact", color: "#61DAFB" },
            { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
            { name: "JavaScript", icon: "FaJs", color: "#F7DF1E" },
            { name: "HTML5", icon: "DiHtml5", color: "#E34F26" },
            { name: "CSS3", icon: "DiCss3", color: "#1572B6" }
        ]
    },
    {
        category: "Mobile",
        items: [
            { name: "React Native", icon: "FaReact", color: "#61DAFB" },
            { name: "Expo", icon: "SiExpo", color: "#000020" },
            { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
            { name: "Dart", icon: "SiDart", color: "#0175C2" }
        ]
    },
    {
        category: "Tools & Backend",
        items: [
            { name: "Node.js", icon: "FaNodeJs", color: "#339933" },
            { name: "Git", icon: "FaGitAlt", color: "#F05032" },
            { name: "Supabase", icon: "SiSupabase", color: "#4AD88A" },
            { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" }
        ]
    }
];

export const SUPPORT_EMAIL = "mailto:chidiebereozuu@gmail.com";

export const PROJECTS = [
    {
        title: "Ghost Hand",
        description: "A system-wide gesture controller for Android. Uses sensor fusion (Accelerometer + Gyroscope) to detect flip gestures and trigger accessibility actions.",
        type: "Mobile App (Flutter + Kotlin)",
        tags: ["Flutter", "Kotlin", "Sensor Fusion", "Accessibility"],
        github: "https://github.com/T3MPEST-21/Ghost-Hand",
        demo: "#",
        image: "/images/ghost_hand.png"
    },
    {
        title: "Sonique",
        description: "A premium music player with mood-tagging features and vertical gesture controls. Built with Flutter for a seamless audio experience.",
        type: "Mobile App (React Native)",
        tags: ["React Native", "TypeScript", "Audio Service", "Mood Tagging", "UX"],
        github: "#",
        demo: "#",
        image: "/images/soniqueLogo.png"
    },
    {
        title: "Battery Guardian",
        description: "An Android utility for optimizing battery life, featuring real-time monitoring and smart permission handling.",
        type: "Mobile App (React Native)",
        tags: ["React Native", "TypeScript", "Kotlin", "Android SDK", "Optimization", "Utility"],
        github: "#",
        demo: "#",
        image: "/images/battery-guardian.png"
    },
    {
        title: "Kinetic",
        description: "A feature-rich, high-intensity workout companion built with Flutter, featuring customizable Text-to-Speech (TTS) guidance and precision interval tracking.",
        type: "Mobile App (Flutter)",
        tags: ["Flutter", "Dart", "Audio Service", "Fitness", "TTS"],
        github: "#",
        demo: "#",
        image: "/images/kineticLogo.png"
    }
];
