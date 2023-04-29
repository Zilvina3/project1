const ImgComp = ({screen, children, right_class}) => {
    return(
        <div className="main_wrap">
             <div className="main-img-wrap">
                    <img className="smile-black" src={screen} alt="smile-black" title="Hello!"/>
                </div>
                <div className={right_class}>
                    {children}
                </div>
        </div>
    )
}

export default ImgComp;