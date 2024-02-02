import './App.css';


function Choose(props) {
    return (
        <>
            {/* -start feature-area- */}
            <div className='col-w w-33'>
                <div className="icon_box">
                    <div className='icon_img red'>
                        <img src={props.img} className='img w-100'></img>
                    </div>
                    <div className='intro_des'>
                        <h5>{props.title}</h5>
                        <p>{props.info}</p>
                    </div>
                </div>
            </div>
        
            {/* -end feature-area- */ }
         </>
    )
}
export default Choose;