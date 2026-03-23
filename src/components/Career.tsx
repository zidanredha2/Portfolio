import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Nooha ASP Pvt Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Pushed 130+ Commits & raised 10+ successful PRs for development of backend applications using Node.js, Express.js, SpringBoot and
Sequelize, securing RESTful APIs with JWT. I also worked with SQLite databases, containerized services using Docker. My
responsibilities included building UIs with Tailwind CSS & React, managing projects with NPM and Git, and
applying debugging, logging, and modular code practices. Contributed to sprint planning, code reviews, and cross-functional
communication to achieve project milestones within deadlines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduated with Bachelor's in Computer Science Engineering</h4>
                <h5>Jawaharlal Nehru Technological University Hyderabad</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              built a strong foundation in data structures and algorithms, time and space complexity, and systematic problem-solving for efficient system design. My coursework has strengthened my understanding of operating systems (process synchronization, memory management, multithreading), computer networks (TCP/IP, network security, distributed systems), and database management systems, including relational and NoSQL models, indexing, and query optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Self Learner</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Self-learner continuously expanding expertise in modern full-stack development, with a strong focus on Spring Boot, FastAPI, React, and Tailwind CSS. Building and deploying real-world freelance projects, including scalable backend systems, RESTful APIs, and responsive, user-friendly frontends. Gaining hands-on experience in integrating frontend and backend technologies, optimizing performance, and following best practices to deliver production-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
