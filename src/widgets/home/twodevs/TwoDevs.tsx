import CustomCodeView from "../../../shared/ui/codeview/CustomCodeView";
import styles from "./styles.module.css";
import OneSecton from "../../../shared/ui/oneSection/OneSecton";

const TwoDevs = () => {
  const badCode = `// How others do it (problems)
function getUser(id) {
  fetch('/user/'+id)
    .then(r => r.json())
    .then(data => {
      console.log(data.name)
    })
}

// Issues:
// - No error handling
// - String concatenation in URL
// - No typing
// - Mixed logic and output`;

  const goodCode = `// How we do it (solution)
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser(id: number): Promise<User> {
  try {
    const response = await fetch(\`/user/\${id}\`);
    if (!response.ok) throw new Error('Request failed');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// Advantages:
// - Clear typing
// - Error handling
// - Modern syntax
// - Separation of concerns`;

  return (
    <OneSecton
      className={styles.twodev}
      title="Development Approaches Comparison"
      desc="The difference between typical and professional code">
      <div className={styles.codesCont}>
        <div className={styles.developer}>
          <h3>Common Approach</h3>
          <CustomCodeView
            isCopy={false}
            language="/user-service.ts"
            text={badCode}
            showLineNumbers={true}
            isAnimate={true}
            speed={40}
          />
        </div>
        <div className={styles.developer}>
          <h3>Our Approach</h3>
          <CustomCodeView
            isCopy={false}
            language="/user-service.ts"
            text={goodCode}
            isAnimate={true}
            showLineNumbers={true}
            speed={40}
          />
        </div>
      </div>
    </OneSecton>
  );
};

export default TwoDevs;