import './App.css';
import { IoMdStar, IoMdStarHalf, IoIosArrowRoundForward } from "react-icons/io";



function Course(props) {
    return (
        <div>
            {/* -start course-section- */}
            <div className="single_course">
                                        <div className="course_img">
                                            <img src={props.img} className='img'></img>
                                        </div>
                                        <h3>{props.info}</h3>
                                        <div className="ranking">
                                            <ul>
                                                <li><IoMdStar ></IoMdStar></li>
                                                <li><IoMdStar ></IoMdStar></li>
                                                <li><IoMdStar ></IoMdStar></li>
                                                <li><IoMdStar ></IoMdStar></li>
                                                <li><IoMdStarHalf ></IoMdStarHalf></li>
                                            </ul>
                                            <div className="know_more">
                                                <span>Know More..!</span>
                                            </div>
                                        </div>
                                    </div>
            {/* -end course-section- */}
         
        </div>
    )
}
export default Course;