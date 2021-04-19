import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
    return (  <>
        <div className={styles.footer}>
            <div className={styles.container}>
                    <div className={styles.footerwrapper}>
                        <div>
                            <a href="/"><img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Logo"/></a>
                        </div>
                        <div>
                            <a href="/" className={styles.socialIcon}><img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg" alt="Twitter-Logo"/></a>
                            <a href="/" className={styles.socialIcon}><img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook%20Logo.svg" alt="Facebook-Logo"/></a>
                            <a href="/" className={styles.socialIcon}><img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg" alt="Insta-Logo"/></a>
                        </div>
                    </div>
                    <div className={styles.footerbottomwrapper}>
                        <div className={styles.smallFooter}>
                            Made In  <a href="/" target="_blank">India</a>  @ 2021
                        </div>
                    </div>
            </div>
        </div>
    </>);
}
 
export default Footer;