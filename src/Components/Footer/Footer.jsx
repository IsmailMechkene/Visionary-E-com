import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__inner">
  
        <div className="ft__brand">
          <div className="ft__logo">Visionary</div>
          <div className="ft__tag">EYEWEAR</div>
        </div>

   
        <nav className="ft__col">
          <h4 className="ft__title">About</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

 
        <nav className="ft__col">
          <h4 className="ft__title">Useful Links</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Informations</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </nav>

        <div className="ft__col">
          <h4 className="ft__title">Contact</h4>
          <address className="ft__addr">
            123 Fifth Avenue, New York, NY 10160<br />
            <a href="mailto:contact@info.com">contact@info.com</a><br />
            <a href="tel:+19292426868">929-242-6868</a>
          </address>
        </div>
      </div>

      <div className="ft__bottom">
        <div className="ft__copy">
          Copyright © {new Date().getFullYear()} Visionary Eyewear Store | Powered by Visionary Eyewear Store
        </div>
        <div className="ft__socials">
          <a className="ft__social" href="#" aria-label="Facebook">
            
            <svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.7-1.5h1.5V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.8H7.5v3h2.8v8h3.2z"/></svg>
          </a>
          <a className="ft__social" href="#" aria-label="Twitter/X">
           
            <svg viewBox="0 0 24 24"><path d="M17.3 3H20l-6.9 8.1L20.5 21H15l-5-6.2L4.5 21H2l7.6-8.9L2.2 3H7l4.6 5.8L17.3 3z"/></svg>
          </a>
          <a className="ft__social" href="#" aria-label="Instagram">
           
            <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6.5z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
