import logo1 from './image/logo-white.svg';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGoogle, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
const f_icon = [<FaFacebookF></FaFacebookF>, <FaTwitter></FaTwitter>, <FaGoogle></FaGoogle>, <FaLinkedin></FaLinkedin>, <ImInstagram></ImInstagram>, <IoLogoYoutube></IoLogoYoutube>, <BsWhatsapp></BsWhatsapp>]
const f_menu = [
    { icon: <FaHandPointRight />, info: ' About Us' },
    { icon: <FaHandPointRight />, info: ' Blogs' },
    { icon: <FaHandPointRight />, info: ' Join Us' },
    { icon: <FaHandPointRight />, info: ' Company Login' },
    { icon: <FaHandPointRight />, info: ' Certificate Verification' },
]
const branch = [
    { icon: <FaUniversity />, info: ' Katargam' },
    { icon: <FaUniversity />, info: ' Mota Varchha' },
    { icon: <FaUniversity />, info: ' Adajan' },
    { icon: <FaUniversity />, info: ' Navsari' },
]
function Footer() {
    return (
        <div>
            <footer>
                <div className='spacer pb'>
                    <div className='bg_dark'>
                        <div className='top_foot'>
                            <div className='container'>
                                <div className='row flex'>
                                    <div className='col-f1'>
                                        <div className='foot_logo'>
                                            <a><img src={logo1} className='logo'></img></a>
                                        </div>
                                        <p className='justify'>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                        <h6 className='w_title'>Follow Us On</h6>
                                        <ul className='style'>
                                            {f_icon.map((ele, ind) => {
                                                return (
                                                    <li><a href="#" target="_blank" key={ind}>{ele}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className='col-f2'>
                                        <h6 className='d_title'>Feature Links</h6>
                                        <ul className='w_links'>
                                            {f_menu.map((ele, ind) => {
                                                return (
                                                    <li><a href='#'>{ele.icon}{ele.info}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className='col-f3'>
                                        <h6 className='f_title'>Contact Us</h6>
                                        <div>
                                            <h6 className='add_title'>
                                                <a>Head Office - Yogichowk</a>
                                            </h6>
                                            <span className='add'>
                                                401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha,
                                            </span>
                                            <span className='add'> Surat.</span>
                                            <p className='mo'> Mo :<a><span> +91 90333 16003</span></a></p>
                                        </div>
                                        <div>
                                            <h6 className='add_title'><a>Other Branches</a></h6>
                                            <ul className='w_links'>
                                                {branch.map((ele, ind) => {
                                                    return (
                                                        <li><a href='#'>{ele.icon}{ele.info}</a></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom_foot'>
                        <div className='container'>
                            <div className='row align-center'>
                                <div className='col'>
                                    <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;