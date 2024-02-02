import './App.css';
import b1 from './image/b1.webp';
import b2 from './image/b2.webp';
import b3 from './image/b3.webp';
import b4 from './image/b4.webp';
import b5 from './image/b5.webp';
import b6 from './image/b6.jpeg';
import b7 from './image/b7.webp';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const slider = [b1, b2, b3, b4, b5, b6, b7];

function Banner() {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={1} autoplay={true} autoplayTimeout={3000} autoplaySpeed={3000}>
            {slider.map((ele, ind) => {
                        return (
                            <div class='item' key={ind}>
                                <img src={ele}></img>
                            </div>
                        )
                    })}
            </OwlCarousel>
        </div>
    )
}
export default Banner;