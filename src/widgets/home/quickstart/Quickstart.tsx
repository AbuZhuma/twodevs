import { useNavigate } from "react-router-dom";
import OneSecton from "../../../shared/ui/oneSection/OneSecton";
import styles from "./styles.module.css";
import { useDocsStore } from "../../../pages/docs/api";

const ProjectsShowcase = () => {
  const navigate = useNavigate();
  const { select } = useDocsStore();
  const projects = [
    {
      id: 1,
      title: "Siroca CRM System",
      description: "A comprehensive CRM solution with full Jira-like functionality, designed for seamless team collaboration and project management.",
      stack: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Redux"],
      year: "2024",
      url: "siroca-crm",
      image: `/images/siroca_logo.jpeg`
    }
  ];

  return (
    <OneSecton
      title="Our Projects"
      desc="Key products we've developed with cutting-edge technology"
      className={styles.showcase}
    >
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={styles.projectCard} 
            onClick={() => {
              select(project.url);
              navigate("/portfolio");
              window.scrollTo(0, 0);
            }}
          >
            <div className={styles.projectImage}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
                crossOrigin="anonymous"
                loading="lazy"
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectYear}>{project.year}</span>
              </div>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.projectStack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </OneSecton>
  );
};

export default ProjectsShowcase;