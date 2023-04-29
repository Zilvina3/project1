import ImgComp from '../ImgComp/ImgComp';
import './About.css'
import smile_red from './smile_red.jpg'
import log from './alt-book-svgrepo-com.svg'

const About = () => {
    return(
        <main>
            <ImgComp
            
            screen={smile_red}

            right_class={'main-help-wrap'}

            children={

                <div className='help'>
                    <h1>Kuo galiu būti Jums naudinga?</h1>
                    <div className='4-box'>
                        <div className='4offers'>
                            
                        
        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>alt-book</title>
        <path d="M0 26.016q0 0.832 0.576 1.408t1.44 0.576q1.92 0.096 3.808 0.288t4.352 0.736 3.904 1.28q0.096 0.736 0.64 1.216t1.28 0.48 1.28-0.48 0.672-1.216q1.44-0.736 3.872-1.28t4.352-0.736 3.84-0.288q0.8 0 1.408-0.576t0.576-1.408v-24q0-0.832-0.576-1.408t-1.408-0.608q-0.032 0-0.096 0.032t-0.128 0q-9.504 0.256-12.672 2.528-1.024 0.768-1.12 1.44l-0.096-0.32q-0.576-1.28-3.168-2.176-3.648-1.28-10.528-1.472-0.064 0-0.128 0t-0.064-0.032q-0.832 0-1.44 0.608t-0.576 1.408v24zM4 24.128v-19.936q6.88 0.512 10.016 2.080v19.744q-3.104-1.536-10.016-1.888zM6.016 20q0.096 0 0.32 0.032t0.832 0.032 1.216 0.096 1.248 0.224 1.184 0.352 0.832 0.544 0.352 0.736v-4q0-0.096-0.032-0.224t-0.352-0.48-0.896-0.608-1.792-0.48-2.912-0.224v4zM6.016 12q0.096 0 0.32 0.032t0.832 0.032 1.216 0.096 1.248 0.224 1.184 0.352 0.832 0.544 0.352 0.736v-4q0-0.096-0.032-0.224t-0.352-0.48-0.896-0.608-1.792-0.48-2.912-0.224v4zM18.016 26.016v-19.744q3.104-1.568 9.984-2.080v19.936q-6.912 0.352-9.984 1.888zM20 22.016q0-0.576 0.608-0.992t1.504-0.576 1.76-0.288 1.504-0.128l0.64-0.032v-4q-1.696 0-2.944 0.224t-1.792 0.48-0.864 0.608-0.384 0.512l-0.032 0.192v4zM20 14.016q0-0.576 0.608-0.992t1.504-0.576 1.76-0.288 1.504-0.128l0.64-0.032v-4q-1.696 0-2.944 0.224t-1.792 0.48-0.864 0.608-0.384 0.512l-0.032 0.192v4z"></path>

</svg>

                        </div>
                    </div>
                </div>

            }
            
            
            />
        </main>
    )
}

export default About;