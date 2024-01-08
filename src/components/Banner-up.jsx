import '../App.css';

const BannerUp = ({refParam, viewportWidth}) => {

    return(
        <div className={viewportWidth > 660 ? "banner" : "banner-mobile"} id='upbanner'  ref={refParam}>
            {viewportWidth > 660 && <span className="banner-img"></span>}
            <ul>
                <li>
                <h2>Black Friday{viewportWidth > 910 && ', 24-27 Nov Top div'}</h2>
                </li>
                <li>
                <h3>10%OFF</h3>
                </li>
                <li>
                <h4>Use code 10FRIDAY{viewportWidth > 910 && ' at checkout'}</h4>
                </li>
                <li>
                <button className='banner-shop-button'>Shop now</button>
                </li>
            </ul>
           
            <button className='banner-close-button'>X</button>
        </div>
    )
}

export default BannerUp