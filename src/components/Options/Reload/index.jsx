import { useSelector, useDispatch } from "react-redux";
import { setStories,setStoriesNextPageToken } from "../../../store/reducers/storiesReducerDuck"
import StorieService from "../../../services/StorieService"

import Button from '../../ui/Button'
import redo from "../../../assets/icons/redo.svg"
import { useCallback } from 'react';

import './style.css'

function getStoriesOrder(state) {
	return state.stories.storiesOrder
}
function getStoriesLang(state) {
	return state.stories.storiesLang
}
const Reload = () => {
    const storiesOrder = useSelector(getStoriesOrder)
    const storiesLang = useSelector(getStoriesLang)
    const dispatcher = useDispatch()
    const handleStoriesUpdate = useCallback(()=>{
        StorieService.filter(20,storiesLang,storiesOrder)
			.then(
				res => {
					dispatcher(setStoriesNextPageToken(res.next_page_token))
					dispatcher(setStories(res.stories))
				},
				console.log
			)
    })
    return (
        <div>
            <Button 
                type='button'
                buttonSize='btn-large'  
                onClick={e=>{
                    e.stopPropagation()
                    e.preventDefault()
                    handleStoriesUpdate()
                }}
                classSet={['reload-button']}
            >
                <img className="redo-icon"  src={redo} alt="redo" />
                <span className="refresh-btn-title">Refresh</span> 
            </Button>
        </div>
    );
}

export default Reload;
