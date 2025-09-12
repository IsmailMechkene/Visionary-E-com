import './About.css'

function About() {
    return(
        <section className='about'>
            <div className='about_container'>
                
                <div className='about_images'>
                    <div className='about_text'>
                        <br></br><br></br>
                        <p className='about_lable'>Who We Are</p><br></br><br></br>
                        <p className='about_headline'>Building Trust,</p>
                        <p className='about_headline'>Delivering Value</p><br></br><br></br><br></br>
                        <p className='about_description'>We are dedicated to creating eyewear that 
                                                        blends timeless <br></br> design with innovative technology.
                                                        Our mission is to give <br></br> you confidence in every look.</p>
                        <br></br>
                        <br></br>
                        <button className='about_cta'>READ MORE</button>
                    </div>

                    <img src="images/about3.jpg" alt="" />
                    <img src="images/about1.jpg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default About;