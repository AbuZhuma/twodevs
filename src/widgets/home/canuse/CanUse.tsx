import OneSecton from "../../../shared/ui/oneSection/OneSecton";
import styles from "./styles.module.css";

const TeamInfo = () => {
  const technologies = [
    { category: "Frontend", items: ["HTML/CSS/JS", "React.js", "Next.js", "Qwik.js", "Redux", "Zustand"] },
    { category: "Backend", items: ["Node.js", "Express.js", "NestJS", "Fastify", "GraphQL", "REST API"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines"] },
    { category: "Other", items: ["TypeScript", "WebSockets", "PWA", "WebRTC", "Jest", "Cypress"] }
  ];

  return (
    <OneSecton title="Our Team" tri={true}>
      <div className={styles.container}>
        <div className={styles.definition}>
          <p className={styles.lead}>
            <span className={styles.highlight}>Our Expertise</span> — delivering high-performance solutions through focused collaboration and modern technology stack
          </p>
        </div>

        <div className={styles.core}>
          <h3 className={styles.coreTitle}>Core Team Members</h3>
          <div className={styles.members}>
            <div className={styles.memberCard}>
              <div className={styles.memberHeader}>
                <div className={styles.memberIcon}>👨‍💻</div>
                <h4>Abdyrakhman <span>Full-stack Developer</span></h4>
              </div>
              <ul className={styles.memberSkills}>
                <li>Backend architecture and microservices</li>
                <li>Full-stack development (3+ years experience)</li>
                <li>Distributed systems and cloud solutions</li>
                <li>Database optimization and scaling</li>
              </ul>
            </div>

            <div className={styles.memberCard}>
              <div className={styles.memberHeader}>
                <div className={styles.memberIcon}>💻</div>
                <h4>Nursultan <span>Frontend Developer</span></h4>
              </div>
              <ul className={styles.memberSkills}>
                <li>Modern frontend frameworks and tooling</li>
                <li>Developer experience and APIs</li>
                <li>CMS integration and headless architectures</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.techStack}>
          <h3 className={styles.techTitle}>Our Technology Stack</h3>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
              <div key={tech.category} className={styles.techCategory}>
                <h4>{tech.category}</h4>
                <ul>
                  {tech.items.map((item) => (
                    <li key={item} className={styles.techItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.useCase}>
          <h3 className={styles.useCaseTitle}>Our Development Approach</h3>
          <ul className={styles.cases}>
            <li>Focus on simplicity and developer productivity</li>
            <li>Strong emphasis on security and privacy</li>
            <li>Open-source first mentality</li>
            <li>Continuous feedback from early adopters</li>
            <li>Pair programming on critical components</li>
          </ul>
        </div>
      </div>
    </OneSecton>
  );
};

export default TeamInfo;