

function PlayBtn(props) {

    const {startfunction, endfunction} = props;

    return ( 
        <>
            <button className="btn_start">
                <span className="shadow"></span>
                <span className="edge"></span>
                {playbtn? 
                <button className="front" onClick={endfunction}>Retry</button>
                : <button className="front" 
                    onClick={startfunction}
                    disabled={isButtonDisabled}>Time to Roll</button>}
                
            </button>
        </>
     );
}

export default PlayBtn;