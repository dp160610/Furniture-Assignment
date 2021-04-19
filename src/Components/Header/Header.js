import React from 'react'
import styles from '../Header/Header.module.css'
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
    return (  <>
        <header className={styles.header}>
            <div className={styles.mainHeader}>
            <div className={styles.logoWrapper}>
            <Link to="/">
                <span><img src="https://apollotran.com/demo/at_auros/img/at-auros-logo-1557240632.jpg" alt="Logo"/></span>
            </Link>
            </div>
            <div className={styles.navWrapper}>
                <nav className={styles.navbar}>
                    <span className={styles.home}>Home <ArrowDropDownIcon style={{verticalAlign:'middle', marginLeft: '-5px'}}/>
                    <div className={styles.homeHover}>
                        <div>Home1</div>
                        <div>Home2</div>
                        <div>Home3</div>
                        <div>Home4</div>
                    </div>
                    </span>
                    <span>Shop <ArrowDropDownIcon style={{verticalAlign:'middle', marginLeft: '-5px'}}/>
                    <div className={styles.dropdown}>
                        <div>   
                            
                           </div>             
                    </div>
                    </span>
                    <span>Product <ArrowDropDownIcon style={{verticalAlign:'middle', marginLeft: '-5px'}}/></span>
                    <span>Blog</span>
                    <span>Page <ArrowDropDownIcon style={{verticalAlign:'middle', marginLeft: '-5px'}}/></span>
                    <span>Contact</span>
                </nav>
            </div>
            </div>
            <div className={styles.leftMenu}>
                <span><SearchIcon style={{fontSize: '25px'}}/></span>
                <span><PersonOutlineRoundedIcon style={{fontSize: '25px'}}/></span>
                <span><ShoppingCartOutlinedIcon style={{fontSize: '25px'}}/></span>
            </div>
        </header>
    </>);
}
 
export default Header;