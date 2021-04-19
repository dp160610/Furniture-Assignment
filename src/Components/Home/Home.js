import styles from './Home.module.css'
import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CompareArrowsRoundedIcon from '@material-ui/icons/CompareArrowsRounded';
import CartDropdown from "../cart-dropdown/cart-dropdown";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = { hidden: true,       cartItems:[]};
    }
    toggleHidden() {
        this.setState(() => ({ hidden: !this.state.hidden }));
      }
    render(){
        return (<>
            <div className={styles.container}>
                <div className={styles.mainContainer}>
                    <div className={styles.lightning}>
                        <span style={{fontSize: '50px'}}>|</span>
                        <p>LIGHTNING <br/>2019</p>
                    </div>
                    <div className={styles.etna}>
                        <h1>ETNA</h1>
                        <p>FROM <strong>$650.00</strong></p>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button>Shop Now</button> 
                    </div>  
                </div>
            </div>
            <div className={styles.container1}>
                <div className={styles.itemWrapper}>
                    <div className={styles.itemContainer}>
                    <div className={styles.item}> </div>
                        <div className={styles.div}>
                        <h1>Stools</h1>
                            <p>4 items</p>
                        </div>  
                    </div>
                    
                    <div className={styles.itemContainer} >
                    <div className={styles.item1} > </div>
                        <div className={styles.div}>
                        <h1>Sofas</h1>
                            <p>4 items</p>
                        </div>  
                    </div>
                </div>
                </div>
                <div className={styles.productSection}>
                    <div className={styles.titleWrapper}>
                        <h1>Trending This Week</h1>
                        <p>Find a bright ideal to suit your taste with our great selection of suspension, wall, <br/>floor and table lights.</p>
                    </div>
                    <div className={styles.productsWrapper}>
                        <div className={styles.productItem}>
                            <div className={styles.productImage}>
    
                            </div>
                            <div className={styles.newText}>
                                <p>New</p>
                                <p>-10%</p>
                            </div>
                            <div className={styles.cartDetails}>
                                <SearchRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <ShoppingCartRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <FavoriteRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <CompareArrowsRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                            </div>
                            <div className={styles.priceDetails}>
                                <h5>Teapot</h5>
                                <p>$21.51</p>
                            </div>
                        </div>
                        <div className={styles.productItem}>
                            <div className={styles.productImage}>
    
                            </div>
                            <div className={styles.newText}>
                                <p>New</p>
                                <p>-10%</p>
                            </div>
                            <div className={styles.cartDetails}>
                                <SearchRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <ShoppingCartRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <FavoriteRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <CompareArrowsRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                            </div>
                            <div className={styles.priceDetails}>
                                <h5>Teapot</h5>
                                <p>$21.51</p>
                            </div>
                        </div>
                        <div className={styles.productItem}>
                            <div className={styles.productImage}>
    
                            </div>
                            <div className={styles.newText}>
                                <p>New</p>
                                <p>-10%</p>
                            </div>
                            <div className={styles.cartDetails}>
                                <SearchRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <ShoppingCartRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <FavoriteRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <CompareArrowsRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                            </div>
                            <div className={styles.priceDetails}>
                                <h5>Teapot</h5>
                                <p>$21.51</p>
                            </div>
                        </div>
                        <div className={styles.productItem}>
                            <div className={styles.productImage}>
    
                            </div>
                            <div className={styles.newText}>
                                <p>New</p>
                                <p>-10%</p>
                            </div>
                            <div className={styles.cartDetails}>
                                <SearchRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <ShoppingCartRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <FavoriteRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                                <CompareArrowsRoundedIcon style={{backgroundColor: 'white',marginRight:'15px', borderRadius:'50%', height: '30px', width: '30px', cursor: 'pointer'}}/>
                            </div>
                            <div className={styles.priceDetails}>
                                <h5>Teapot</h5>
                                <p>$21.51</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>);
    }
}


export default Home;