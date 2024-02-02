import './App.css';
import { FaCertificate, FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope, FaGoogle, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { BsWhatsapp, } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";

import logo from './image/logo.svg';
import Banner from './Banner';
import Course from './Course';
import About from './About';
import Testimonial from './Testimonial';
import Choose from './Choose';
import Place from './Place';
import Demand from './Demand';
import Footer from './Footer';
import Counter from './Counter';
import { IoMdStar, IoMdStarHalf, IoIosArrowRoundForward } from "react-icons/io";
import c1 from './image/c1.webp';
import c2 from './image/c2.webp';
import c3 from './image/c3.webp';
import c4 from './image/c4.webp';
import c5 from './image/c5.webp';
import c6 from './image/c6.webp';
import ch1 from "./image/ch1.png";
import ch2 from "./image/ch2.png";
import ch3 from "./image/ch3.png";
import ch4 from "./image/ch4.png";
import ch5 from "./image/ch5.png";
import ch6 from "./image/ch6.png";
const c_img = [
    { img: c1, info: 'Development Courses' },
    { img: c2, info: 'Design Courses' },
    { img: c3, info: 'Programming IT' },
    { img: c4, info: 'Trendy Courses' },
    { img: c5, info: 'Civil-Mech. Engineering' },
    { img: c6, info: 'Business Development' }
]
const h_obj = [
    { icon: <FaEnvelope></FaEnvelope>, info: "info@gmail.in" },
    { icon: <FaCertificate></FaCertificate>, info: "info@gmail.in" }
];
const h_icon = [
    <FaFacebookF></FaFacebookF>, <FaTwitter></FaTwitter>, <FaGoogle></FaGoogle>, <FaLinkedin></FaLinkedin>, <ImInstagram></ImInstagram>, <IoLogoYoutube></IoLogoYoutube>, <BsWhatsapp></BsWhatsapp>
];
const m_menu = ['HOME', 'COURSE', 'ACTIVITIES', 'BLOG', 'KNOW US', 'GET IN TOUCH', 'STUDENT ZONE'];

const choose = [
    { img: ch1, title: 'Industry Experts As Trainers', info: 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.' },
    { img: ch2, title: 'Latest Curriculum', info: 'We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.' },
    { img: ch3, title: 'Latest Technology', info: 'We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.' },
    { img: ch4, title: 'Interview Assistance', info: 'At the end of each training,our training instructor will go through the possible technical questions you may be asked.' },
    { img: ch5, title: 'Free Upgradation', info: 'We will be provided free upgradation for any newer version of the course you have.' },
    { img: ch6, title: 'Lifetime Support', info: 'We will provide you lifetime support on all the courses you learned from us.' },
]

function Header() {
    return (
        <div>
            {/* -start header- */}
            <header>
                <div className="bgblue">
                    <div className="container">
                        <div className='topheader flex justify-content align-center'>
                            <div className="left_add c_width">
                                <ul>
                                    {
                                        h_obj.map((ele, ind) => {
                                            return (
                                                <li key={ind} className='me-2'><i>{ele.icon}</i>{ele.info}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='center c_width'>
                                <span>HAVE ANY QUESTIONS ? +91 90333 16003</span>
                            </div>
                            <div className="right_social c_width">
                                <ul>
                                    {
                                        h_icon.map((ele, ind) => {
                                            return (
                                                <li key={ind}><a href="#" target="_blank">{ele}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* -end header- */}
            {/* -start logo-header- */}
            <div className='container'>
                <div className='logoheader flex justify-content align-center'>
                    <div className='main_logo'>
                        <a>
                            <img src={logo} className='logo'></img>
                        </a>
                    </div>
                    {/* -start navbar- */}
                    <div className='navbar'>
                        <nav>
                            <ul className='main_menu flex'>
                                {
                                    m_menu.map((ele, ind) => {
                                        return (
                                            <li key={ind}><a href="#">{ele}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    {/* -end navbar- */}

                </div>
            </div>
            {/* -end logo-header- */}
            <Banner />
            <div className="courses">
                <div className="spacer">
                    <div className="container">
                        <div className="head"></div>
                        <p>CREATIVE COURSE</p>
                        <h2>OFFERED COURSES</h2>
                        <div className="all_courses">
                            {c_img.map((ele, ind) => {
                                return (
                                    <Course img={ele.img} info={ele.info} />
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="view_all_course">
                        <span>View All Course <IoIosArrowRoundForward></IoIosArrowRoundForward></span>
                    </div>
                </div>
            </div>

            <About />
            <Counter />
            <Testimonial />
            {/* -start feature-area- */}
            <div className='bg_grey'>
                <div className='container'>
                    <div className='row justify-center'>
                        <div className='col-1'>
                            <div className='text text-center'>
                                <span className='sub_heading'>READ OUR DIFFERENCE</span>
                                <h2>WHY CHOOSE CREATIVE</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row flex'>
                     
                            
                                {choose.map((ele, ind) => {
                                    return (
                                        <Choose img={ele.img} title={ele.title} info={ele.info} />
                                    )
                                })}
                            
                        
                    </div>
                </div>
            </div>
            {/* -end feature-area- */}
            <Demand />
            <Footer />
        </div>
    )
}
export default Header;