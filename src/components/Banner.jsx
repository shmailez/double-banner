import '../App.css';

const Banner = ({refParam}) => {

    console.log('ref1', refParam)
    return(
        <div className="banner" id='upbanner'  ref={refParam}>
            <span className="banner-img"></span>
            <ul>
                <li>
                <h2>Black Friday, 24-27 Nov Top div</h2>
                </li>
                <li>
                <h3>10%OFF</h3>
                </li>
                <li>
                <h4>Use code 10FRIDAY at checkout</h4>
                </li>
                <li>
                <button className='banner-shop-button'>Shop now</button>
                </li>
            </ul>
           
            <button className='banner-close-button'>X</button>
        </div>
    )
}

export default Banner