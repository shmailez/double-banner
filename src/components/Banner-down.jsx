import '../App.css';

const BannerDown = () => {
    return(
        <div className="banner2" id='upbanner'>
            <span className="banner-img2"></span>
            <ul>
                <li>
                <h2>Black Friday</h2>
                </li>
                <li>
                <h3>10%OFF</h3>
                </li>
                <li>
                <h4>Use Code 10FRIDAY</h4>
                </li>
                <li>
                <button className='banner-shop-button'>Shop now</button>
                </li>
            </ul>
            <button className='banner-close-button'>X</button>
        </div>
    )
}

export default BannerDown