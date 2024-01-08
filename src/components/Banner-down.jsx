import '../App.css';

const BannerDown = ({refParam, inView}) => {

    console.log('ref2', refParam)
    console.log('down', inView)
    return(
        <div className={inView ? "banner2-invis": "banner2"} id='upbanner' ref={refParam}>
            <span className="banner-img2"></span>
            <ul>
                <li>
                <h2>Black Friday</h2>
                </li>
                <li>
                <h3>10%OFF</h3>
                </li>
                <li>
                <h4>Use code 10FRIDAY at checkout</h4>
                </li>
                <li>
                <button className='banner-shop-button'>Shop now through Monday</button>
                </li>
            </ul>
            <button className='banner-close-button'>X</button>
        </div>
    )
}

export default BannerDown