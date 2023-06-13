export const enum HeaderSections {
    AboutMe= "About me",
    Expirience= "Expirience",
    Skills= "Skills",
    Projects= "Projects",
    Contact="Contact"
}

export const enum ExpirienceTitles {
  student1 = "02.02.2001 - 02.02.2000",
  student2 = "02.02.2002 - 02.02.2000",
  webDeveloper = "02.02.2003 - 02.02.2000",
}

export const enum ExpirienceBodyTitles {
    student1 ="Student",
    student2="Student",
    webDeveloper="Full-stack developer" 
}

export const enum ExpirienceBodyNames {
    student1 ="Upper Secondary School of Communications",
    student2="Pedagogical University",
    webDeveloper="Rumble Fish" 
}

export const enum ExpirienceBody {
    student1 ="In high school, specializing in information technology, I started learning web programming and other languages like C++. That is when I first got to know the React framework and Typescript, and I did my first projects using them to pass my subjects.",
    student2="At the pedagogical university, majoring in computer science, I continued to deepen my knowledge of programming. I expanded my knowledge in various areas, including low-level programming. From a theoretical perspective, I delved into various types of testing and got acquainted with new and interesting technologies for end-to-end testing.",
    webDeveloper="At Rumble Fish company, I worked as one of the four full-stack developers in team, on the Quiet project for two years. Quiet is a desktop communicator that operates using the Tor network, without requiring a server and functioning solely in a peer-to-peer network. My tasks were diverse, ranging from frontend work to creating SSL certificate verification for WebSocket connections over Tor." 
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
}

export const enum LessSkillsNames {
  firebase = "firebase",
  netlify = "netlify",
  libp2p = "libp2p",
  orbitdb = "orbitdb",
  swagger = "swagger",
  chatGPT = "chatGPT",
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
}

export const enum projectsNames {
    Quiet= "Quiet",
    WorldOfNotes="World Of Notes",
    ShipsGame = "Ships",
    PokerGame = "Poker (old)",
    ShopApp= 'Shop App (old)',
    PortfolioPage= "Portfolio page"
}

export const enum projectsDescription {
    Quiet= "aaa  aaaa dtgfhd aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa",
    WorldOfNotes="a aaaa aaaaaa aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa",
    ShipsGame = " aaaa aaaa d aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa",
    PokerGame = " aaaa aaaa d aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa",
    ShopApp= 'aaa aa aaaa dtgaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa',
    PortfolioPage= "aaa aaaa d saaa aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa aaa aaaaa aaaaa aaaa aaaa aaaa dtgfhd thgdsrgh sd frghdr tsghd saaa aaaa aaaa aaaaa"
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
];