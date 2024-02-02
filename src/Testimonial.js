import './App.css';
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Testimonial(){
    return(
        <div>
               {/* -start testimonial-area- */}
      <div className='spacer'>
        <div className='container'>
          <div className='row flex'>
            <div className='col-t1'>
              <div className='l_box'>
                <div className='heading'>
                  <span className='sub_heading'>HAPPY STUDENTS</span>
                  <h2>ALUMNI SPEAK</h2>
                </div>
                <div className='t_devider'></div>
                <div className='testimonial'>
                  <i><BiSolidQuoteSingleRight></BiSolidQuoteSingleRight></i>
                  <i><BiSolidQuoteSingleRight></BiSolidQuoteSingleRight></i>
                  <div className='owl_outer'>
                    <div className='owl_stage'>
                      <div className='owl_item'>
                        <div className='t_box'>
                          <div className='meta'>
                            <div className='t_des'>
                              <p>Good place to get trained on all the programming languages! Highly qualified trainers with enthusiastic founder! Must visit for all the students who are interested to get jobs!</p>
                            </div>
                          </div>
                          <div className='flex'>
                            <div className='t_image'>
                              <img src={require(`./image/asset 33.jpeg`)}></img>
                            </div>
                            <div className='u_name'>
                              <h6>Nilay Rabadiya</h6>
                              <span className='name'>CEO</span>
                              <span> @ </span>
                              <span> Techtical Solution</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='owl_nav'>
                      <div className='prev'><i><IoIosArrowBack></IoIosArrowBack></i></div>
                      <div className='next'><i><IoIosArrowForward></IoIosArrowForward></i></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-t2'>
              <div className='img_holder'>
                <div className='shape'>
                  <img src={require(`./image/asset 39.png`)} className='img'></img>
                </div>
                <div className='bg_img'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end testimonial-area- */}
        </div>
    )
}
export default Testimonial;