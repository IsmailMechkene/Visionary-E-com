
import './header.css'

function Header() {
    return(
        <header className='header'>
            <div className="header_inner">
                <div className='header_logo'>
                    <p id='visionary'>Visionary</p>
                    <p id='eyewear'>EYEWEAR</p>
                </div>
                <div className='header_div1'>
                    <ul className='header_ul'>
                        <li><a href="#" className='header_link'><p>HOME</p></a></li>
                        <li><a href="#" className='header_link'><p>WOMEN</p></a></li>
                        <li><a href="#" className='header_link'><p>MEN</p></a></li>
                        <li><a href="#" className='header_link'><p>ABOUT US</p></a></li>
                        <li><a href="#" className='header_link'><p>CONTACT</p></a></li>
                        <li>
                            <a href="#"  className="cart_wrapper">
                                <img src="icons/cart.svg" alt="cart icon" className='header_img'/>
                            </a>
                        </li>
                        <button className='login'>LOG IN</button>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;