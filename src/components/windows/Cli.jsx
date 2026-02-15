import React from 'react';
import MacWindow from './MacWindow';
import Terminal from 'react-console-emulator';
import './cli.scss';

const Cli = ( {windowName,setWindowsState}) => {
    const welcomeMessage = `
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   Welcome to Tarun Rajput's Portfolio Terminal!          ║
║   Type 'help' to see all available commands               ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

Available Commands:
  help       - Display all available commands
  about      - Learn more about me
  skills     - View my technical skills
  projects   - See my projects
  resume     - Download my resume
  github     - View my GitHub profile
  contact    - Get contact information
  social     - View my social media links
  clear      - Clear the terminal
  echo       - Echo a message

Type any command to get started!
    `;

    return (
        
            <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
                <div className="cli-window">
                    <Terminal
                        noDefaults={true}
                        commands={{
                            echo: {
                                description: 'Echo a passed string.',
                                usage: 'echo <string>',
                                fn: (...args) => args.join(' ')
                            },
                            about: {
                                description: 'Learn more about Tarun Rajput',
                                usage: 'about',
                                fn: () => `👋 Hi! I'm Tarun Rajput, a passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies.`
                            },
                            skills: {
                                description: 'Display technical skills',
                                usage: 'skills',
                                fn: () => `
Frontend: React, JavaScript, HTML5, CSS3, SCSS, Vite
Backend: Node.js, Express, MongoDB, REST APIs
Tools: Git, VS Code, npm, Webpack
Other: Web Design, Responsive Design, UI/UX
                                `
                            },
                            projects: {
                                description: 'View my portfolio projects',
                                usage: 'projects',
                                fn: () => `
1. React Portfolio (Current) - Modern portfolio website built with React & Vite
2. Todo App - Full-stack todo application with React and Node.js
3. E-commerce Platform - Complete e-commerce solution with payment integration
4. Weather App - Real-time weather application using REST APIs
                                `
                            },
                            resume: {
                                description: 'Download or view my resume',
                                usage: 'resume',
                                fn: () => `📄 Resume available for download. Check the Resume window for more details!`
                            },
                            github: {
                                description: 'View my GitHub profile',
                                usage: 'github',
                                fn: () => `🐙 GitHub: https://github.com/Tarun8817\nCheck out my repositories and contributions!`
                            },
                            contact: {
                                description: 'Get contact information',
                                usage: 'contact',
                                fn: () => `
📧 Email: tarun.rajput@email.com
📱 Phone: +91 XXXXXXXXXX
💼 LinkedIn: https://linkedin.com/in/tarunrajput
🌐 Portfolio: https://tarunrajput.dev
                                `
                            },
                            social: {
                                description: 'View social media links',
                                usage: 'social',
                                fn: () => `
🐙 GitHub: https://github.com/Tarun8817
💼 LinkedIn: https://linkedin.com/in/tarunrajput
🐦 Twitter: https://twitter.com/tarunrajput
📘 Facebook: https://facebook.com/tarunrajput
                                `
                            },
                            help: {
                                description: 'Display all available commands',
                                usage: 'help',
                                fn: () => `
Available Commands:
  help       - Display all available commands
  about      - Learn more about me
  skills     - View my technical skills
  projects   - See my projects
  resume     - Download my resume
  github     - View my GitHub profile
  contact    - Get contact information
  social     - View my social media links
  clear      - Clear the terminal
  echo       - Echo a message

Type 'help <command>' for more details about a specific command.
                                `
                            }
                        }}
                        welcomeMessage={welcomeMessage}
                        promptLabel="tarunrajput:~$"
                        promptLabelStyle={{ color: "#00ff00" }}
                    />
                </div>
            </MacWindow>
        
    );
};

export default Cli;