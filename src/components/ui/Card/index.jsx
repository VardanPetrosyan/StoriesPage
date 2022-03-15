import { useCallback, useState } from 'react'
import Score from "../Score"
import Curations from '../Curations'
import { FaChevronDown } from "react-icons/fa";
import './style.css'
const categoryInitial = {
    op:'publications',
    mp:'publications',
    r:'publications',
    t:'tweets'
}
const Card = ({item}) => {

    const [isActive,setIsActive] = useState(false)
    const {
        imageUrls,
        title,
        description,
        domain_cached_logo_url,
        author_image_url,
        domain_name,
        publishTimeDiff,
        score,
        category,
        expanded_url
    } = item
    const dateCalculate = useCallback((time)=>{
        let result = 0
        result = ~~(publishTimeDiff/360)
        return result <= 24
        ?`${result} h`
        :`${~~(result/24)} d`
    })
    const handleChangeActive = useCallback(()=>{
        setIsActive(prev=>!prev)
    })
    const isTweet = useCallback((item)=>{
        return categoryInitial[item] === 'publications' ? false : true
    })
    return (
        <div className={isActive?'active':null}>
            <div className="storie-card">
                <div className='storie-card__img-box'>
                    <img src={
                    imageUrls
                    ?imageUrls[0]
                    :domain_cached_logo_url
                    } alt="storyImg" />
                </div>
                <div className='storie-card__storie-content storie-content'>
                    <div className='storie-content_storie-title storie-title'>
                        <a href={expanded_url} target="_blank">
                            <span>{title}</span>
                        </a>
                    </div>
                    {
                        isActive
                        ?<div className='storie-content_storie-description storie-description'>
                            <span>{description}</span>
                        </div>
                        :null
                    }
                    
                    <div className='storie-content_storie-info storie-info'>
                        <div className='storie-info__storie-autor-avatar storie-autor-avatar'>
                            <img src={ 
                                isTweet(category)
                                ?author_image_url
                                :domain_cached_logo_url
                            } alt="domain_cached_logo" />
                        </div>
                        <div className='storie-info__storie-autor-name storie-autor-name'>
                            <span>
                                {domain_name}
                            </span>
                        </div>
                        <div className='storie-info__storie-date storie-date'>
                            <span>{dateCalculate(publishTimeDiff)}</span>
                        </div>
                    </div>
                </div>
                <div className='storie-card__card-options card-options'>
                    <div className='card-options_score'>
                        <Score score={score}/>
                    </div>
                    <div className='card-options_show-content-btn-box show-content-btn-box'>
                        <button className="show-content-btn-box__show-btn">
                            {/* <img src={chevron_down} alt="chevron_down" onClick={handleChangeActive}/> */}
                            <FaChevronDown onClick={handleChangeActive}/>
                        </button>
                    </div>
                </div>
            </div>
            {isActive
            ?<div className='curations-box'>
                <Curations/>
            </div>
            :null}
        </div>
    );
}

export default Card;
