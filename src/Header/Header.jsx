import { useEffect, useState } from "react";
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
                    <li><a href="#Home" className='header_link'><p>HOME</p></a></li>
                    <li><a href="#Women" className='header_link'><p>WOMEN</p></a></li>
                    <li><a href="#Men" className='header_link'><p>MEN</p></a></li>
                    <li><a href="#About" className='header_link'><p>ABOUT US</p></a></li>
                    <li><a href="#Contact" className='header_link'><p>CONTACT</p></a></li>
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
