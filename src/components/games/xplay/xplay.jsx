import './xplay.css';
import './xplay-media.css';
import Header from '../../header/header';
import { useState } from 'react';
import { Undo2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

function Xplay() {

    const [block_position, SetPosition] = useState(0);
    const [playbtn, SetPlayBtn] = useState(false);
    const [transition, Settransition] = useState('5s all ease-in-out');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const [inputdisabled, setInputdisabled] = useState(false);
    const [wintext, SetWinText] = useState(false);

    const navigate = useNavigate();

    const RandomX = () => {
        const num = Math.floor(Math.random() * 101);
        if (num > 98) return { res: -30, xs: 100 };
        if (num > 95) return { res: -30.2, xs: 5 };
        if (num > 85) return { res: -30.4, xs: 1 };
        if (num > 60) return { res: -30.6, xs: 0.3 };
        if (num > 35) return { res: -30.8, xs: 0.2 };
        return { res: -31, xs: 0.1 };
    };

    const ChangePosition = () => {
        setInputdisabled(!inputdisabled);
        handleSubmit();
        Settransition('5s all ease-in-out');
        setIsButtonDisabled(true);
        const {res, xs} = RandomX();
        SetPosition(res);
        

        const timerId = setInterval(() => {
            setSubmittedValue(+inputValue*xs);
            SetPlayBtn(true);
            SetWinText(!wintext);
            clearInterval(timerId);
            
        }, 5000);
    }

    const blockData = [
        { className: 'x0_1 item', content: 'x0.1' },
        { className: 'x0_2 item', content: 'x0.2' },
        { className: 'x0_3 item', content: 'x0.3' },
        { className: 'x1 item', content: 'x1' },
        { className: 'x5 item', content: 'x5' },
        { className: 'x100 item', content: 'x100' },
        { className: 'x5 item', content: 'x5' },
        { className: 'x1 item', content: 'x1' },
        { className: 'x0_3 item', content: 'x0.3' },
        { className: 'x0_2 item', content: 'x0.2' },
    ];

    const blocks = [];
      
    for (let i = 0; i < 50; i++) {
        blocks.push(...blockData);
    }

    const PlayBtnToggle = () => {
        setInputdisabled(!inputdisabled);
        SetWinText(!wintext);
        setIsButtonDisabled(false);
        SetPlayBtn(false);
        Settransition('none');
        SetPosition(0);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setSubmittedValue(inputValue);
    };

    const BackBtn = () => {
        navigate('/home');
    }
    
    
    return ( 
        <div className="home-container">
            <Header></Header>
            <div className='xplay'>
                <div className="xplay-title">X Play<Undo2 className='backtomenu' onClick={BackBtn}></Undo2></div>        
                <div className="scopeHidden">
                    <div className="wrapper-scope" 
                        style={{
                            transform: `translateX(${block_position}%)`,
                            transition: `${transition}`}}>
                        <div className="divider"></div>

                        {blocks.map((block, index) => {
                            return <div className={block.className}>{block.content}</div>
                        })}


                    </div>
                </div>
                <input type="text" className='bet-input' placeholder='Your Bet' onChange={handleInputChange}
                disabled={inputdisabled}/>
                <button className="btn_start">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    {playbtn? 
                    <button className="front" onClick={PlayBtnToggle}>Retry</button>
                    : <button className="front" 
                        onClick={ChangePosition}
                        disabled={isButtonDisabled}>Time to Roll</button>}
                    
                </button>
                {/* {submittedValue && <p>Your prize is: {submittedValue}</p>} */}
                {wintext && <p className='prize-text'>Your prize is: {submittedValue}$</p>}
                <h2 className="h2t disabled2">До новой игры!</h2> 
            </div>
        </div>
        
     );
}

export default Xplay;