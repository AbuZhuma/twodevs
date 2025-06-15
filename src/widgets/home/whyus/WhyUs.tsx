import OneSecton from "../../../shared/ui/oneSection/OneSecton";
import styles from "./styles.module.css";

const WhyUs = () => {
  const features = [
    {
      icon: '👨‍💻',
      title: 'Experienced Team',
      description: 'Combination of expertise: 5+ years in backend development and modern frontend stack. We cover the entire development cycle.',
    },
    {
      icon: '🤝',
      title: 'Collaboration Approach',
      description: 'We work as a single unit with the client. Transparent processes, regular demos, and flexibility to requirement changes.',
    },
    {
      icon: '⚙️',
      title: 'Technical Expertise',
      description: 'Deep understanding of P2P architectures, WebRTC, cryptography, and distributed systems. We solve non-trivial tasks.',
    },
    {
      icon: '🚀',
      title: 'Result-Oriented',
      description: "We don't just write code - we create working solutions. From the first lines of code to deployment and monitoring.",
    },
    {
      icon: '🔍',
      title: 'Why Us Instead?',
      description: '- Full project responsibility\n- Professional development processes\n- Post-completion support\n- Complete documentation and knowledge transfer\n- Turnkey solutions',
    },
    {
      icon: '📈',
      title: 'Business-Oriented',
      description: 'We understand business aspects. We help choose the optimal solution, not just the most technologically complex one.',
    },
  ];
  
  return (
    <OneSecton tri={true} title="Why Choose Us?">
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <span className={styles.icon}>{feature.icon}</span>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </OneSecton>
  );
};

export default WhyUs;