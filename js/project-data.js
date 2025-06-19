/*==================== PROJECT DATA ====================*/
// This file contains data for all portfolio projects
// You can easily update project details in one place

const projectData = [
  {
    id: "1",
    title: "BookNest - Online Bookstore",
    category: "web",
    images: [
      "images/portfolio/bookstore-app-1.jpg",
      "images/portfolio/bookstore-app-2.jpg",
      "images/portfolio/bookstore-app-3.jpg",
    ],
    client: "BookNest Publishing",
    date: "January 2025",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://booknest-demo.vercel.app",
    githubUrl: "https://github.com/MehulChauhan-22/booknest",
    description: `
        BookNest is a full-stack e-commerce platform for a fictional bookstore. This project 
        features a comprehensive online shopping experience with book categories, user accounts, 
        reviews, ratings, secure payment processing, and an admin dashboard.
        
        The main challenges in this project were implementing a fast and efficient search 
        system, optimizing image loading for better performance, and creating a seamless 
        checkout process. I implemented server-side rendering and API route optimization 
        to ensure quick page loads and a smooth user experience.
        `,
    features: [
      "Responsive design optimized for all devices",
      "User authentication and profile management",
      "Advanced search and filtering options",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Admin dashboard for inventory management",
      "Book reviews and rating system",
    ],
  },
  {
    id: "2",
    title: "FitTrack - Fitness Tracking App",
    category: "mobile",
    images: [
      "images/portfolio/fitness-app-1.jpg",
      "images/portfolio/fitness-app-2.jpg",
      "images/portfolio/fitness-app-3.jpg",
    ],
    client: "FitTech Solutions",
    date: "November 2024",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "https://fittrack-demo.netlify.app",
    githubUrl: "https://github.com/MehulChauhan-22/fittrack",
    description: `
        FitTrack is a cross-platform mobile application that helps users track workouts, 
        monitor progress, and achieve fitness goals. The app includes features like 
        customizable workout routines, progress charts, calorie tracking, and social sharing.
        
        Building FitTrack required deep understanding of performance optimization techniques 
        for mobile devices, implementing complex animations, and ensuring the app worked 
        seamlessly across iOS and Android platforms. I used React Native for the frontend 
        and Firebase for backend services, authentication, and real-time data syncing.
        `,
    features: [
      "Cross-platform compatibility (iOS & Android)",
      "Customizable workout plans and routines",
      "Real-time progress tracking and statistics",
      "Social sharing and community features",
      "Offline functionality with data sync",
      "Personalized workout recommendations",
      "Integration with health tracking devices",
    ],
  },
  {
    id: "3",
    title: "FinDash - Financial Dashboard",
    category: "web",
    images: [
      "images/portfolio/finance-dashboard-1.jpg",
      "images/portfolio/finance-dashboard-2.jpg",
      "images/portfolio/finance-dashboard-3.jpg",
    ],
    client: "FinTrack Analytics",
    date: "March 2025",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    liveUrl: "https://findash-demo.vercel.app",
    githubUrl: "https://github.com/MehulChauhan-22/findash",
    description: `
        FinDash is a comprehensive financial dashboard that visualizes complex financial data 
        through interactive charts and reports. It provides real-time analytics, expense 
        tracking, investment monitoring, and budget management in an intuitive interface.
        
        The biggest challenge was handling large datasets and rendering complex visualizations 
        while maintaining performance. I implemented optimized data structures, virtualized 
        lists, and efficient rendering techniques to ensure smooth user experience even with 
        large financial datasets.
        `,
    features: [
      "Real-time financial data visualization",
      "Interactive charts and reports",
      "Budget planning and expense tracking",
      "Investment portfolio monitoring",
      "Financial goal setting and tracking",
      "Data export in multiple formats",
      "Customizable dashboard layouts",
    ],
  },
  {
    id: "4",
    title: "Wanderlust - Travel App UI Design",
    category: "design",
    images: [
      "images/portfolio/travel-ui-1.jpg",
      "images/portfolio/travel-ui-2.jpg",
      "images/portfolio/travel-ui-3.jpg",
    ],
    client: "Wanderlust Travel",
    date: "December 2024",
    technologies: ["Figma", "Adobe Illustrator", "Principle"],
    liveUrl: "https://dribbble.com/shots/wanderlust-travel",
    githubUrl: "",
    description: `
        Wanderlust is a UI/UX design project for a travel application that helps users discover 
        destinations, plan trips, and share travel experiences. The design focuses on visual 
        storytelling, intuitive navigation, and evoking the excitement of travel through 
        vibrant imagery and thoughtful interactions.
        
        My goal was to create a visually appealing interface that would be both functional 
        and emotionally engaging. I conducted user research to understand travel planning 
        pain points and created a design that streamlines the journey from inspiration to booking.
        `,
    features: [
      "Destination discovery interface",
      "Trip planning workflow",
      "Booking integration design",
      "Interactive maps and location features",
      "Travel journal and photo sharing",
      "User profile and preferences",
      "Dark and light mode designs",
    ],
  },
  {
    id: "5",
    title: "EduHub - E-Learning Platform",
    category: "web",
    images: [
      "images/portfolio/elearning-platform-1.jpg",
      "images/portfolio/elearning-platform-2.jpg",
      "images/portfolio/elearning-platform-3.jpg",
    ],
    client: "EduTech Innovations",
    date: "April 2025",
    technologies: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://eduhub-demo.vercel.app",
    githubUrl: "https://github.com/MehulChauhan-22/eduhub",
    description: `
        EduHub is an e-learning platform that connects students with teachers for online 
        courses across various subjects. The platform includes features like video lectures, 
        interactive quizzes, progress tracking, discussion forums, and certificate generation.
        
        Building EduHub required solving complex problems like creating a responsive video 
        player with interactive features, implementing a secure assessment system, and 
        designing an intuitive course creation interface for teachers. I focused on making 
        the platform accessible and usable on all devices.
        `,
    features: [
      "Interactive video lectures with bookmarks",
      "Course creation and management tools",
      "Student progress tracking and analytics",
      "Quiz and assessment system",
      "Discussion forums and community features",
      "Certificate generation and verification",
      "Mobile-responsive design",
    ],
  },
  {
    id: "6",
    title: "CryptoTrack - Cryptocurrency Dashboard",
    category: "design",
    images: [
      "images/portfolio/crypto-dashboard-1.jpg",
      "images/portfolio/crypto-dashboard-2.jpg",
      "images/portfolio/crypto-dashboard-3.jpg",
    ],
    client: "CryptoWatch",
    date: "February 2025",
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "TailwindCSS",
      "CoinGecko API",
    ],
    liveUrl: "https://cryptotrack-demo.netlify.app",
    githubUrl: "https://github.com/MehulChauhan-22/cryptotrack",
    description: `
        CryptoTrack is a cryptocurrency portfolio tracker and market analysis dashboard that 
        provides real-time price data, portfolio performance metrics, and detailed charts for 
        cryptocurrency investors. The application integrates with multiple crypto APIs to 
        provide comprehensive market data.
        
        The key challenges in this project were handling real-time data streams, implementing 
        complex financial charts, and ensuring accurate calculations for portfolio performance 
        metrics. I implemented efficient state management and optimized rendering to handle 
        frequent data updates without impacting performance.
        `,
    features: [
      "Real-time cryptocurrency price tracking",
      "Portfolio management and performance analytics",
      "Advanced charting with multiple timeframes",
      "Price alerts and notifications",
      "Market news integration",
      "Watchlist functionality",
      "Historical performance comparison",
    ],
  },
];
