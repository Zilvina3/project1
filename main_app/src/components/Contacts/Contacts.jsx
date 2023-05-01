import './Contacts.css'
import ImgComp from "../ImgComp/ImgComp";
import ask_me from './askme-black.jpg'
import { ContactUs } from "./email";
import { useLayoutEffect } from 'react';


const Contacts = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        });

    return (
        <div className="asd">

            {/* <div className="contact">

                <ContactUs />

            </div> */}

            <ImgComp 
            
            screen={ask_me}

            right_class={'main-text-wrap'}

            children={
                <ContactUs />
            }

            />

           
        </div>
    )
}

export default Contacts;
