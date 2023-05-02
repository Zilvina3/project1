import ImgComp from '../ImgComp/ImgComp';
import './Main.css'
import smile_black from './smile_black.jpg'
import { useLayoutEffect } from 'react';



const Main = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <main>
            <ImgComp

                screen={smile_black}

                right_class={'main-text-wrap'}

                children={
                    <div className='text'>
                        <div>
                            <p className='space-word'><span className='b blue'>Nauja valdymo era prasideda!!!</span> Sujungus trenerį su įmonės komanda tam, kad jie galėtų nuolatos vystytis ir augti. Noriu, kad mano darbas padėtų organizacijoms kurti pridetinę vertę  ir tai darau PROFESIONALIAI, DRĄSIAI
                                siekdama sujungti žinias ir kompetenciją, tai ko reikia organizacijai - tobulėti, kilti, augti bei išnaudoti komandos turimą potencialą.</p>
                        </div>


                        <div>
                            <h1 className='dis'>Kas tas organizacijos treneris?</h1>
                            <p className='mentorius-h b'>Treneris/Mentorius - <span className='men-span'>tai žmogus, kuris padeda nustatyti komandos potencialą, stiprybes, siplnybes, taikantis psichologijos principus organizacinėje ir darbo aplinkoje. Žinoma mes galim tobulėti savarankiškai, bet turint šalia trenerį/mentorių mes visada tobulėjame žymiai greičiau, efektyviau ir geriau.</span></p>
                        </div>

                        <div className='daro'>
                            <h1>Ką ir kaip organizacijos treneris daro?</h1>
                            <p><span className='b'>Suranda problemą ir priežastį.</span> Klausymų pagalba išsiaiškinama esminė problema ir nustatoma tos problemos pamatinė priežastis.</p> <br></br>
                            <p><span className='b'>Sudaro veiksmų planą.</span> Sudaromas veiksmų planas pašalinti problemai.</p>      <br></br>
                            <p className='mentorius-h'><span className='b'>Treneris yra vedlys.</span> Kuris veda, kad būtų laikomasi plano ir pasiektas norimas rezultatas. Jeigu vykdant planą keičiasi aplinkybės – grįžtame prie ankstesnių punktų ir siekiam užsibrėžtų tikslų.</p>
                        </div>

                        <div>
                            <h1>Kodėl reikia organizacijos trenerio?</h1>
                            <p className='space-word'>Treneris (geras mentorius) nukreipia  teigiama linkme, padeda atrasti asmenines komandos narių stiprybes, motyvuoja, palaiko, išmoko judėti į priekį savarankiškai, be trenerio pagalbos.</p>
                        </div>


                    </div>


                } />
        </main>
    )
}

export default Main;