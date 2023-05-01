import { useState } from 'react';
import ImgComp from '../ImgComp/ImgComp';
import './About.css'
import smile_red from './smile_red.jpg'
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from 'react';

const About = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        });

    const [lang] = useState(localStorage.getItem('language'))

    return (
        <main>
            <ImgComp

                

                screen={smile_red}

                right_class={'main-help-wrap'}

                children={lang === 'LT' ? <AboutLt /> : <AboutEng />}   

            />
        </main>
    )
}

const AboutLt = () => {
   const navigate = useNavigate();
    return(
        <div className='help'>
                        <h1 className='how-help'>Kuo galiu būti Jums naudinga?</h1>
                        <div className='box4'>

                            <div className='offers4'>
                                <div className='svg_div'>
                                    &#10067;
                                </div>

                                <h3>Konsultacijos</h3>
                                <p>Emocijų valdymas.Emocinė atmosfera.Tėvų ir vaikų santykiai. </p>
                                <div>
                                    <button className='more' 
                                    onClick={() => {
                                        navigate('/contacts')
                                    }}
                                    >Plačiau</button>
                                </div>
                            </div>

                            <div className='offers4'>
                                <div className='svg_div'>
                                &#128218;
                                </div>
                                <h3>Mokymai</h3>
                                <p>Įmonių ir įstaigų darbuotojamas kaip kurti palankią emocinę atmosferą kolektyve. </p>
                                <div>
                                    <button className='more' 
                                    onClick={() => {
                                        navigate('/contacts')
                                    }}
                                    >Plačiau</button>
                                </div>
                            </div>

                            <div className='offers4'>
                                <div className='svg_div'>
                                &#127919;

                                </div>
                                <h3>Kursai</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum nesciunt maiores molestias ab, accusantium neque voluptatibus incidunt repellendus. Assumenda similique modi veritatis. Est sed tempore ea iste recusandae harum!</p>
                                <div>
                                    <button className='more'
                                    onClick={() => {
                                        navigate('/contacts')
                                    }}
                                    >Plačiau</button>
                                </div>
                            </div>

                            <div className='offers4'>
                                <div className='svg_div'>
                                    {/* &#127917; */}
                                    &#128106;
                                </div>
                                <h3>Seminarai</h3>
                                <p>Temos: Streso valdymas SCARF metodu. Emocinė sveikata; Meilės hormonai; Kaip kuria smegenys; Vaikų ir paauglių smegenys, emocijos ir hormonai. </p>
                                <div>
                                    <button className='more'
                                    onClick={() => {
                                        navigate('/contacts')
                                    }}
                                    >Plačiau</button>
                                </div>
                            </div>

                        </div>
                    </div>
    )
}

const AboutEng = () => {
    const navigate = useNavigate();
     return(
         <div className='help'>
                         <h1 className='how-help'>How can I help you?</h1>
                         <div className='box4'>
 
                             <div className='offers4'>
                                 <div className='svg_div'>
                                     &#10067;
                                 </div>
 
                                 <h3>Consultations</h3>
                                 <p>Management of emotions. Emotional atmosphere. Relationships between parents and children.</p>
                                 <div>
                                     <button className='more' 
                                     onClick={() => {
                                         navigate('/contacts')
                                     }}
                                     >More</button>
                                 </div>
                             </div>
 
                             <div className='offers4'>
                                 <div className='svg_div'>
                                 &#128218;
                                 </div>
                                 <h3>Training</h3>
                                 <p>Companies and institutions are working on how to create a favorable emotional atmosphere in the team.</p>
                                 <div>
                                     <button className='more' 
                                     onClick={() => {
                                         navigate('/contacts')
                                     }}
                                     >More</button>
                                 </div>
                             </div>
 
                             <div className='offers4'>
                                 <div className='svg_div'>
                                 &#127919;
 
                                 </div>
                                 <h3>Courses</h3>
                                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum nesciunt maiores molestias ab, accusantium neque voluptatibus incidunt repellendus. Assumenda similique modi veritatis. Est sed tempore ea iste recusandae harum!</p>
                                 <div>
                                     <button className='more'
                                     onClick={() => {
                                         navigate('/contacts')
                                     }}
                                     >More</button>
                                 </div>
                             </div>
 
                             <div className='offers4'>
                                 <div className='svg_div'>
                                     {/* &#127917; */}
                                     &#128106;
                                 </div>
                                 <h3>Seminars</h3>
                                 <p>Topics: Stress management using the SCARF method. Emotional health; Love hormones; How the brain creates; Brain, emotions and hormones in children and adolescents.</p>
                                 <div>
                                     <button className='more'
                                     onClick={() => {
                                         navigate('/contacts')
                                     }}
                                     >More</button>
                                 </div>
                             </div>
 
                         </div>
                     </div>
     )
 }

export default About;