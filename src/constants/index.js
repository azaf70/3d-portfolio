import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    tailwind,
    git,
    mysql,
    php,
    vue,
    laravel,
    reactjs,
    meta,
    jobit,
    tripguide,
    carrent,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Vue, React & Laravel Specialist",
        icon: mobile,
    },
    {
        title: "Tech Explorer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: "Laravel",
        icon: laravel,
    },
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Crown Gas & Power",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "May 2021 - Present",
        points: [
            "Developed public-facing applications enhancing customer engagement.",
            "Automated internal workflows saving over 30 hours per week.",
            "Optimized performance and responsiveness of web platforms.",
            "Integrated secure and scalable backend features with front-end systems.",
            "Collaborated closely with UX/UI teams and backend engineers.",
        ],
    },
    {
        title: "Digital Engineer",
        company_name: "Deeper Digital Engineer Programme",
        icon: jobit,
        iconBg: "#383E56",
        date: "Jan 2021 - May 2021",
        points: [
            "Gained strong foundations in PHP, MySQL, JS, HTML & CSS.",
            "Built projects simulating real-world dev challenges.",
            "Enhanced understanding of full stack development workflows.",
        ],
    },
    {
        title: "Full Stack Engineer Trainee",
        company_name: "IT Career Switch",
        icon: tripguide,
        iconBg: "#E6DEDD",
        date: "Nov 2020 - May 2021",
        points: [
            "Completed a structured program with full-stack focus.",
            "Worked on practical projects and obtained certifications.",
            "Gained real-world readiness with a robust portfolio.",
        ],
    },
    {
        title: "Entrepreneur",
        company_name: "eBay",
        icon: carrent,
        iconBg: "#383E56",
        date: "Aug 2015 - Aug 2022",
        points: [
            "Improved communication and customer interaction through sales.",
            "Gained time management and problem-solving experience.",
            "Used software skills to manage and automate listings.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Abdullah brought a new level of efficiency to our systems — his automation work alone saves our team hours weekly.",
        name: "Line Manager",
        designation: "Team Lead",
        company: "Crown Gas & Power",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        testimonial:
            "His ability to collaborate and innovate under pressure was impressive during our engineer training program.",
        name: "Mentor",
        designation: "Programme Lead",
        company: "Deeper Digital",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
];

const projects = [
    {
        name: "Automated Reporting System",
        description:
            "Developed a reporting automation tool that reduced over 30 hours of manual work per week by streamlining data collection and report generation.",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Customer Onboarding App",
        description:
            "Built a public-facing Vue/Laravel application to streamline new customer onboarding and improve user experience.",
        tags: [
            {
                name: "vue",
                color: "blue-text-gradient",
            },
            {
                name: "laravel",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Internal Tools Suite",
        description:
            "Developed internal tools that improve data entry, user communication, and performance monitoring across teams.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "html",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };