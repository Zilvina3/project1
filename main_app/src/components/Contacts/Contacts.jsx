import Home from "./map";
import './Contacts.css'
import { ContactUs } from "./email";

const Contacts = () => {
    return(
        <div>
            <div className="contact">

            <ContactUs />
                
            </div>

            <div className="contacts-wrap">
                <div className="contacts">
                    <h1>Kontaktai</h1>
                    <div>Gatve g. 99</div>
                    <p>Vilnius past kod.. "06100"</p>
                    <br />
                    <h3 className="laikas">Laikas</h3>
                    <div>Pirmadienis-Penktadienis</div>
                    <p>8:00 - 16:00</p>
                    <h3>Telefonas</h3>
                    <div>+370 6 23 12312</div>
                </div>
                <div className="map"></div><Home />
            </div>
            
        </div>
    )
}

export default Contacts;