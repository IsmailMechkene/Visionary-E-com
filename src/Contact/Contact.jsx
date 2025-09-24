import './Contact.css'

function Contact() {
  return (
    <section className="Contact" id='Contact'>
      <div className="Contact_container">
        <div className="Contact_image">
          <img src="images/BestSeller.jpg" alt="Best Seller Glasses" />
        </div>

        <div className="Contact_content">
          <h2 className="Contact_title">Get in Touch</h2>
          <p className="Contact_subtitle">
            Have questions about our eyewear or your order? 
            We’d love to hear from you.
          </p>

          <form className="Contact_form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>

          <div className="Contact_info">
            <p>Email: support@visionary.com</p>
            <p>Phone: +216 95-423-442</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
