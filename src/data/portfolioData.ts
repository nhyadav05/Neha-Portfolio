import { PortfolioData, Project } from '../types';

// Helper function to format date from YYYY-MM to "Mon YYYY"
export function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

// Helper function to calculate duration between two dates
export function calculateDuration(startDate: string, endDate: string | null): string {
  const [startYear, startMonth] = startDate.split('-').map(Number);
  const now = new Date();
  const [endYear, endMonth] = endDate
    ? endDate.split('-').map(Number)
    : [now.getFullYear(), now.getMonth() + 1];

  let years = endYear - startYear;
  let months = endMonth - startMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0 && months === 0) {
    return 'Less than a month';
  }

  const yearsStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthsStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  if (yearsStr && monthsStr) {
    return `${yearsStr} ${monthsStr}`;
  }
  return yearsStr || monthsStr;
}

// Helper function to get formatted date range
export function getDateRange(startDate: string, endDate: string | null): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} – ${end}`;
}

// Helper function to calculate total experience duration
export function calculateTotalExperience(experience: { startDate: string; endDate: string | null }[]): string {
  let totalMonths = 0;

  experience.forEach((exp) => {
    const [startYear, startMonth] = exp.startDate.split('-').map(Number);
    const now = new Date();
    const [endYear, endMonth] = exp.endDate
      ? exp.endDate.split('-').map(Number)
      : [now.getFullYear(), now.getMonth() + 1];

    const years = endYear - startYear;
    const months = endMonth - startMonth;
    totalMonths += years * 12 + months;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} months`;
  } else if (months === 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  }
  return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
}

export const DATA: PortfolioData = {
  name: "Neha Yadav",
  role: "Frontend Developer",
  bio: `Results-oriented Frontend Developer with ${calculateTotalExperience([
    { startDate: "2025-06", endDate: null },
    { startDate: "2024-06", endDate: "2025-06" },
    { startDate: "2024-04", endDate: "2024-06" },
    { startDate: "2022-09", endDate: "2023-09" }
  ])} of experience in building dynamic and responsive web applications using modern technologies such as ReactJS, TypeScript, and Next.js. Vite JS, state management, and API integration. Adept at delivering scalable solutions with a focus on performance, reusability, and clean code.`,
  profileImg: "/my-profile.jpeg",
  skills: ["JavaScript", "TypeScript", "React JS", "Next JS", "HTML & CSS", "Material UI", "Tailwind CSS", "Redux-Toolkit", "RTK Query", "Git", "GitHub", "Next UI", "Performance Optimization", "WebView Integration"],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" }
  ],
  experience: [
    { role: "React JS Developer", company: "Tekzee Technologies Pvt. Ltd.", startDate: "2025-06", endDate: null, desc: "Building dynamic and responsive web applications using React.js, TypeScript, and Next.js." },
    { role: "React JS Developer", company: "Stack Infinite Pvt Ltd", startDate: "2024-06", endDate: "2025-06", desc: "Developed modern, high-performance platforms using Vite.js and TypeScript." },
    { role: "React JS Developer", company: "Quintus Tech Pvt Ltd", startDate: "2024-04", endDate: "2024-06", desc: "Focused on React.js development with state management and API integration." },
    { role: "React JS Developer", company: "Zolute Technology & Consulting Pvt. Ltd.", startDate: "2022-09", endDate: "2023-09", desc: "Built scalable frontend solutions with focus on performance and clean code." }
  ],
  education: [
    { degree: "M.Sc. [Mathematics]", school: "Christian Eminent College", year: "2019 – 2021", location: "Indore, M.P." },
    { degree: "B.Sc. [Computer Science]", school: "Christian Eminent College", year: "2016 – 2019", location: "Indore, M.P." }
  ],
  projects: [
    {
      id: 1,
      title: "FAWZ",
      category: "E-commerce Platform",
      tech: ["React.js", "Redux-Saga", "Chakra UI"],
      fullDesc:
        "A wholesale footwear platform offering competitive pricing and flexible bulk orders. Provides retailers and resellers with detailed product descriptions, size guides, and seamless shopping experience for efficient decision-making.",
      img: "/FAWZ.png",
      link: "https://fawz.in/"
    },
    {
      id: 2,
      title: "EMS Partner Portal",
      category: "Financial Platform",
      tech: ["React.js", "Redux-Saga", "Chakra UI"],
      fullDesc:
        "A scalable portal enabling third-party merchants to apply for loans securely. Streamlines document verification and supports strategic partnerships with advanced tracking and reporting features.",
      img: "/EMS.png",
      link: "https://partner.ems-ltd.global/"
    },
    {
      id: 3,
      title: "ParikshaDo",
      category: "EdTech Platform",
      tech: ["React.js", "Redux", "Axios", "Material UI"],
      fullDesc:
        "An advanced platform for conducting mock exams, providing teachers with comprehensive course management tools. Enhances student learning with interactive tests, real-time feedback, and performance tracking.",
      img: "/ParikshaDo.png",
      link: "https://parikshado.com/"
    },
    {
      id: 4,
      title: "Voso Vyapar",
      category: "E-commerce Platform",
      tech: ["React.js", "Material UI", "Redux Toolkit"],
      fullDesc:
        "A complete platform for managing and selling products online with inventory and order management. Personalizes the shopping experience to boost sales while simplifying backend operations for merchants.",
      img: "/VosoVyapar.png",
      link: "https://user.vosovyapar.com/"
    },
    // {
    //   id: 5,
    //   title: "Vision Intelligence Blackhat",
    //   category: "Service Platform",
    //   tech: ["React.js", "Multi-language Support"],
    //   fullDesc:
    //     "A multilingual service platform catering to Admins, Merchants, and Customers, streamlining service management across languages. Offers an intuitive interface and comprehensive tools to enhance customer engagement and operational efficiency.",
    //   img: "/Blackhat.png"
    // },
    {
      id: 6,
      title: "Stack Infinite",
      category: "Corporate Website",
      tech: ["Vite.js", "TypeScript", "Tailwind CSS"],
      fullDesc:
        "A modern, high-performance corporate platform built with Vite.js and TypeScript. Demonstrates the company's innovative approach while delivering a fast, scalable, and visually appealing user experience.",
      img: "/StackInfinite.png",
      link: "https://stackinfinite.com/"
    },
    {
      id: 7,
      title: "Vyapaar Vistaar",
      category: "Supply Chain Platform",
      tech: ["React.js", "Real-time Inventory"],
      fullDesc:
        "A tech-driven distribution solution for real-time inventory management. Improves FMCG supply chain efficiency with accurate tracking, automated reporting, and optimized distribution workflows.",
      img: "/VV-SFA.png",
      link: "https://play.google.com/store/apps/details?id=com.vvapps.dms&hl=en_IN"
    },
    {
      id: 8,
      title: "Prataap Snacks Limited (PSL) - Yellow Diamond",
      category: "Mobile WebView",
      tech: ["React.js", "REST API Integration"],
      fullDesc:
        "Yellow diamond is the flagship brand of Prataap Snacks, stands as a prominent chips company in India, recognized among the top snacks brands in India. Developed a React.js-based WebView module with integration, which is embedded and used as a feature within the PSL mobile application.",
      img: "/PSL-SFA.png",
      link: "https://play.google.com/store/apps/details?id=com.sfa.psl&hl=en"
    },
    {
      id: 9,
      title: "Purehug",
      category: "Mobile WebView",
      tech: ["React.js", "Billing & Order Management"],
      fullDesc:
        "React.js WebView modules for Purehug, an Indian baby diaper brand, including Billing, Sales, and Performance tracking. Ensures seamless integration with mobile apps while delivering smooth user interactions and reporting features.",
      img: "/Purehug-SFA.png",
      link: "https://play.google.com/store/apps/details?id=com.purehug.sfa&hl=en_IN"
    },
    {
      id: 10,
      title: "Intellimax",
      category: "Corporate Website",
      tech: ["HTML/CSS", "Responsive Design", "JavaScript"],
      fullDesc:
        "A responsive corporate website showcasing Intellimax services and products. Focused on user-friendly navigation, interactive design, and seamless experience across devices to attract and engage clients.",
      img: "/Intellimax.png",
      link: "https://intellimax.io/"
    }
  ],
  socialLinks: [
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/neha-yadav-57744a242/',
      label: 'LinkedIn'
    },
    {
      platform: 'github',
      url: 'https://github.com/nhyadav05',
      label: 'GitHub'
    },
    {
      platform: 'gmail',
      url: 'mailto:nehainduyadav@gmail.com',
      label: 'Gmail'
    }
  ]

};
