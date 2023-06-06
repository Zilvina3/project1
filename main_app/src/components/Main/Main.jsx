import ImgComp from '../ImgComp/ImgComp';
import './Main.css'
import smile_black from './smile_black.jpg'
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';



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
                            <p className='space-word'><span className='b blue'>Metas pradėti laiminčios komandos treniruotes!</span> 
                            <div>Žmonės stipriausi būna tuomet, kai žino savo privalumus ir geba juos meistriškai panaudoti siekdami tikslo. Būtent iš tokių kompetencijas gebančių žmonių yra suformuojamos laiminčios ir didžiausią pridėtinę vertę kuriančios darbuotojų komandos. Tad kviečiu geriau pažinti jau dirbančius bei padėti jiems tapti stipriausia savo versija. Juk motyvuota komanda organizacijai padeda vystytis, augti ir pasiekti vis aukštesnių tikslų. O į tokią ateitį veda organizacijos treneris. </div>
                                </p>
                        </div>


                        <div>
                            <h1 className='dis'>Kas tas organizacijos treneris?</h1>
                            <p className='mentorius-h b'>Treneris/Mentorius - <span className='men-span'>tai yra profesionalas, padedantis kiek įmanoma tiksliau nustatyti komandos ir atskirų jos narių potencialą, stiprybes, silpnybes bei taikantis modernius psichologijos principus organizacinėje ir darbo aplinkoje. Nors kiekvienas turi galimybę tobulėti savarankiškai, tačiau su trenerio pagalba šis procesas vyksta greičiau, efektyviau ir lengviau. </span></p>
                        </div>

                        <div className='space-word'>
                            <h1 className='dis'>Ar jūsų komandai reikalingas treneris?</h1>

                            <p className='men-span'>Net ir stipriausių profesionalų komandai reikalingas pozityviai kritiškas įvertinimas iš šalies. Organizacijos treneris yra toji pagalba. Šios srities specialistų tikslas yra ne tik identifikuoti procesus stabdančius ar jų efektyvumą mažinančius veiksnius, bet ir atrasti jų atsiradimo priežastis. Tam yra užduodami prasmingi ir detalūs klausimai, padedantys nustatyti silpniausias grandis, užvilkintus procesus ir vidinės komunikacijos problemas. Padedant organizacijos treneriui valdymas ir bendradarbiavimas tampa ne priešingomis, bet lygiagrečiomis savybėmis.</p>
                            <br />
                            <p className='men-span'>Organizacijos treneris parengia efektyvų veiksmų planą ir kartu su komanda pašalina trikdžius. </p>
                            <br />
                            <p className='men-span'>Treneris yra vedlys, užtikrinantis, kad bus laikomasi plano bei pasiekta pageidaujamo rezultato. Pasikeitus aplinkybėms ar iškilus naujiems tikslams kartu atnaujinamas veiksmų planas ir koreguojami tikslai. </p>
                            <br />
                            <p className='men-span'>Po veiksmingų treniruočių programos organizacinė aplinka tampa palankesnė tikslų įgyvendinimui, komunikacija efektyvesnė, o organizacinė kultūra skatina augti ir tobulėti jau be trenerio pagalbos.</p>
                            <br />
                            <Link className='susisiekti_link' to="/contacts">Siekiate tapti efektyvesni? Susiekite ir pradėkite savo geriausių treniruočių programą!</Link>

                        </div>

                       


                    </div>


                } />
        </main>
    )
}

export default Main;