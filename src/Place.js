import pl1 from "./image/pl1.png";
import pl2 from "./image/pl2.png";
import pl3 from "./image/pl3.png";
import pl4 from "./image/pl4.png";
import pl5 from "./image/pl5.png";
import pl6 from "./image/pl6.png";
import pl7 from "./image/pl7.png";
import pl8 from "./image/pl8.png";
import pl9 from "./image/pl9.png";
import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const slider = [pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9];
function Place() {
    return (
       



    <div className='spacer'>
        <div className='container'>
            <div className='row justify-center mb'>
                <div className='col-1'>
                    <div className='text text-center'>
                        <span className='sub_heading'>STUDENT PLACEMENT</span>
                        <h2>OUR RECRUITMENT PARTNERS</h2>
                    </div>
                </div>
            </div>
            <div className='row flex overflow'>
                <div className='col-c'>
                    
                        <OwlCarousel className='owl-theme' loop margin={10} dots={false} items={6} autoplay={true} autoplayTimeout={3000} autoplaySpeed={2000}>
                            {slider.map((ele, ind) => {
                                return (
                                    <div className=''>
                                    <div class='item' key={ind}>
                                        <a>
                                            <img src={ele} className="img"></img>
                                        </a>
                                    </div>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>

            </div>
        </div>
    </div>

    )
}
export default Place;