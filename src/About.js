import './App.css';
function About(){
    return(
        <div>
            {/* -start about-section- */}
      <div className='spacer'>
        <div className='a_rowalign-center flex justify-content'>
          <div className='col-a1'>
            <div className='a_box'>
              <div className='container'>

                <div className='heading'>
                  <span className='sub_heading'>About us</span>
                  <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
                </div>
                <p className='ap'>
                  Creative Design & Multimedia Institute(CDMI)  is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields.
                  Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                </p>
              </div>
            </div>
          </div>
          <div className='col-a2'>
            <div className='position'>
              <img src={require(`./image/asset 29.jpeg`)} className='img'></img>
            </div>
            {/* <a className='v_icon'> */}
            {/* <span className='ripple'><i><BsFillCaretRightFill></BsFillCaretRightFill></i></span> */}
            {/* </a> */}
          </div>
        </div>
      </div>
      {/* -end about-section- */}
        </div>
    )
}
export default About;