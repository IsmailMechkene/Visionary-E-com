import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import './header.css'

function Header() {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const threshold = 150;

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY + threshold) {
            setHidden(true);
            setLastScrollY(currentScrollY);
        } 
        else if (currentScrollY < lastScrollY - threshold) {
            setHidden(false);
            setLastScrollY(currentScrollY);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`header ${hidden ? "hide" : ""}`}>
        <div className="header_inner">
            <div className='header_logo'>
                <p id='visionary'>Visionary</p>
                <p id='eyewear'>EYEWEAR</p>
            </div>
            <div className='header_div1'>
                <ul className='header_ul'>
                    <li><Link to="/" className='header_link'><p>HOME</p></Link></li>
                    <li><Link to="/women" className='header_link'><p>WOMEN</p></Link></li>
                    <li><Link to="/men" className='header_link'><p>MEN</p></Link></li>
                    <li><Link to="/about" className='header_link'><p>ABOUT US</p></Link></li>
                    <li><Link to="/contact" className='header_link'><p>CONTACT</p></Link></li>
                    <li>
                        <a href="#" className="cart_wrapper">
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
