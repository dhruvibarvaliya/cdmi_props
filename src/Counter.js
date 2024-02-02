import './App.css';
import cnt1 from "./image/cnt1.png";
import cnt2 from "./image/cnt2.png";
import cnt3 from "./image/cnt3.png";
import cnt4 from "./image/cnt4.png";
const cnt = [
    { img: cnt1, info: '18000+', name: 'HAPPY STUDENTS' },
    { img: cnt2, info: '10+', name: 'CERTIFICATION APPROVAL' },
    { img: cnt3, info: '100+', name: 'CERTIFIED TEACHERS' },
    { img: cnt4, info: '12000+', name: 'STUDENTS PLACED' }
]
function Counter(){
    return(
        <div className='row'>
            <div className='counter spacer'>
                <div className='cnt_img'>
                    <div className='cnt_2 container'>

                        {cnt.map((ele, ind) => {
                            return (
                                <div key={ind} className='cnt1'>
                                    <div className='cnt'>
                                        <img src={ele.img}></img>
                                    </div>
                                    <div className='cnt_content'>
                                        <h3 className='cnt_text'>
                                            <span>{ele.info}</span>
                                            <p>{ele.name}</p>
                                        </h3>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter;