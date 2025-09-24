import Header from '../../Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Sec1 from './Components/Sec1/Sec1.jsx'
import Reviews from './Components/Reviews/Reviews.jsx'
import Trending from './Components/Trending/Trending.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import './MainPage.css';

function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Sec1 />
      <Reviews />
      <Trending />
      <Contact />
      <Footer />
    </>
  );
}

export default MainPage;
