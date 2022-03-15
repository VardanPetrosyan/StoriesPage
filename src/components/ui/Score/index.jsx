import {useCallback} from 'react';
import './style.css'

const scoreLevel = {
    bad:{
        borderColor:'red',
        color:'red'
    },  
    cool:{
        borderColor:'#ef6c00',
        color:'#ef6c00'
    },
    greet:{
        borderColor:'#ffb300',
        color:'#ffb300'

    },
    exelent:{
        borderColor:'#4eb495',
        color:'#4eb495'
    },
}
const Score = ({score}) => {
    const handleScoreLevel = useCallback((num)=>{
            if (+num<10){
                return 'bad'
            }else if(+num<35){
                return 'cool'
            }else if(+num<50){
                return 'greet'
            }
            else if(+num<100){
                return 'exelent'
            }
    })
    return (
        <div className='storie-score'>
            <div className="storie-score__score-bg" style={scoreLevel[handleScoreLevel(score)]}>
                <span className='storie-score__score'>{score}%</span>
            </div>
        </div>
    );
}

export default Score;
