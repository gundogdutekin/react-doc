import Test from './Test';
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.App}>
      <h1>{process.env.REACT_APP_API_URL}</h1>
    <Test/>
    </div>
    
  );
}

export default App;
