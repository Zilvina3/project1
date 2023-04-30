import ImgComp from '../ImgComp/ImgComp';
import './Main.css'
import smile_black from './smile_black.jpg'

const Main = () => {
    return(
        <main>
                <ImgComp 
                
                screen={smile_black}
                
                right_class={'main-text-wrap'}

                children={
                    <div className='text'>
                    <div>
                        <h1>Pirmas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nobis sint et aspernatur porro, magnam ducimus delectus veniam officiis distinctio rem adipisci laborum velit nemo voluptas nisi vitae. Dicta, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugiat modi dolores eaque saepe corporis distinctio, porro laborum reprehenderit odit rerum praesentium unde temporibus iusto debitis fugit incidunt cumque quis.</p>
                    </div>   
                    <div>
                        <h1>Antras</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nobis sint et aspernatur porro, magnam ducimus delectus veniam officiis distinctio rem adipisci laborum velit nemo voluptas nisi vitae. Dicta, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugiat modi dolores eaque saepe corporis distinctio, porro laborum reprehenderit odit rerum praesentium unde temporibus iusto debitis fugit incidunt cumque quis.</p>
                    </div>
                    <div>
                        <h1>Pavadinimas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nobis sint et aspernatur porro, magnam ducimus delectus veniam officiis distinctio rem adipisci laborum velit nemo voluptas nisi vitae. Dicta, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugiat modi dolores eaque saepe corporis distinctio, porro laborum reprehenderit odit rerum praesentium unde temporibus iusto debitis fugit incidunt cumque quis.</p>
                    </div>
                    <div>
                        <h1>Dar vienas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nobis sint et aspernatur porro, magnam ducimus delectus veniam officiis distinctio rem adipisci laborum velit nemo voluptas nisi vitae. Dicta, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugiat modi dolores eaque saepe corporis distinctio, porro laborum reprehenderit odit rerum praesentium unde temporibus iusto debitis fugit incidunt cumque quis.</p>
                    </div>            
                    
                </div>


                }/>
        </main>
    )
}

export default Main;