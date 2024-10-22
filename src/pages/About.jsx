export default function About() {
  return (
    <div className="flexDiv">
      <h1>About Me</h1>
      <p>
        Hello! I’m Chris Phelps, an aspiring full-stack developer currently adding to my skill set through a boot camp
        course offered by UNC Chapel Hill. I bring three years of experience from my previous role as an Implementation
        Engineer at a small tech company, where I specialized in using VBA and SQL to customize the company’s Laboratory
        Information Management System to meet specific client needs.
        <br />
        <br />
        After the onset of COVID-19, I took a break to focus on family, but I’m eager to re-enter the job market with a
        fresh perspective and enhanced skills. I thoroughly enjoy coding and problem-solving challenges, and I’m excited
        about the opportunities ahead in the tech industry.
        <br />
        <br />
        Beyond my professional goals, I enjoy spending quality time with my pets—a cat and two dogs. I’m also passionate
        about improving at chess and a dedicated supporter of Liverpool FC. In my spare time, I’m looking to expand my
        hobbies by learning to play the piano/keyboard.
      </p>
      <li className="nav-item">
        <a href="https://github.com/c-phelps" target="_blank" rel="noopener noreferrer" className="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.18-.01-.74-.01-1.34-2.01.44-2.43-.49-2.59-.94-.1-.25-.53-.94-.9-1.14-.3-.16-.72-.56-.01-.57.66-.01 1.14.62 1.3.88.76 1.25 1.99.89 2.48.67.07-.55.3-.89.55-1.09-1.98-.23-3.12-1.07-3.12-2.63 0-.58.21-1.05.56-1.42-.06-.14-.24-.73.05-1.52 0 0 .45-.15 1.47.56.42-.12.88-.18 1.34-.18.46 0 .92.06 1.34.18 1.02-.71 1.47-.56 1.47-.56.29.79.11 1.38.05 1.52.35.37.56.84.56 1.42 0 1.56-1.14 2.39-3.12 2.63.31.27.57.79.57 1.59 0 1.15-.01 2.08-.01 2.36 0 .21.15.45.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
      </li>
      <li className="nav-item">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146c0-.5.5-.646.7-.646h3.2c.2 0 .7.146.7.646v13.708c0 .5-.5.646-.7.646H.7C.5 15.5 0 15.354 0 14.854V1.146zm2.4 12.094h1.4V5.273H2.4v8.967zM3.2 4.947a.8.8 0 1 1 .8-.8.8.8 0 0 1-.8.8zM12 14.857V9.75c0-1.905.7-3.188 2.206-3.188 1.022 0 1.59.346 1.89.619V6.21h-1.2c-.953 0-1.2.333-1.2 1.16v1.803h2.2v2.234h-2.2V14.857H12z" />
          </svg>
          Linkedin
        </a>
      </li>
    </div>
  );
}
