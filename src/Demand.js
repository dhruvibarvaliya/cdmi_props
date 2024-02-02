const d_course = ['best web development training instiute', 'advance angular js training institute in surat', 'graphics design training in varachha', 'Google sketchup training institute in surat', 'spoken english class in adajan', 'tally accounting training institute in varachha', 'wordpress training institute in varachha', 'best python training institute', 'autocad mechanical training course', 'android training institute in katargam', 'adobe xd design training institute in surat', 'multimedia training institute in mota varchha', 'web development training institute in surat']
function Demand() {
    return (
        <div>
            <div className='our_course'>
                <div className='container'>
                    <div className="row">
                    <div className="col-o">
                <h5 className='o_title'>Our Demanded Course - </h5>
                    <div className='foot_tag'>
                        {d_course.map((ele, ind) => {
                            return (
                                <a key={ind}>{ele}</a>
                            )
                        })}
                    </div>
                    <span className='show_more'>Show More</span>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Demand;