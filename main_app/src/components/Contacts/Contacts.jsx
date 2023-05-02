import './Contacts.css'
import ImgComp from "../ImgComp/ImgComp";
import ask_me from './askme-black.jpg'
import { ContactUs } from "./email";
import { useLayoutEffect, useEffect, useState } from 'react';


const Contacts = () => {

    const [lang, setLang] =[localStorage.getItem('language')]

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        if(!lang) {
         setLang(localStorage.setItem('language', 'LT'))  
        }
        }, [])

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
