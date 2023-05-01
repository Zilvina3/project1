import ImgComp from '../ImgComp/ImgComp';
import './Main.css'
import smile_black from './smile_black.jpg'
import { useLayoutEffect } from 'react';



const Main = () => {

    useLayoutEffect(() => {
    window.scrollTo(0, 0)
    });

    return(
        <main>
                <ImgComp 
                
                screen={smile_black}
                
                right_class={'main-text-wrap'}

                children={
                    <div className='text'>
                        <h1 className='dis'>Kas tas mentorius?</h1>
                        <p  className='mentorius-h b'>Metorius - <span className='men-span'>tai žmogus, kuris padeda kitam žmogui tobulėti. Žinoma mes galim tobulėti savarankiškai, bet turint šalia mentorių mes visada tobulėjame žymiai greičiau, efektyviau ir geriau.</span></p>     
                        <h1>Ką ir kaip mentorius daro ?</h1>
                        <p><span className='b'>Suranda problemos priežastį.</span> Klausimų pagalba išsiaiškinama esminė problema.</p>  
                        <p><span className='b'>Randa problemos priežastį.</span>  Mentorius klausimų pagalba randa kokia tos problemos pamatinė priežastis.</p> 
                        <p><span className='b'>Sudaro veiksmų planą.</span> Mentorius padeda sudaryti veiksmų planą, kaip išspręsti problemą.</p>      
                        <p className='mentorius-h'><span className='b'>Mentorius yra vedlys.</span> Kuris veda, kad būtų laikomasi plano ir pasiektas norimas rezultatas. Jeigu vykdant planą keičiasi aplinkybės – grįžtame prie ankstesnių punktų ir siekiam užsibrėžtų tikslų.</p>                           

          
                    
                </div>


                }/>
        </main>
    )
}

export default Main;