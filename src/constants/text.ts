export const enum HeaderSections {
    AboutMe= "About me",
    Expirience= "Expirience",
    Skills= "Skills",
    Projects= "Projects",
    Contact="Contact"
}

export const enum ExpirienceTitles {
  student1 = "09.2015 - 05.2019",
  student2 = "10.2019 - until now",
  webDeveloper = "02.2021 - 01.2023",
  conference = "22.07.2022 - 24.07.2022",
}

export const enum ExpirienceBodyTitles {
  student1 = "Student",
  student2 = "Student",
  conference = "Conference",
  webDeveloper = "Full-stack developer",
}

export const enum ExpirienceBodyNames {
  student1 = "Upper Secondary School of Communications",
  student2 = "Pedagogical University",
  conference = "A New Hope - Hackers On Planet Earth",
  webDeveloper = "Rumble Fish Software Development",
}

export const enum ExpirienceBody {
  student1 = "In high school, specializing in information technology, I started learning web programming and other languages like C++. That is when I first got to know the React framework and Typescript, and I did my first projects using them to pass my subjects.",
  student2 = "At the Pedagogical University, majoring in computer science, I continued to deepen my knowledge of programming. I expanded my knowledge in various areas, including low-level programming. From a theoretical perspective, I delved into various types of testing and got acquainted with new and interesting technologies for end-to-end testing.",
  conference = "As a member of a team of four developers and together with the project founder, I participated in the New Hope conference. The project, on which I worked for two years, was presented during the event. We showcased the Quiet application live and in person in New York City.",
  webDeveloper = "At Rumble Fish company, I worked as one of the four full-stack developers in team, on the Quiet project for two years. Quiet is a desktop communicator that operates using the Tor network, without requiring a server and functioning solely in a peer-to-peer network. My tasks were diverse, ranging from frontend work to creating SSL certificate verification for WebSocket connections over Tor, etc.",
}

export const enum SkillsNames {
  javascript = "javascript",
  ts = "ts",
  three = "three",
  react = "react",
  nodejs = "nodejs",
  redux = "redux",
  reduxSaga = "reduxSaga",
  materialUI = "materialUI",
  html = "html",
  css = "css",
  git = "git",
  electron = "electron",
  reactTestingLibrary = "reactTestingLibrary",
  jest = "jest",
}

export const enum LessSkillsNames {
  firebase = "firebase",
  netlify = "netlify",
  libp2p = "libp2p",
  swagger = "swagger",
  chatGPT = "chatGPT",
  cpp = "cpp",
}

export const enum SkillsNamesTitles {
  javascript = "JavaScript is a high-level programming language commonly used for creating interactive web content and dynamic web applications.",
  ts = "TypeScript is a typed superset of JavaScript that provides static typing, enabling developers to catch errors during development and enhance code scalability and maintainability.",
  three = "Three.js is a JavaScript library that simplifies the creation of 3D computer graphics on the web, allowing developers to build interactive 3D visualizations and games.",
  react = "React.js is a JavaScript library for building user interfaces, specifically for creating reusable UI components and efficiently updating the user interface based on changes in data.",
  nodejs = "Node.js is a JavaScript runtime environment that allows developers to run JavaScript code on the server-side, enabling server-side scripting and building scalable network applications.",
  redux = "Redux is a predictable state container for JavaScript applications, providing a centralized state management solution that helps manage and update application state in a predictable manner.",
  reduxSaga = "Redux Saga is a middleware library for Redux that helps manage side effects (such as asynchronous actions) in a more efficient and manageable way, using generators and allowing better control flow.",
  materialUI = "MaterialUI is a popular UI component library for React applications that follows the Material Design guidelines, providing pre-built components and styles to create modern and visually appealing user interfaces.",
  html = "HTML (Hypertext Markup Language) is the standard markup language for creating the structure and content of web pages, defining the elements and layout of a webpage.",
  css = "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and formatting of HTML documents, allowing developers to control the visual appearance of web pages.",
  git = "Git is a distributed version control system used for tracking changes in source code during software development, enabling collaboration among developers and facilitating code management.",
  electron = "Electron is a framework for building cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript, allowing developers to create desktop apps using familiar web development tools.",
  reactTestingLibrary = "React Testing Library is a JavaScript testing utility specifically designed for testing React components, facilitating the writing of accessible and maintainable tests that simulate user interactions and verify component behavior.",
  jest = "Jest is a JavaScript testing framework commonly used for unit testing, providing a simple and intuitive API to write tests, assert expectations, and run test suites efficiently.",
}

export const enum LessSkillsNamesTitles {
  firebase = "Firebase is a cloud-based platform by Google that provides a wide range of services for building and scaling web and mobile applications, including authentication, real-time databases, and hosting.",
  netlify = "Netlify is a web development platform that simplifies the process of deploying and hosting static websites, offering features like continuous deployment, form handling, and serverless functions.",
  libp2p = "Libp2p is a modular networking stack that enables peer-to-peer communication, providing a flexible and extensible foundation for building decentralized applications and protocols.",
  swagger = "Swagger, now known as the OpenAPI Specification, is a widely-used framework for designing, building, and documenting RESTful APIs, allowing developers to describe and interact with APIs in a standardized way.",
  chatGPT = "ChatGPT is an AI language model developed by OpenAI, designed to generate human-like responses in natural language conversations, making it useful for building chatbots, virtual assistants, and other interactive applications.",
  cpp = "C++ is a general-purpose programming language known for its efficiency and performance, widely used for developing high-performance software, system-level programming, and resource-constrained applications.",
}

export const enum projectsNames {
  Quiet = "Quiet",
  WorldOfNotes = "World Of Notes",
  ShipsGame = "Ships",
  PokerGame = "Poker (old)",
  ShopApp = "Shop App (old)",
  PortfolioPage = "Portfolio page",
}

export const enum projectsDescription {
  Quiet = "Quiet is a desktop communicator based on the Tor network. It lets you control all your data without running your own servers. I worked on Quiet for 2 years, which was my first commercial project where I was part of a development team. I worked on tasks from every part of the project.",
  WorldOfNotes = "Worlf Of Notes is a service for easy management and storage of notes. After creating an account, it allows users to access their notes on any device, wherever they are. Notes can be easily personalized by changing colors, adding lists, and moving them around a virtual 'fridge', etc. Users can also manage categories for their notes. Each note also has a reminder option, which will send the note to the accounts email address at the selected future time. This is a project that my friend and I created as part of our engineering thesis during our studies. I was responsible for the entire frontend part.",
  ShipsGame = "Ships is a game based on the popular Battleship game. It features many three-dimensional models of ships, missiles, and rocket launchers. The objective of the game is to compete against an opponent (the computer), and the first person to hit all of the opponents ships wins.",
  PortfolioPage = "Website utilizing 3D models, showcasing my projects and highlighting my experience.",
  ShopApp = "Shopp app is one of my earlier applications where I delved into Redux. It presents a fictional online clothing store. The database is based on Firebase.",
  PokerGame = "Game based on the card game of poker, involving betting on the winning hand in each round against an opponent (computer). This is one of my older projects created as a hobby, mainly serving as a sandbox for experimentation.",
}

export const enum projectsTechnologies {
  Quiet = "#TypeScript #React.js #Electron #Redux #ReduxSaga #Libp2p #OrbitDB #MaterialUi",
  WorldOfNotes = "#TypeScript #React.js #Redux #Redux-Saga #Swagger #Netlify #MaterialUi",
  ShipsGame = "#TypeScript #React.js #Redux #Three.js #MaterialUi",
  PokerGame = "#JavaScript #React.js #Redux #MaterialUi",
  ShopApp = "#TypeScript #React.js #Redux #Redux-Saga #FirebaseStorage #CloudFirestore #MaterialUi",
  PortfolioPage = "#TypeScript #React.js #Three.js #MaterialUi",
}

export const enum contacts {
  email = "damian.wilk991213@gmail.com",
  linkedin = "Damian Wilk",
  github = "Dinek007",
  phone = "+48 505 934 407",
}

export const projectLinks = [
  {
    name: "Poker (old)",
    github: "https://github.com/Dinek007/Poker/tree/master/poker",
    webPage: "https://poker-9cc0e.web.app/",
  },
  {
    name: "Quiet",
    github: "https://github.com/TryQuiet/quiet",
    webPage: "https://tryquiet.org/#Downloads",
  },
  {
    name: "World Of Notes",
    github: "https://github.com/Dinek007/notes-web-app",
    webPage: "https://main--world-of-notes-app.netlify.app/",
  },
  {
    name: "Ships",
    github: "https://github.com/Dinek007/ShipsGame",
    webPage: "https://main--shipsgame.netlify.app/",
  },
  {
    name: "Shop App (old)",
    github: "https://github.com/Dinek007/Shop_app",
    webPage: "https://shop-fashion-mistery.web.app/",
  },
  {
    name: "Portfolio page",
    github: "https://github.com/Dinek007/PortfolioPage",
    webPage: "https://main--damianwilk-portfolio.netlify.app/",
  },
  {
    name: "Conference",
    webPage: "https://hope.net/index.html",
  },
];