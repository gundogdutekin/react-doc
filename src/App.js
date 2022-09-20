import Test from './Test';
import styles from "./App.module.css";
import Bootstrap from './Bootstrap';
import './index.css';
import Tailwind from './Tailwind';

function App() {
  return (
    <div className={styles.App}>
      <h1>{process.env.REACT_APP_API_URL}</h1>
    <Test/>
    <Bootstrap/>
    <Tailwind/>
    </div>
    
  );
}

export default App;
