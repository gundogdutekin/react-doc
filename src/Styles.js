import Test from './Test';
import styles from "./App.module.css";
import Bootstrap from './Bootstrap';
import './index.css';
import Tailwind from './Tailwind';
import './style.scss'

const Styles=()=>{
    return(
        <>
        <div className={styles.App}>
          <h1>{process.env.REACT_APP_API_URL}</h1>
        <Test/>
        <Bootstrap/>
        <Tailwind/>
        </div>
        <div className='env'>
          <h1>{process.env.REACT_APP_WEB_URL} <span>Sass Kullanıldı</span></h1>
          
        </div>
        </>
    )
}
export default Styles