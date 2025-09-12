import './Trending.css'

function Trending() {
    return(
        <section className='Trending'>
            <p className='Trending_label'>Popular Products</p>
            <p className='Trending_headline'>Trending now</p>

            <div className='Trending_container'>
                <div className='Trending_img1'>
                    <div className='Trending_img_container'>
                        <a href="#"><img src="images/sunglasses1_0.webp" alt="" /></a>
                    </div>
                    
                    <p className='Trending_product_name'>Hamilton x 000</p>
                    <p className='Trending_product_price'>$600.00</p>
                    <br />
                    <br />
                    <button className='Trending_btn'>BUY NOW</button>
                </div>

                <div className='Trending_img2'>
                    <div className='Trending_img_container'>
                        <a href="#"><img src="images/sunglasses2_0.webp" alt="" /></a>
                    </div>

                    <p className='Trending_product_name'>Akahi</p>
                    <p className='Trending_product_price'>$530.00</p>
                    <br />
                    <br />
                    <button className='Trending_btn'>BUY NOW</button>
                </div>

                <div className='Trending_img3'>
                    <div className='Trending_img_container'>
                        <a href="#"><img src="images/sunglasses3_0.webp" alt="" /></a>
                    </div>

                    <p className='Trending_product_name'>007 Joe</p>
                    <p className='Trending_product_price'>$580.00</p>
                    <br />
                    <br />
                    <button className='Trending_btn'>BUY NOW</button>
                </div>  

            </div>
        </section>
    );
}


export default Trending;