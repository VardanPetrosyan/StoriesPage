import { useCallback, useEffect, useRef } from 'react';
import { useDispatch} from "react-redux";
import { setStoriesOrder, setStoriesLang, setStoriesRefreshTime } from "../../../store/reducers/storiesReducerDuck"
import StorieService from "../../../services/StorieService"

import './style.css'


const OptionsDropDown = ({items,title,setSelected,setIsActive,selected}) => {
    const dropDownRef = useRef()
    const dispatch = useDispatch()
    const handleSetOption = useCallback((setItem)=>{
        if(title === 'languages'){
            dispatch(setStoriesLang(setItem?.code))
        }else if(title === 'order'){
            dispatch(setStoriesOrder(setItem?.code))
        }else if(title === 'autorefresh'){
            dispatch(setStoriesRefreshTime(setItem?.code))
        }
        setItem.active = true
        setSelected(setItem)
        setIsActive(prev=>null)
    })
    const outClickDropDown = useCallback((event) => {
		const dropDownCheck = dropDownRef.current?.contains(event.target)
		if (!dropDownCheck) {
            setIsActive(prev=>null)
		}
	}, [])
    useEffect(() => {
        document.addEventListener("click", outClickDropDown);
       return ()=>{
        document.removeEventListener("click", outClickDropDown);
       }
    }, []);
   
    return (
        <div className='options-drop-down' ref={dropDownRef}>
            <h3>{title}:</h3>
            {
                items.map((el)=>
                <div key={el.id} className="drop-down-item" onClick={()=>handleSetOption(el)}>
                    <input type="radio" id={`${title}radio${el.id}`} name={title} defaultChecked = {el.id === selected.id}/>
                    <label htmlFor={`${title}radio${el.id}`}>{el.option}</label>
                </div>
                )
            }
            
        </div>
    );
}

export default OptionsDropDown;
