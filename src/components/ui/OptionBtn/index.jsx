import { useCallback, useState, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OptionsDropDown from '../OptionsDropDown'
import { setStoriesOrder, setStoriesLang, setStoriesRefreshTime } from "../../../store/reducers/storiesReducerDuck"

import './style.css'
import { useDispatch, useSelector } from 'react-redux';

const initialDefaultData = [{
            id:1,
            option:'No Option',
            active:true
        }]
function getStoriesOrder(state) {
    return state.stories.storiesOrder
}
function getStoriesLang(state) {
    return state.stories.storiesLang
}
function getStoriesRefreshTime(state) {
    return state.stories.storiesRefreshTime
}
const OptionBtn = ({type='drop-down', title="Set title", data=initialDefaultData, isActive, setIsActive}) => {
    const storiesOrder =  useSelector(getStoriesOrder)
    const storiesLang = useSelector(getStoriesLang)
    const storiesRefreshTime = useSelector(getStoriesRefreshTime)
    const [selected, setSelected] = useState(initialDefaultData)
    
    const dispatch = useDispatch()
    const handleChangeState = useCallback(()=>{
        const sel = 
        data
        ?data.filter(el=>{
            if(el.code === storiesOrder || el.code === storiesLang || el.code === storiesRefreshTime){
             return el
            }
        })
        :null
        if(sel && sel.length>0){
            setSelected(prev =>sel[0] )
        }
    })
    useEffect(()=>{
        handleChangeState()
    },[storiesRefreshTime,storiesLang,storiesOrder])
    const handleChangeActive = useCallback(()=>{
        if(type==='drop-down'){
            return setIsActive(prev=> {
                return title !== prev?title:null
            })
        }
        dispatch(setStoriesLang('en'))
        dispatch(setStoriesOrder('retweeted'))
        dispatch(setStoriesRefreshTime(60))
    })
    return (
        <div className='option-btn-box'>
            <button className={`option-btn-box__option-btn option-btn ${type}-btn`} onClick={handleChangeActive}>
                <div className='option-btn__info'>
                    {
                        type === 'drop-down'
                        ?<div className='option-btn__selected'>
                            {selected.option}
                        </div>
                        :null
                    }
                    
                    <div className='option-btn__title'>
                        {title}
                    </div>
                </div>
                {
                    type === 'drop-down'
                    ?isActive === title
                        ?<FaChevronUp/>
                        :<FaChevronDown/>
                    :null
                }

            </button>
            {
                type === 'drop-down' && isActive === title
                ?<OptionsDropDown items={data} title={title} selected={selected} setSelected={setSelected} setIsActive={setIsActive}/>
                :null
            }
        </div>
    );
}

export default OptionBtn;
