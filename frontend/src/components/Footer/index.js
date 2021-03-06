import React from "react";
import "./styles.scss";

const Footer = (props, context) => (
  <footer className="footer">
    <div className="column">
      <nav className="nav">
        <ul className="list">
          <li className="listItem">Support</li>
          <li className="listItem">About Us</li>
          <li className="listItem">Blog</li>
          <li className="listItem">API</li>
          <li className="listItem">Jobs</li>
          <li className="listItem">Privacy</li>
          <li className="listItem">Terms</li>
          <li className="listItem">Directory</li>
          <li className="listItem">Language</li>
        </ul>
      </nav>
    </div>
    <div className="column">
      <span className="copyright">© 2018 jiminstagram</span>
    </div>
  </footer>
);
export default Footer;

/* 
 <footer className="footer">
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>About Us</li>
          <li className={styles.listItem}>Support</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Press</li>
          <li className={styles.listItem}>API</li>
          <li className={styles.listItem}>Jobs</li>
          <li className={styles.listItem}>Privacy</li>
          <li className={styles.listItem}>Terms</li>
          <li className={styles.listItem}>Directory</li>
          <li className={styles.listItem}>Language</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}>© 2018 jiminstagram</span>
    </div>
  </footer>
 */
