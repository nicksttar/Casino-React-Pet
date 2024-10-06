import './home.css'
import GamesBlock from '../games-block/games-block';
import aviator from '../../img/aviator.svg';
import xplay from '../../img/xplay.png'

function HomeComponent() {
    return ( 
        <>
            <div className="games-container">
                <GamesBlock 
                    color='green' 
                    title='Easy level' 
                    games={{
                        imageGame: [xplay, aviator, aviator], 
                        link: ['xplay', 'rpc', '222']}}/>

                <GamesBlock 
                    color='yellow' 
                    title='Meduim level' 
                    games={{
                        imageGame: [aviator, aviator, aviator], 
                        link: ['123', '222']}}/>


                <GamesBlock 
                    color='red' 
                    title='Insane level' 
                    games={{
                        imageGame: [aviator, aviator, aviator], 
                        link: ['123', '222']}}/>



                {/* <GamesBlock color='yellow' title='Meduim level' games={{1: Game1}}/> */}



                {/* <GamesBlock color='red' title='Insane level' games={{1: Game1}}/> */}



            </div>
        </>
        

     );
}

export default HomeComponent;