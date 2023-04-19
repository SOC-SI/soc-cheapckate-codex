import { useState } from 'react';
import styles from './App.module.scss';
import { Link } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default App;
