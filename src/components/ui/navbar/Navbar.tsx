import React from 'react';
import styles from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <Link to='/' className={styles.nav_link}>Home</Link>
            <Link to='/people' className={styles.nav_link}>People</Link>
            <Link to='/starships' className={styles.nav_link}>Starships</Link>
            <Link to='/planets' className={styles.nav_link}>Planets</Link>
        </div>
    );
};

export default Navbar;