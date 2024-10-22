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
        <a
          href="https://github.com/c-phelps"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          GitHub
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Linkedin
        </a>
      </li>
    </div>
  );
}
