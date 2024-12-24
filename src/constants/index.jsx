export const standardizedCurricula = {
  courses: {
    meanStack: {
      title: "MEAN Stack Development",
      totalDuration: "19 Weeks",
      learn: [
        "Understanding Full-Stack Architecture",
        "Front-End Development",
        "Back-End Development",
        "Database Management",
        "Server-Side Programming",
        "Authentication and Security",
        "Real-Time Applications",
        "Deployment and Hosting",
        "Version Control and Collaboration",
        "Problem-Solving and Debugging",
      ],
      outcomes: {
        desc: "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience with the guidance of industry experts. By working directly with leading technology tools and frameworks, we ensure that our students gain the skills and knowledge needed to excel in modern full-stack development.",
        points: [
          {
            title: "Become a MEAN Stack Developer",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses are designed to help you master MongoDB, Express.js, Angular, and Node.js to build scalable, full-stack web applications.",
          },
          {
            title: "Build Real-World Projects",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses include hands-on projects where you'll design, develop, and deploy complete applications to showcase your skills.",
          },
          {
            title: "Launch Your Career",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.We prepare you for job opportunities as a full-stack developer with a strong portfolio and industry-recognized expertise.",
          },
          {
            title: "Get Certified",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Earn a professional certification that validates your expertise in MEAN stack development to boost your credibility in the job market.",
          },
        ],
      },
      overview:
        "An intensive JavaScript-focused program that turns students into full-stack developers. Perfect for those wanting to work with a fully JavaScript-based stack. The course excels in teaching single-page application development and real-time features. Strong emphasis on practical projects makes graduates job-ready. Particularly valuable for startups and modern web development companies using JavaScript throughout their stack.",
      modules: [
        {
          moduleNumber: 1,
          moduleTitle: "Introduction to Full Stack Development",
          duration: "1 Week",
          topics: [
            "Overview of Full Stack Development",
            "Understanding MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
            "Setting up the development environment",
            "Introduction to Git and GitHub for version control",
            "Basics of Web Development (HTML, CSS, JavaScript Essentials)",
          ],
          practicals: [
            "Create a simple HTML/CSS/JS-based web page",
            "Set up a Git repository and push changes to GitHub",
          ],
        },
        {
          moduleNumber: 2,
          moduleTitle: "MongoDB (Database Layer)",
          duration: "2 Weeks",
          topics: [
            "Introduction to NoSQL and MongoDB",
            "Setting up MongoDB locally and using MongoDB Atlas (cloud)",
            "Understanding Collections and Documents",
            "CRUD Operations (Create, Read, Update, Delete)",
            "Schema design and validation",
            "Aggregation Framework",
          ],
          practicals: [
            "Create a database for a sample application (e.g., Employee Management)",
            "Perform CRUD operations",
            "Implement complex queries with the aggregation framework",
          ],
        },
        {
          moduleNumber: 3,
          moduleTitle: "Node.js (Server Layer)",
          duration: "2 Weeks",
          topics: [
            "Introduction to Node.js",
            "Understanding the Event Loop and Non-blocking I/O",
            "Working with npm and package.json",
            "Core Modules: fs, path, http",
            "Building a basic server with Node.js",
            "Introduction to REST APIs",
          ],
          practicals: [
            "Create a basic Node.js server",
            "Build a REST API to manage sample data (e.g., Books, Students)",
          ],
        },
        {
          moduleNumber: 4,
          moduleTitle: "Express.js (Middleware Layer)",
          duration: "2 Weeks",
          topics: [
            "Introduction to Express.js",
            "Middleware functions and their role",
            "Routing in Express.js",
            "Error handling in Express.js",
            "Authentication and Authorization (JWT)",
            "Connecting Node.js with MongoDB",
          ],
          practicals: [
            "Build a RESTful API for a sample project (e.g., Blog App)",
            "Implement JWT-based authentication",
          ],
        },
        {
          moduleNumber: 5,
          moduleTitle: "Angular (Frontend Layer)",
          duration: "3 Weeks",
          topics: [
            "Introduction to Angular",
            "Angular Architecture (Modules, Components, Directives, Services)",
            "Data Binding (One-way, Two-way)",
            "Angular CLI and Project Setup",
            "Dependency Injection and Services",
            "Working with Angular Forms (Template-Driven and Reactive)",
            "Consuming REST APIs with HttpClient",
            "Routing and Navigation",
          ],
          practicals: [
            "Build a sample Angular application (e.g., Task Manager)",
            "Implement a login and registration page",
            "Fetch data from the Express API and display it",
          ],
        },
        {
          moduleNumber: 6,
          moduleTitle: "Integrating MEAN Stack",
          duration: "2 Weeks",
          topics: [
            "Connecting Angular Frontend with Express Backend",
            "End-to-End data flow in MEAN Stack",
            "Role of APIs in integration",
            "Handling CORS issues",
            "State Management in Angular (using RxJS)",
          ],
          practicals: [
            "Build a simple end-to-end MEAN stack application (e.g., E-Commerce platform)",
          ],
        },
        {
          moduleNumber: 7,
          moduleTitle: "Advanced MEAN Stack Topics",
          duration: "2 Weeks",
          topics: [
            "Optimizing MongoDB Queries for performance",
            "File Uploads and Storage (GridFS, Multer)",
            "Real-time Data with WebSockets (Socket.io)",
            "Role-Based Authentication and Authorization",
            "Angular Material for UI Components",
            "Unit Testing with Mocha/Chai (Backend) and Jasmine/Karma (Frontend)",
          ],
          practicals: [
            "Implement file uploads in your MEAN stack project",
            "Add real-time features like notifications using WebSockets",
          ],
        },
        {
          moduleNumber: 8,
          moduleTitle: "Deployment and DevOps",
          duration: "1 Week",
          topics: [
            "Hosting MEAN applications on cloud platforms (AWS, Heroku, Vercel)",
            "Configuring and managing a production-ready MongoDB",
            "Dockerizing the MEAN application",
            "CI/CD pipelines for MEAN stack projects",
            "Monitoring and maintaining the application in production",
          ],
          practicals: [
            "Deploy the MEAN application to a cloud platform",
            "Set up CI/CD pipelines for automated deployment",
          ],
        },
        {
          moduleNumber: 9,
          moduleTitle: "Capstone Project",
          duration: "3 Weeks",
          topics: ["Build a complete end-to-end MEAN stack application"],
          projectOptions: [
            "E-Learning Platform",
            "Inventory Management System",
            "Social Media Application",
            "Job Portal",
          ],
        },
        {
          moduleNumber: 10,
          moduleTitle: "Career Guidance and Industry Preparation",
          duration: "1 Week",
          topics: [
            "Writing effective resumes for Full Stack roles",
            "Preparing for technical interviews",
            "Solving coding problems in JavaScript",
            "Mock interviews and coding challenges",
          ],
          outcomes: [
            "Portfolio-ready projects",
            "Job-ready skills and interview preparation",
          ],
        },
      ],
    },
    mernStack: {
      title: "MERN Stack Development",
      totalDuration: "21 Weeks",
      learn: [
        "Full-Stack Architecture Understanding",
        "Front-End Development with React",
        "Back-End Development with Node.js and Express.js",
        "Database Management with MongoDB",
        "Building RESTful APIs",
        "Authentication and Authorization with JWT",
        "State Management with Redux",
        "Version Control with Git and GitHub",
        "Testing with Jest and Mocha",
        "Deployment and Hosting",
      ],
      outcomes: {
        desc: "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience with the guidance of industry experts. By working directly with leading technology tools and frameworks, we ensure that our students gain the skills and knowledge needed to excel in modern full-stack development.",
        points: [
          {
            title: "Become a MERN Stack Developer",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses are designed to help you master MongoDB, Express.js, React, and Node.js to build robust, scalable web application",
          },
          {
            title: "Build Real-World Projects",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses include hands-on projects where you'll create fully functional applications to showcase your skills to potential employers.",
          },
          {
            title: "Launch Your Career",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.We prepare you for career opportunities as a full-stack developer with an impressive portfolio and a deep understanding of the MERN stack.",
          },
          {
            title: "Get Certified",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Earn an industry-recognized certification that validates your proficiency in MERN stack development, helping you stand out in the competitive job market.",
          },
        ],
      },
      overview:
        "A comprehensive full-stack JavaScript course featuring React instead of Angular. Currently one of the most in-demand tech stacks in the industry. Excellent for developers wanting to build modern, responsive web applications. The React ecosystem knowledge gained is particularly valuable as it can extend to mobile development with React Native. Highly sought after by tech companies of all sizes.",
      modules: [
        {
          moduleNumber: 1,
          moduleTitle: "Introduction to Full Stack Development",
          duration: "1 Week",
          topics: [
            "Overview of Full Stack Development",
            "Understanding the MERN Stack (MongoDB, Express.js, React, Node.js)",
            "Setting up the development environment",
            "Introduction to Git and GitHub for version control",
            "Basics of Web Development (HTML, CSS, JavaScript Essentials)",
          ],
          practicals: [
            "Create a simple HTML/CSS/JS-based web page",
            "Set up a Git repository and push changes to GitHub",
          ],
        },
        {
          moduleNumber: 2,
          moduleTitle: "MongoDB (Database Layer)",
          duration: "2 Weeks",
          topics: [
            "Introduction to NoSQL and MongoDB",
            "Setting up MongoDB locally and using MongoDB Atlas (cloud)",
            "Understanding Collections and Documents",
            "CRUD Operations (Create, Read, Update, Delete)",
            "Schema Design and Data Validation",
            "Aggregation Framework",
          ],
          practicals: [
            "Create a database for a sample application (e.g., Employee Management)",
            "Perform CRUD operations",
            "Write aggregation queries for complex data needs",
          ],
        },
        {
          moduleNumber: 3,
          moduleTitle: "Node.js (Server Layer)",
          duration: "2 Weeks",
          topics: [
            "Introduction to Node.js",
            "Understanding the Event Loop and Non-blocking I/O",
            "Working with npm and package.json",
            "Core Modules: fs, path, http",
            "Building a basic server with Node.js",
            "Introduction to REST APIs",
          ],
          practicals: [
            "Create a basic Node.js server",
            "Build a REST API to manage sample data (e.g., Books, Students)",
          ],
        },
        {
          moduleNumber: 4,
          moduleTitle: "Express.js (Middleware Layer)",
          duration: "2 Weeks",
          topics: [
            "Introduction to Express.js",
            "Middleware functions and their role",
            "Routing in Express.js",
            "Error handling in Express.js",
            "Authentication and Authorization (JWT)",
            "Connecting Node.js with MongoDB",
          ],
          practicals: [
            "Build a RESTful API for a sample project (e.g., Blog App)",
            "Implement JWT-based authentication",
          ],
        },
        {
          moduleNumber: 5,
          moduleTitle: "React.js (Frontend Layer)",
          duration: "4 Weeks",
          topics: [
            "Introduction to React.js",
            "React Component Architecture (Functional vs Class Components)",
            "JSX and React Lifecycle Methods",
            "State and Props Management",
            "React Hooks (useState, useEffect, useContext, useReducer)",
            "React Router for Single Page Applications (SPA)",
            "Fetching and Consuming APIs with Axios/Fetch",
            "Styling in React (CSS Modules, Styled Components, Material-UI)",
            "State Management with Redux (Optional: Context API as an alternative)",
          ],
          practicals: [
            "Build a React application (e.g., Task Manager or Weather App)",
            "Integrate the React frontend with the Express API",
            "Implement routing and dynamic components",
          ],
        },
        {
          moduleNumber: 6,
          moduleTitle: "Integrating MERN Stack",
          duration: "2 Weeks",
          topics: [
            "Connecting React Frontend with Express Backend",
            "End-to-End data flow in MERN Stack",
            "Role of APIs in integration",
            "Handling CORS issues",
            "State Management in React with Redux or Context API",
          ],
          practicals: [
            "Build a simple end-to-end MERN stack application (e.g., Blogging Platform)",
          ],
        },
        {
          moduleNumber: 7,
          moduleTitle: "Advanced MERN Stack Topics",
          duration: "3 Weeks",
          topics: [
            "Optimizing MongoDB Queries for performance",
            "File Uploads and Storage (Multer)",
            "Real-time Data with WebSockets (Socket.io)",
            "Role-Based Authentication and Authorization",
            "Server-Side Rendering (SSR) with Next.js",
            "Unit Testing in MERN Applications (Jest, Mocha/Chai)",
          ],
          practicals: [
            "Implement file uploads in the MERN stack project",
            "Add real-time features like notifications using WebSockets",
            "Create a Next.js-based project for SSR (optional)",
          ],
        },
        {
          moduleNumber: 8,
          moduleTitle: "Deployment and DevOps",
          duration: "1 Week",
          topics: [
            "Hosting MERN applications on cloud platforms (AWS, Heroku, Vercel, Netlify)",
            "Configuring and managing a production-ready MongoDB",
            "Dockerizing the MERN application",
            "Setting up CI/CD pipelines for automated deployment",
          ],
          practicals: [
            "Deploy the MERN application to a cloud platform",
            "Set up CI/CD pipelines for automated deployment",
          ],
        },
        {
          moduleNumber: 9,
          moduleTitle: "Capstone Project",
          duration: "3 Weeks",
          topics: ["Build a complete end-to-end MERN stack application"],
          projectOptions: [
            "E-Commerce Platform",
            "Social Networking Site",
            "Online Learning Platform",
            "Project Management Tool",
          ],
        },
        {
          moduleNumber: 10,
          moduleTitle: "Career Guidance",
          duration: "1 Week",
          topics: [
            "Writing effective resumes for Full Stack roles",
            "Preparing for technical interviews",
            "Solving coding problems in JavaScript",
            "Mock interviews and coding challenges",
          ],
          outcomes: [
            "Portfolio-ready projects",
            "Job-ready skills and interview preparation",
          ],
        },
      ],
    },
    flutter: {
      title: "Cross-Platform Mobile App Development with Flutter",
      totalDuration: "8 Weeks",
      learn: [
        "Understanding Flutter Architecture",
        "Dart Programming Basics",
        "Building UI Components",
        "State Management",
        "Working with APIs",
        "Handling Navigation and Routing",
        "Real-Time Data and WebSocket Integration",
        "Cross-Platform Development",
        "Testing Flutter Apps",
        "Publishing and Deployment",
      ],
      outcomes: {
        desc: "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience with the guidance of industry experts. By working directly with leading technology tools and frameworks, we ensure that our students gain the skills and knowledge needed to excel in modern mobile and cross-platform development.",
        points: [
          {
            title: "Become a Flutter Developer",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses are designed to help you master Flutter and Dart to build stunning, high-performance cross-platform applications for iOS, Android, and the web.",
          },
          {
            title: "Build Real-World Projects",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses include hands-on projects where you'll design and develop fully functional mobile applications to showcase your expertise.",
          },
          {
            title: "Launch Your Career",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.We prepare you for exciting career opportunities in mobile app development, equipping you with a strong portfolio and in-demand Flutter skills.",
          },
          {
            title: "Get Certified",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Earn a globally recognized certification that demonstrates your proficiency in Flutter development, boosting your confidence and employability.",
          },
        ],
      },
      overview:
        "A comprehensive program teaching mobile app development using Flutter, Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Perfect for developers aiming to enter the mobile app development market with a modern, efficient framework.",
      modules: [
        {
          moduleNumber: 1,
          moduleTitle: "Introduction to Cross-Platform Development and Flutter",
          duration: "1 Week",
          topics: [
            "Overview of Cross-Platform Development",
            "Why Flutter? Advantages, Use Cases",
            "Dart Programming Basics",
            "Setting Up the Flutter Development Environment",
            "Flutter Architecture: Widgets, Hot Reload, Flutter Engine",
            "Exploring Tools: Flutter CLI, DevTools",
          ],
          practicals: [
            "Install Flutter, create and run a 'Hello World' app",
            "Write basic Dart scripts to understand syntax",
          ],
        },
        {
          moduleNumber: 2,
          moduleTitle: "Dart Programming Essentials",
          duration: "2 Weeks",
          topics: [
            "Variables, Data Types, Operators",
            "Control Flow: Loops, Conditionals",
            "Functions and Anonymous Functions",
            "Object-Oriented Programming in Dart (Classes, Inheritance, Polymorphism)",
            "Collections (Lists, Maps, Sets)",
            "Asynchronous Programming: Futures, async/await, Streams",
          ],
          practicals: [
            "Build a Dart CLI program (e.g., To-Do Manager)",
            "Demonstrate async data handling using Futures",
          ],
        },
        {
          moduleNumber: 3,
          moduleTitle: "Flutter Basics",
          duration: "2 Weeks",
          topics: [
            "Stateless vs Stateful Widgets",
            "Layouts: Rows, Columns, Containers, Stacks",
            "Widget Lifecycle",
            "Styling and Theming",
            "Navigation Basics (Navigator 1.0)",
          ],
          practicals: [
            "Create a simple Login UI",
            "Implement screen navigation using Navigator",
          ],
        },
        {
          moduleNumber: 4,
          moduleTitle: "Advanced Flutter Widgets and Features",
          duration: "3 Weeks",
          topics: [
            "Form Handling and Input Validation",
            "Working with Lists and Grids",
            "Animations and Gestures",
            "Custom Widgets and Reusable Components",
            "Responsive Design with MediaQuery, LayoutBuilder",
          ],
          practicals: [
            "Develop a shopping app with multiple screens and animations",
            "Implement responsive UI",
          ],
        },
      ],
    },
    dotNetBackend: {
      title: ".NET Back-End Developer Course",
      totalDuration: "22 Weeks",
      learn: [
        "Understanding .NET Framework",
        "Building Web APIs with ASP.NET Core",
        "Database Interaction with Entity Framework",
        "Authentication and Authorization with ASP.NET Identity",
        "Working with SQL Server",
        "WebSocket and SignalR for Real-Time Communication",
        "Unit Testing and Test-Driven Development",
        "Deployment and Hosting with Azure",
        "Version Control with Git and GitHub",
        "Debugging and Troubleshooting .NET Applications",
      ],
      overview:
        "A detailed program designed to teach the core principles and practices of back-end development using the .NET framework. This course focuses on building robust, scalable, and secure web applications with C# and the powerful features of the .NET ecosystem. Ideal for developers looking to specialize in server-side programming, database management, and API development. The program prepares developers for high-demand roles by leveraging .NET’s versatile toolset to create efficient, high-performance applications for businesses and enterprises.",
      outcomes: {
        desc: "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience with the guidance of industry experts. By working directly with leading frameworks and tools, we ensure that our students gain the skills and knowledge necessary to excel in modern back-end development.",
        points: [
          {
            title: "Become a .NET Back-End Developer",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses are designed to help you master .NET and C# for building robust, scalable, and secure back-end systems for web and enterprise applications.",
          },
          {
            title: "Build Real-World Projects",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses include hands-on projects where you’ll design and implement APIs, databases, and server-side logic to solve real-world business challenges.",
          },
          {
            title: "Launch Your Career",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.We prepare you for exciting career opportunities as a back-end developer, equipping you with in-demand skills in .NET and related technologies.",
          },
          {
            title: "Get Certified",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Earn an industry-recognized certification in .NET back-end development that validates your expertise and helps you stand out in the competitive job market.",
          },
        ],
      },
      modules: [
        {
          moduleNumber: 1,
          moduleTitle:
            "Introduction to Back-End Development and .NET Framework",
          duration: "1 Week",
          topics: [
            "Overview of Back-End Development",
            "Introduction to .NET Ecosystem (.NET Framework, .NET Core, .NET 5/6+)",
            "Understanding CLR, FCL, and BCL",
            "Setting up the .NET development environment",
            "Introduction to Visual Studio/Visual Studio Code",
            "Version control with Git and GitHub",
          ],
          practicals: [
            "Create a simple console application in .NET",
            "Set up a Git repository for version control",
          ],
        },
        {
          moduleNumber: 2,
          moduleTitle: "C# Programming Essentials",
          duration: "2 Weeks",
          topics: [
            "Variables, Data Types, and Operators",
            "Control Structures (if-else, switch, loops)",
            "Methods and Parameters",
            "Object-Oriented Programming in C# (Classes, Objects, Inheritance, Polymorphism)",
            "Collections and Generics",
            "Exception Handling",
            "Asynchronous Programming with async/await",
          ],
          practicals: [
            "Write a C# program using OOP principles",
            "Create an asynchronous method to fetch data",
          ],
        },
        {
          moduleNumber: 3,
          moduleTitle: "Introduction to .NET Core and ASP.NET Core",
          duration: "2 Weeks",
          topics: [
            "Understanding .NET Core and its Cross-Platform Nature",
            "Introduction to ASP.NET Core",
            "Setting up an ASP.NET Core project",
            "Middleware in ASP.NET Core",
            "Dependency Injection (DI) in ASP.NET Core",
            "Creating RESTful APIs in ASP.NET Core",
            "Using Postman/Swagger to test APIs",
          ],
          practicals: [
            "Build a simple API to manage CRUD operations for a resource (e.g., Product API)",
            "Add Swagger documentation to the API",
          ],
        },
        {
          moduleNumber: 4,
          moduleTitle: "Database Integration",
          duration: "2 Weeks",
          topics: [
            "Introduction to Relational Databases",
            "SQL Basics (DDL, DML, Joins, Stored Procedures)",
            "Introduction to Entity Framework Core (EF Core)",
            "Code-First vs Database-First Approach",
            "Migrations and Database Seeding",
            "LINQ (Language Integrated Query)",
            "Query Optimization and Best Practices",
          ],
          practicals: [
            "Set up a SQL Server database",
            "Build an API integrated with EF Core for database operations",
          ],
        },
        {
          moduleNumber: 5,
          moduleTitle: "Advanced ASP.NET Core Concepts",
          duration: "3 Weeks",
          topics: [
            "Authentication and Authorization",
            "JWT (JSON Web Tokens)",
            "Role-Based Access Control (RBAC)",
            "Error Handling and Logging",
            "Caching Strategies (In-Memory, Distributed)",
            "Background Services and Hosted Services",
            "File Uploads and Downloads",
            "Internationalization and Localization",
          ],
          practicals: [
            "Implement JWT-based authentication in an API",
            "Add caching to enhance API performance",
            "Build a file upload/download feature in the API",
          ],
        },
        {
          moduleNumber: 6,
          moduleTitle: "Microservices Architecture",
          duration: "2 Weeks",
          topics: [
            "Understanding Microservices vs Monolithic Architecture",
            "Building Microservices with ASP.NET Core",
            "Communication Between Microservices (REST, gRPC)",
            "Service Discovery (e.g., Consul, Eureka)",
            "Implementing API Gateways (e.g., Ocelot)",
            "Event-Driven Architecture and Message Brokers (RabbitMQ, Kafka)",
          ],
          practicals: [
            "Build a small microservices-based system",
            "Use RabbitMQ for inter-service communication",
          ],
        },
        {
          moduleNumber: 7,
          moduleTitle: "Performance and Scalability",
          duration: "1 Week",
          topics: [
            "Asynchronous Programming for Performance",
            "Understanding and Managing Threading",
            "Profiling and Monitoring Applications (e.g., Application Insights, MiniProfiler)",
            "Load Testing with tools like Apache JMeter or Postman",
          ],
          practicals: [
            "Profile an ASP.NET Core application and optimize its performance",
          ],
        },
        {
          moduleNumber: 8,
          moduleTitle: "Deployment and Hosting",
          duration: "1 Week",
          topics: [
            "Hosting .NET Applications on IIS, Docker, and Cloud Platforms (Azure, AWS)",
            "Understanding CI/CD pipelines (Azure DevOps, GitHub Actions)",
            "Configuring and Managing AppSettings and Secrets",
            "Monitoring and Logging in Production Environments",
          ],
          practicals: [
            "Containerize an ASP.NET Core application using Docker",
            "Deploy the application to Azure App Service",
          ],
        },
        {
          moduleNumber: 9,
          moduleTitle: "Testing and Debugging",
          duration: "2 Weeks",
          topics: [
            "Unit Testing with xUnit/MSTest",
            "Mocking Dependencies (Moq)",
            "Integration Testing for APIs",
            "Debugging in Visual Studio",
            "Performance Testing and Load Testing",
          ],
          practicals: [
            "Write unit tests for API endpoints",
            "Perform integration tests on the API",
          ],
        },
        {
          moduleNumber: 10,
          moduleTitle: "Advanced Topics",
          duration: "2 Weeks",
          topics: [
            "CQRS (Command Query Responsibility Segregation) and MediatR",
            "Understanding and Implementing Design Patterns",
            "SignalR for Real-Time Communication",
            "Secure APIs with OAuth2 and OpenID Connect",
            "Implementing GraphQL APIs with ASP.NET Core",
          ],
          practicals: [
            "Build a SignalR-based chat application",
            "Implement a GraphQL endpoint for an existing API",
          ],
        },
        {
          moduleNumber: 11,
          moduleTitle: "Capstone Project",
          duration: "3 Weeks",
          topics: [
            "Build a full-scale back-end application integrating all concepts learned",
          ],
          projectOptions: [
            "E-Commerce API with Authentication and Payment Integration",
            "Social Media API with Real-Time Chat",
            "Online Learning Platform API with Role-Based Permissions",
          ],
          requirements: [
            "Authentication and Authorization",
            "Database integration with EF Core",
            "Deployment on a cloud platform",
          ],
        },
        {
          moduleNumber: 12,
          moduleTitle: "Career Preparation",
          duration: "1 Week",
          topics: [
            "Building a Portfolio with .NET Projects",
            "Writing a Resume for Back-End Developer Roles",
            "Preparing for Technical Interviews",
            "Solving Coding Problems in C#",
            "Mock Interviews",
          ],
          outcomes: [
            "Portfolio-ready projects",
            "Confidence in interview preparation",
          ],
        },
      ],
    },
    cyberSecurity: {
      title: "Cybersecurity Professional Course",
      totalDuration: "24 Weeks",
      learn: [
        "Network Security",
        "Encryption and Cryptography",
        "Security Vulnerabilities",
        "Malware and Threats",
        "Firewalls and Intrusion Detection Systems",
        "Authentication and Access Control",
        "Penetration Testing",
        "Security Policy and Governance",
        "Incident Response",
        "Secure Software Development",
      ],
      outcomes: {
        desc: "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience with the guidance of industry experts. By working directly with industry-leading tools and frameworks, we ensure that our students gain the skills and knowledge necessary to excel in the ever-evolving field of cybersecurity.",
        points: [
          {
            title: "Become a Cybersecurity Professional",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses are designed to help you master the skills needed to identify, mitigate, and prevent cyber threats, ensuring the security of digital systems and networks.",
          },
          {
            title: "Build Real-World Expertise",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses include hands-on exercises, including penetration testing, threat analysis, and incident response simulations to prepare you for real-world challenges.",
          },
          {
            title: "Launch Your Career",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.We prepare you for career opportunities in cybersecurity with a strong portfolio of projects and expertise in the latest tools and frameworks, such as SIEM, IDS/IPS, and ethical hacking.",
          },
          {
            title: "Get Certified",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Earn industry-recognized certifications in cybersecurity that validate your expertise, such as CEH (Certified Ethical Hacker), CompTIA Security+, or CISSP, boosting your employability.",
          },
        ],
      },
      overview:
        "A thorough security program covering both offensive and defensive security practices. Highly relevant in today's threat landscape with increasing cyber attacks. Combines theoretical knowledge with practical labs and real-world scenarios. Graduates are prepared for the growing demand in security professionals across all industries. Currently one of the highest-paying tech specializations.",
      modules: [
        {
          moduleNumber: 1,
          moduleTitle: "Introduction to Cybersecurity",
          duration: "1 Week",
          topics: [
            "Overview of Cybersecurity and its importance",
            "CIA Triad (Confidentiality, Integrity, Availability)",
            "Types of cyber threats and attacks",
            "Basic security terminology",
            "Career paths in cybersecurity",
            "Setting up a security lab environment",
          ],
          practicals: [
            "Set up a virtual lab environment using VirtualBox/VMware",
            "Install Kali Linux and other security tools",
          ],
        },
        {
          moduleNumber: 2,
          moduleTitle: "Networking Fundamentals for Security",
          duration: "3 Weeks",
          topics: [
            "TCP/IP Protocol Suite",
            "OSI Model and its security implications",
            "Network architecture and topologies",
            "IPv4 and IPv6 addressing",
            "DNS, DHCP, and routing protocols",
            "Network security tools and protocols",
            "Wireshark and packet analysis",
          ],
          practicals: [
            "Perform network scanning and mapping",
            "Analyze network traffic using Wireshark",
            "Configure basic network security settings",
          ],
        },
        {
          moduleNumber: 3,
          moduleTitle: "System Security",
          duration: "3 Weeks",
          topics: [
            "Operating System Security (Windows, Linux)",
            "Access Control and Authentication",
            "File system security",
            "System hardening techniques",
            "Security policies and procedures",
            "Patch management",
            "Endpoint protection",
          ],
          practicals: [
            "Implement system hardening measures",
            "Configure access controls and user permissions",
            "Perform security audits",
          ],
        },
        {
          moduleNumber: 4,
          moduleTitle: "Web Application Security",
          duration: "3 Weeks",
          topics: [
            "OWASP Top 10 vulnerabilities",
            "Web application architecture",
            "Common web attacks (XSS, CSRF, SQL Injection)",
            "Security headers and configurations",
            "Web application firewalls",
            "Secure coding practices",
            "Authentication and session management",
          ],
          practicals: [
            "Identify and exploit common web vulnerabilities",
            "Implement security measures in web applications",
            "Use tools like OWASP ZAP and Burp Suite",
          ],
        },
        {
          moduleNumber: 5,
          moduleTitle: "Cryptography and Encryption",
          duration: "2 Weeks",
          topics: [
            "Cryptography basics and mathematics",
            "Symmetric and asymmetric encryption",
            "Hashing algorithms and digital signatures",
            "PKI and certificate management",
            "TLS/SSL protocols",
            "Encryption tools and implementation",
            "Quantum cryptography basics",
          ],
          practicals: [
            "Implement various encryption techniques",
            "Work with digital certificates",
            "Set up and configure SSL/TLS",
          ],
        },
        {
          moduleNumber: 6,
          moduleTitle: "Network Security and Penetration Testing",
          duration: "3 Weeks",
          topics: [
            "Penetration testing methodology",
            "Reconnaissance and information gathering",
            "Vulnerability assessment",
            "Exploitation techniques",
            "Post-exploitation and privilege escalation",
            "Wireless network security",
            "Social engineering",
          ],
          practicals: [
            "Conduct a full penetration test",
            "Use tools like Metasploit and Nmap",
            "Perform wireless network security assessment",
          ],
        },
        {
          moduleNumber: 7,
          moduleTitle: "Incident Response and Digital Forensics",
          duration: "2 Weeks",
          topics: [
            "Incident response planning and procedures",
            "Digital forensics methodology",
            "Evidence collection and handling",
            "Memory and disk forensics",
            "Log analysis and monitoring",
            "Malware analysis basics",
            "Report writing and documentation",
          ],
          practicals: [
            "Perform basic digital forensics investigation",
            "Analyze system logs and create reports",
            "Handle security incidents using IR procedures",
          ],
        },
        {
          moduleNumber: 8,
          moduleTitle: "Cloud Security",
          duration: "2 Weeks",
          topics: [
            "Cloud computing security concepts",
            "AWS/Azure/GCP security features",
            "Cloud security architecture",
            "Identity and access management in cloud",
            "Container security",
            "Cloud compliance and regulations",
            "DevSecOps principles",
          ],
          practicals: [
            "Implement security in cloud environments",
            "Configure cloud security controls",
            "Perform cloud security assessment",
          ],
        },
        {
          moduleNumber: 9,
          moduleTitle: "Security Governance and Compliance",
          duration: "2 Weeks",
          topics: [
            "Information security frameworks (ISO 27001, NIST)",
            "Risk assessment and management",
            "Security policies and procedures",
            "Compliance requirements (GDPR, HIPAA, PCI DSS)",
            "Security auditing",
            "Business continuity and disaster recovery",
            "Security awareness training",
          ],
          practicals: [
            "Develop security policies and procedures",
            "Conduct risk assessments",
            "Create security awareness training materials",
          ],
        },
        {
          moduleNumber: 10,
          moduleTitle: "Capstone Project",
          duration: "2 Weeks",
          topics: ["Complete security assessment and implementation project"],
          projectOptions: [
            "Enterprise Security Assessment",
            "Security Implementation for an Organization",
            "Incident Response Plan Development",
            "Security Architecture Design",
          ],
        },
        {
          moduleNumber: 11,
          moduleTitle: "Career Preparation and Certification",
          duration: "1 Week",
          topics: [
            "Resume building for security roles",
            "Security certification preparation (CompTIA Security+, CEH)",
            "Interview preparation",
            "Building professional network",
            "Continuing education in security",
          ],
          outcomes: [
            "Job-ready security skills",
            "Professional portfolio",
            "Certification preparation",
          ],
        },
      ],
    },
    python: {
      title: "Professional Python Development Course",
      totalDuration: "20 Weeks",
      learn: [
        "Python Programming Fundamentals",
        "Object-Oriented Programming (OOP)",
        "Web Development with Django/Flask",
        "Data Handling and Processing",
        "Database Interaction",
        "APIs and Web Services",
        "Automation and Scripting",
        "Testing and Debugging",
        "Machine Learning Basics",
        "Project Development",
      ],
      outcomes: {
        desc: "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience with the guidance of industry experts. By working directly with Python's versatile tools and libraries, we ensure that our students gain the skills and knowledge necessary to excel in various domains of software development.",
        points: [
          {
            title: "Become a Python Developer",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses are designed to help you master Python, enabling you to build applications, automate tasks, and analyze data efficiently.",
          },
          {
            title: "Build Real-World Expertise",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses include hands-on projects where you'll work on web applications, data analysis, machine learning models, or automation scripts to showcase your skills.",
          },
          {
            title: "Launch Your Career",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.We prepare you for exciting career opportunities in fields like web development, data science, machine learning, and software engineering with a strong portfolio.",
          },
          {
            title: "Get Certified",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Earn an industry-recognized certification in Python programming that validates your skills and helps you stand out in the competitive tech industry.",
          },
        ],
      },
      overview:
        "Versatile programming course teaching one of the most popular and accessible languages. Perfect for both beginners and those transitioning into programming. Covers multiple domains including web development, automation, and data analysis. The skills learned are highly transferable and in-demand across various industries. Excellent starting point for a technology career.",
      modules: [
        {
          moduleNumber: 1,
          moduleTitle: "Introduction to Python Programming",
          duration: "2 Weeks",
          topics: [
            "Python installation and environment setup",
            "Basic syntax and data types",
            "Variables and operators",
            "Control structures (if, loops)",
            "Functions and modules",
            "Basic input/output operations",
            "Python development tools and IDEs",
          ],
          practicals: [
            "Create simple Python scripts",
            "Solve basic programming challenges",
            "Work with different data types",
          ],
        },
        {
          moduleNumber: 2,
          moduleTitle: "Data Structures and Algorithms in Python",
          duration: "3 Weeks",
          topics: [
            "Lists, tuples, and dictionaries",
            "Sets and arrays",
            "String manipulation",
            "Basic algorithms (sorting, searching)",
            "Algorithm complexity and Big O notation",
            "Custom data structures",
            "Collections module",
          ],
          practicals: [
            "Implement basic data structures",
            "Write sorting and searching algorithms",
            "Solve algorithmic problems",
          ],
        },
        {
          moduleNumber: 3,
          moduleTitle: "Object-Oriented Programming in Python",
          duration: "2 Weeks",
          topics: [
            "Classes and objects",
            "Inheritance and polymorphism",
            "Encapsulation and abstraction",
            "Magic methods",
            "Property decorators",
            "Exception handling",
            "Object composition",
          ],
          practicals: [
            "Design and implement class hierarchies",
            "Create a small OOP-based project",
            "Handle exceptions properly",
          ],
        },
        {
          moduleNumber: 4,
          moduleTitle: "File Operations and Data Handling",
          duration: "2 Weeks",
          topics: [
            "File operations (read, write, append)",
            "Working with CSV and JSON",
            "XML processing",
            "Regular expressions",
            "Binary file handling",
            "File system operations",
            "Working with paths",
          ],
          practicals: [
            "Create file processing scripts",
            "Parse different file formats",
            "Implement data validation",
          ],
        },
        {
          moduleNumber: 5,
          moduleTitle: "Database Programming with Python",
          duration: "2 Weeks",
          topics: [
            "SQL basics with SQLite",
            "Python DB-API",
            "Working with SQLAlchemy ORM",
            "MongoDB with PyMongo",
            "Database design principles",
            "CRUD operations",
            "Transaction management",
          ],
          practicals: [
            "Create a database-driven application",
            "Implement CRUD operations",
            "Work with different databases",
          ],
        },
        {
          moduleNumber: 6,
          moduleTitle: "Web Development with Python",
          duration: "3 Weeks",
          topics: [
            "Web frameworks (Flask/Django)",
            "RESTful API development",
            "HTML templates",
            "Form handling",
            "Authentication and authorization",
            "Database integration",
            "API testing",
          ],
          practicals: [
            "Build a web application",
            "Create RESTful APIs",
            "Implement authentication",
          ],
        },
        {
          moduleNumber: 7,
          moduleTitle: "Python for Data Science",
          duration: "2 Weeks",
          topics: [
            "NumPy for numerical computing",
            "Pandas for data analysis",
            "Data visualization with Matplotlib/Seaborn",
            "Basic statistical analysis",
            "Data cleaning and preprocessing",
            "Jupyter notebooks",
            "Basic machine learning concepts",
          ],
          practicals: [
            "Analyze real-world datasets",
            "Create data visualizations",
            "Build data analysis notebooks",
          ],
        },
        {
          moduleNumber: 8,
          moduleTitle: "Testing and Debugging",
          duration: "1 Week",
          topics: [
            "Unit testing with pytest",
            "Test-driven development",
            "Debugging techniques",
            "Code coverage",
            "Mocking and patches",
            "Integration testing",
            "Performance profiling",
          ],
          practicals: [
            "Write comprehensive test suites",
            "Debug complex applications",
            "Implement TDD",
          ],
        },
        {
          moduleNumber: 9,
          moduleTitle: "Advanced Python Concepts",
          duration: "1 Week",
          topics: [
            "Decorators and generators",
            "Context managers",
            "Multithreading and multiprocessing",
            "Async programming with asyncio",
            "Memory management",
            "Design patterns in Python",
            "Code optimization",
          ],
          practicals: [
            "Implement advanced Python features",
            "Create concurrent applications",
            "Optimize Python code",
          ],
        },
        {
          moduleNumber: 10,
          moduleTitle: "Capstone Project",
          duration: "1 Week",
          topics: ["Build a complete Python application"],
          projectOptions: [
            "Web Application with Dashboard",
            "Data Analysis Tool",
            "Automation System",
            "REST API Service",
          ],
        },
        {
          moduleNumber: 11,
          moduleTitle: "Career Preparation",
          duration: "1 Week",
          topics: [
            "Python coding best practices",
            "Code review techniques",
            "Technical interview preparation",
            "Portfolio development",
            "Python ecosystem and community",
          ],
          outcomes: [
            "Strong Python development skills",
            "Portfolio of projects",
            "Interview readiness",
          ],
        },
      ],
    },
    dotNetFullStack: {
      title: ".NET Full Stack Development with React",
      totalDuration: "24 Weeks",
      learn: [
        "Full-Stack Architecture Understanding",
        "Front-End Development",
        "Back-End Development",
        "Database Management",
        "Server-Side Programming",
        "Authentication and Security",
        "Real-Time Applications",
        "Deployment and Hosting",
        "Version Control and Collaboration",
        "Debugging and Troubleshooting",
      ],
      outcomes: {
        desc: "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience with the guidance of industry experts. By working directly with .NET technologies and industry-leading tools, we ensure that our students gain the skills and knowledge necessary to excel as full-stack developers.",
        points: [
          {
            title: "Become a .NET Full Stack Developer",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses are designed to help you master both front-end and back-end development using .NET technologies, including ASP.NET, C#, and modern front-end frameworks like React or Angular.",
          },
          {
            title: "Build Real-World Expertise",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses include hands-on projects where you’ll design and develop full-stack applications, working with both databases and APIs to create end-to-end solutions.",
          },
          {
            title: "Launch Your Career",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.We prepare you for exciting career opportunities as a full-stack developer by equipping you with in-demand skills in .NET, databases, and modern front-end frameworks.",
          },
          {
            title: "Get Certified",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Earn a globally recognized certification in .NET full-stack development that validates your proficiency and boosts your confidence and employability.",
          },
        ],
      },
      overview:
        "Enterprise-focused full-stack development program combining .NET's robust backend with React's modern frontend. Ideal for those aiming to work in large organizations or enterprise environments. The combination of C#'s strong typing and React's flexibility makes it perfect for building scalable, maintainable applications. Strong emphasis on security and cloud deployment makes graduates valuable to major corporations.",
      modules: [
        {
          moduleNumber: 1,
          moduleTitle: "Introduction to Full Stack Development",
          duration: "1 Week",
          topics: [
            "Overview of Full Stack Development",
            "Understanding the .NET and React Technology Stack",
            "Role of Frontend, Backend, and Databases in Full Stack Development",
            "Setting up Development Environment: Visual Studio/VS Code, Node.js, .NET SDK",
            "Introduction to Git and GitHub for version control",
            "Understanding web architecture and client-server model",
          ],
          practicals: [
            "Set up a development environment with all required tools",
            "Create a basic 'Hello World' application in .NET and React",
            "Initialize and manage a Git repository",
          ],
        },
        {
          moduleNumber: 2,
          moduleTitle: "C# and .NET Core Fundamentals",
          duration: "2 Weeks",
          topics: [
            "C# Programming Essentials: Variables, Data Types, Control Structures",
            "Object-Oriented Programming in C# (Classes, Inheritance, Polymorphism)",
            "Introduction to .NET Core and its Cross-Platform Capabilities",
            "Working with .NET Core Console Applications",
            "Introduction to LINQ (Language Integrated Query)",
            "Asynchronous Programming in C# (async/await)",
            "Collections and Generics",
          ],
          practicals: [
            "Build console applications demonstrating C# OOP principles",
            "Implement LINQ queries for data manipulation",
            "Create asynchronous programs",
          ],
        },
        {
          moduleNumber: 3,
          moduleTitle: "ASP.NET Core Basics (Backend Development)",
          duration: "2 Weeks",
          topics: [
            "Overview of ASP.NET Core MVC and Web API",
            "Setting up an ASP.NET Core Web API Project",
            "Creating Controllers and Routing",
            "Dependency Injection in ASP.NET Core",
            "Understanding and Using Middleware",
            "Implementing RESTful APIs with ASP.NET Core",
            "API Documentation with Swagger/OpenAPI",
          ],
          practicals: [
            "Build RESTful APIs with CRUD operations",
            "Implement dependency injection",
            "Document APIs using Swagger",
          ],
        },
        {
          moduleNumber: 4,
          moduleTitle: "SQL Server and Entity Framework Core",
          duration: "2 Weeks",
          topics: [
            "Introduction to Relational Databases and SQL Server",
            "Setting up SQL Server and SSMS",
            "SQL fundamentals: DDL, DML, and Queries",
            "Introduction to Entity Framework Core (EF Core)",
            "Code-First and Database-First Approaches",
            "Migrations and Database Seeding",
            "Using LINQ with EF Core",
          ],
          practicals: [
            "Design and implement database schemas",
            "Create and manage database migrations",
            "Perform database operations using EF Core",
          ],
        },
        {
          moduleNumber: 5,
          moduleTitle: "React Fundamentals",
          duration: "3 Weeks",
          topics: [
            "Introduction to React and React Ecosystem",
            "Setting up a React Project with Create React App",
            "React Components: Functional and Class-Based",
            "JSX Syntax and React Lifecycle Methods",
            "State and Props Management",
            "Event Handling in React",
            "React Hooks (useState, useEffect, useContext, useRef)",
            "Component Lifecycle and Performance",
          ],
          practicals: [
            "Build interactive React components",
            "Implement state management in components",
            "Create a single-page application",
          ],
        },
        {
          moduleNumber: 6,
          moduleTitle: "React Advanced Topics",
          duration: "2 Weeks",
          topics: [
            "Routing with React Router",
            "State Management with Redux/Context API",
            "Form Handling and Validation",
            "API Integration using Axios/Fetch",
            "React Performance Optimization",
            "Error Boundaries and Error Handling",
            "Component Design Patterns",
          ],
          practicals: [
            "Implement client-side routing",
            "Create forms with validation",
            "Integrate with backend APIs",
          ],
        },
        {
          moduleNumber: 7,
          moduleTitle: "Integrating .NET Core with React",
          duration: "2 Weeks",
          topics: [
            "Full-Stack Application Architecture",
            "API Integration and CORS Configuration",
            "Authentication and Authorization (JWT)",
            "State Management across Stack",
            "Error Handling and Logging",
            "File Upload and Download",
            "Real-time Communication with SignalR",
          ],
          practicals: [
            "Build a full-stack application",
            "Implement authentication flow",
            "Add real-time features",
          ],
        },
        {
          moduleNumber: 8,
          moduleTitle: "UI/UX and Styling",
          duration: "2 Weeks",
          topics: [
            "Responsive Web Design Principles",
            "CSS Fundamentals and Flexbox/Grid",
            "Styling in React (CSS Modules, Styled Components)",
            "Material-UI/Tailwind CSS Integration",
            "UI Component Libraries",
            "Accessibility Best Practices",
            "Mobile-First Design",
          ],
          practicals: [
            "Create responsive layouts",
            "Implement custom themes",
            "Build accessible components",
          ],
        },
        {
          moduleNumber: 9,
          moduleTitle: "Advanced Backend Development",
          duration: "2 Weeks",
          topics: [
            "Advanced API Patterns",
            "Caching Strategies",
            "Background Jobs and Workers",
            "Email Services Integration",
            "Payment Gateway Integration",
            "API Security Best Practices",
            "Performance Optimization",
          ],
          practicals: [
            "Implement caching",
            "Create background jobs",
            "Integrate third-party services",
          ],
        },
        {
          moduleNumber: 10,
          moduleTitle: "Testing and Quality Assurance",
          duration: "2 Weeks",
          topics: [
            "Unit Testing in .NET (xUnit/NUnit)",
            "React Testing with Jest and React Testing Library",
            "Integration Testing",
            "E2E Testing with Cypress",
            "Test-Driven Development (TDD)",
            "Code Quality and Static Analysis",
            "Continuous Integration Setup",
          ],
          practicals: [
            "Write comprehensive tests",
            "Set up CI/CD pipeline",
            "Implement code quality checks",
          ],
        },
        {
          moduleNumber: 11,
          moduleTitle: "Deployment and DevOps",
          duration: "1 Week",
          topics: [
            "Deployment Strategies",
            "Cloud Platforms (Azure, AWS)",
            "Docker Containerization",
            "CI/CD with Azure DevOps/GitHub Actions",
            "Environment Configuration",
            "Monitoring and Logging",
            "Production Best Practices",
          ],
          practicals: [
            "Deploy full-stack application",
            "Set up monitoring and logging",
            "Configure CI/CD pipelines",
          ],
        },
        {
          moduleNumber: 12,
          moduleTitle: "Capstone Project",
          duration: "2 Weeks",
          topics: ["Build a complete full-stack application"],
          projectOptions: [
            "E-Commerce Platform",
            "Task Management System",
            "Social Media Application",
            "Learning Management System",
          ],
          requirements: [
            "Authentication and Authorization",
            "Complex Database Relations",
            "Real-time Features",
            "File Upload/Download",
            "Responsive Design",
            "Comprehensive Testing",
            "Cloud Deployment",
          ],
        },
        {
          moduleNumber: 13,
          moduleTitle: "Career Preparation",
          duration: "1 Week",
          topics: [
            "Building a Professional Portfolio",
            "Resume Writing for Full Stack Roles",
            "Technical Interview Preparation",
            "Coding Challenges Practice",
            "Soft Skills Development",
            "Job Search Strategies",
          ],
          outcomes: [
            "Professional portfolio",
            "Interview readiness",
            "GitHub profile optimization",
            "Job search preparation",
          ],
        },
      ],
    },
    databaseAdministration: {
      title: "Mastering Database Administration (DBA)",
      totalDuration: "27 Weeks",
      learn: [
        "Database Architecture Understanding",
        "SQL Server Management",
        "Backup and Recovery",
        "Database Security",
        "Query Optimization",
        "Data Modeling",
        "Performance Tuning",
        "NoSQL Database Management",
        "High Availability and Scalability",
        "Reporting and Automation",
      ],
      outcomes: {
        desc: "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience with the guidance of industry experts. By working directly with leading database technologies, we ensure that our students gain the skills and knowledge necessary to excel as database administrators.",
        points: [
          {
            title: "Become a Database Administrator",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Our courses are designed to help you master database management systems (DBMS), including installation, configuration, backup, recovery, and optimization to ensure efficient and secure data storage.",
          },
          {
            title: "Build Real-World Expertise",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.`Our courses provide hands-on experience managing relational and NoSQL databases, writing complex queries, and ensuring the integrity, availability, and performance of critical data.",
          },
          {
            title: "Launch Your Career",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.We prepare you for high-demand career opportunities as a database administrator, with expertise in tools such as SQL Server, Oracle, MySQL, and MongoDB, and a deep understanding of database security.",
          },
          {
            title: "Get Certified",
            desc: "At Scanntek NerdzMinds, we believe in practical, real-world training.Earn industry-recognized certifications in database administration, such as Microsoft Certified: Azure Database Administrator Associate or Oracle Database Administrator, that validate your expertise and increase your career prospects.",
          },
        ],
      },
      overview:
        "Comprehensive database management program covering both traditional and modern database systems. Critical for those wanting to specialize in data management and infrastructure. Focuses on high availability, disaster recovery, and security – essential skills in today's data-driven world. The inclusion of cloud databases makes graduates ready for modern infrastructure demands.",
      modules: [
        {
          moduleNumber: 1,
          moduleTitle: "Introduction to Database Administration",
          duration: "1 Week",
          topics: [
            "Role and Responsibilities of a DBA",
            "Types of Databases: Relational, NoSQL, In-Memory, Cloud",
            "Database Management Systems (DBMS): Overview (SQL Server, MySQL, Oracle, PostgreSQL, MongoDB)",
            "Understanding the Database Lifecycle",
            "Setting up Database Tools and Environment",
          ],
          practicals: [
            "Install and configure a relational database (e.g., SQL Server or MySQL)",
            "Explore database management tools (SSMS, pgAdmin, MySQL Workbench)",
          ],
        },
        {
          moduleNumber: 2,
          moduleTitle: "Relational Database Management Systems (RDBMS) Basics",
          duration: "2 Weeks",
          topics: [
            "Database Design Principles",
            "Normalization and Denormalization",
            "Data Types, Schemas, and Tables",
            "Keys: Primary, Foreign, Unique",
            "Writing SQL Queries: SELECT, INSERT, UPDATE, DELETE",
            "Indexing for Performance",
            "Views, Stored Procedures, and Triggers",
          ],
          practicals: [
            "Design and implement a normalized database",
            "Write SQL queries to manage and retrieve data",
          ],
        },
        {
          moduleNumber: 3,
          moduleTitle: "Database Architecture and Storage",
          duration: "2 Weeks",
          topics: [
            "Understanding Database Files (Data Files, Log Files, TempDB)",
            "Page and Extent Architecture",
            "Filegroups and Partitions",
            "Buffer Management and Caching",
            "Database Storage Models (Row vs. Columnar)",
            "Memory Management in Databases",
          ],
          practicals: [
            "Configure filegroups and partitions",
            "Analyze storage usage and optimize table design",
          ],
        },
        {
          moduleNumber: 4,
          moduleTitle: "Backup and Recovery Strategies",
          duration: "2 Weeks",
          topics: [
            "Importance of Database Backups",
            "Types of Backups: Full, Differential, Transaction Log",
            "Recovery Models: Simple, Full, Bulk-Logged",
            "Disaster Recovery Planning",
            "Restoring Databases and Point-in-Time Recovery",
          ],
          practicals: [
            "Perform full and differential backups",
            "Simulate database recovery from failures",
          ],
        },
        {
          moduleNumber: 5,
          moduleTitle: "High Availability and Disaster Recovery (HADR)",
          duration: "2 Weeks",
          topics: [
            "Understanding High Availability (HA) and Disaster Recovery (DR)",
            "Implementing Replication (Transactional, Merge, Snapshot)",
            "Database Mirroring and Failover Clustering",
            "Always On Availability Groups",
            "Configuring and Managing Log Shipping",
          ],
          practicals: [
            "Set up database replication",
            "Configure an Always On Availability Group",
          ],
        },
        {
          moduleNumber: 6,
          moduleTitle: "Performance Tuning and Optimization",
          duration: "3 Weeks",
          topics: [
            "Understanding Query Execution Plans",
            "Analyzing and Optimizing Queries",
            "Index Tuning and Maintenance",
            "Identifying and Resolving Deadlocks",
            "Monitoring and Managing Database Performance",
            "Using Database Monitoring Tools (e.g., SQL Profiler, Performance Insights)",
          ],
          practicals: [
            "Optimize slow-running queries",
            "Implement and monitor indexing strategies",
          ],
        },
        {
          moduleNumber: 7,
          moduleTitle: "Security and Compliance",
          duration: "2 Weeks",
          topics: [
            "Database Security Principles",
            "User Authentication and Authorization",
            "Role-Based Security Models",
            "Implementing Encryption (Transparent Data Encryption, Column-Level Encryption)",
            "Auditing and Compliance (GDPR, HIPAA, SOX)",
            "Database Security Best Practices",
          ],
          practicals: [
            "Set up a role-based security model",
            "Implement column-level encryption on sensitive data",
          ],
        },
        {
          moduleNumber: 8,
          moduleTitle: "NoSQL Databases and Big Data",
          duration: "2 Weeks",
          topics: [
            "Introduction to NoSQL Databases (MongoDB, Cassandra, DynamoDB)",
            "Differences Between SQL and NoSQL",
            "Understanding Key-Value Stores, Document Stores, and Columnar Databases",
            "Basics of Big Data and Hadoop Ecosystem",
            "Data Modeling for NoSQL Databases",
          ],
          practicals: [
            "Set up a MongoDB instance",
            "Perform CRUD operations on a NoSQL database",
          ],
        },
        {
          moduleNumber: 9,
          moduleTitle: "Cloud Databases and Database as a Service (DBaaS)",
          duration: "2 Weeks",
          topics: [
            "Introduction to Cloud Database Platforms (AWS RDS, Azure SQL, Google Cloud SQL)",
            "Benefits and Challenges of Cloud Databases",
            "Migrating On-Premise Databases to the Cloud",
            "Setting up DBaaS Solutions",
            "Backup, Scaling, and Security in Cloud Databases",
          ],
          practicals: [
            "Deploy a cloud database instance",
            "Migrate a local database to a cloud environment",
          ],
        },
        {
          moduleNumber: 10,
          moduleTitle: "Automation and Scripting for DBAs",
          duration: "2 Weeks",
          topics: [
            "Basics of PowerShell for SQL Server",
            "Automating Routine Tasks with SQL Agent Jobs",
            "Writing Shell Scripts for Database Management",
            "Introduction to Ansible for Database Automation",
            "Scheduling and Monitoring Automated Tasks",
          ],
          practicals: [
            "Create and schedule SQL Agent jobs",
            "Write PowerShell scripts for common DBA tasks",
          ],
        },
        {
          moduleNumber: 11,
          moduleTitle: "Advanced Topics in DBA",
          duration: "3 Weeks",
          topics: [
            "Sharding and Partitioning for Large Databases",
            "Handling Large Transactions and Batch Processing",
            "Database Migration Strategies",
            "Using ETL Tools (e.g., SSIS) for Data Integration",
            "Database DevOps and Continuous Integration/Delivery (CI/CD)",
            "Monitoring and Troubleshooting with Advanced Tools (e.g., Redgate, SolarWinds)",
          ],
          practicals: [
            "Implement a database migration plan",
            "Create an ETL workflow using SSIS",
          ],
        },
        {
          moduleNumber: 12,
          moduleTitle: "Capstone Project",
          duration: "3 Weeks",
          topics: ["Build a complete database administration solution"],
          projectOptions: [
            "Design and manage a high-availability e-commerce database",
            "Build a secure and optimized database for a healthcare system",
            "Migrate an on-premise database to the cloud with full recovery solutions",
          ],
          requirements: [
            "Implement backups, performance tuning, and security measures",
            "Provide disaster recovery and high availability solutions",
          ],
        },
        {
          moduleNumber: 13,
          moduleTitle: "Career Preparation",
          duration: "1 Week",
          topics: [
            "Writing an Effective Resume for DBA Roles",
            "Building a Portfolio of Database Projects",
            "Preparing for DBA Certification Exams (e.g., Microsoft DP-300, Oracle OCP)",
            "Mock Interviews and Case Studies",
          ],
          outcomes: [
            "A portfolio-ready database project",
            "Confidence to pursue DBA roles in the industry",
          ],
        },
      ],
    },
  },
};

export const sections = [
  {
    title: "Become a React Developer",
    description:
      "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience",
  },
  {
    title: "Launch Your Career",
    description:
      "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience",
  },
  {
    title: "Build Your Portfolio",
    description:
      "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience",
  },
  {
    title: "Get Certified",
    description:
      "At Scanntek NerdzMinds, we believe in practical, real-world training. Our courses are designed to provide hands-on experience",
  },
];

import aspiring from "../assets/svg/aspiring.svg";
import careers from "../assets/svg/careers.svg";
import passianated from "../assets/svg/passianated.svg";
export const whyjoin = [
  {
    title: "Aspiring Creatives",
    icon: aspiring,
    description:
      "By working directly with technology companies, we ensure that our students gain the skills and insights necessary to excel in today’s tech landscape.",
  },
  {
    title: "Career Transitioner",
    icon: careers,
    description:
      "By working directly with technology companies, we ensure that our students gain the skills and insights necessary to excel in today’s tech landscape.",
  },
  {
    title: "Passionate Developers",
    icon: passianated,
    description:
      "By working directly with technology companies, we ensure that our students gain the skills and insights necessary to excel in today’s tech landscape.",
  },
];
import mern from "../assets/images/courses/mern.png";
import mean from "../assets/images/courses/Rectangle 83 (1).png";
import flutter from "../assets/images/courses/flutter.png";
import dotnet from "../assets/images/courses/dotnet.png";
import diploma from "../assets/images/courses/diploma.png";
import database from "../assets/images/courses/database.png";
import python from "../assets/images/courses/python.png";
export const courses = [
  {
    id: 1,
    title: "MEAN Full Stack Development",
    path: "mean-full-stack-development",
    image: mern, // Replace with actual image path
    caption:
      "Learn MongoDB, Express.js, Angular, and Node.js to build dynamic web applications.",
  },
  {
    id: 2,
    title: "MERN Full Stack Development",
    path: "mern-full-stack-development",
    image: mean,
    caption:
      "Master MongoDB, Express.js, React, and Node.js for full-stack web development.",
  },
  {
    id: 3,
    title: "Cross Platform MobileApp Development With Flutter",
    path: "cross-platform-mobileapp-development-with-flutter",
    image: flutter,
    caption:
      "Create beautiful and high-performance mobile apps using Flutter and Dart.",
  },
  {
    id: 4,
    title: ".NET Back-End Developer",
    path: "dotnet-back-end-developer",
    image: dotnet,
    caption:
      "Develop robust and scalable backend applications using .NET and C#.",
  },
  {
    id: 5,
    title: ".NET Full Stack Development",
    path: "dotnet-full-stack-development",
    image: dotnet,
    caption:
      "Build end-to-end applications with .NET, covering both frontend and backend.",
  },
  {
    id: 6,
    title: "Diploma in Cyber Security 1 Year",
    path: "diploma-in-cyber-security-1-year",
    image: diploma,
    caption:
      "Gain expertise in ethical hacking, network security, and digital forensics.",
  },
  {
    id: 7,
    title: "Mastering Database Administration (DBA)",
    path: "mastering-database-administration-dba",
    image: database,
    caption:
      "Acquire skills in database management, optimization, and administration.",
  },
  {
    id: 8,
    title: "Python-Django Full Stack",
    path: "python-django-full-stack",
    image: python,
    caption:
      "Learn Python and Django to create powerful full-stack web applications.",
  },
];
