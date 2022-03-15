import {  useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setStories, setStoriesNextPageToken, updateStories } from "../../store/reducers/storiesReducerDuck"
import StorieService from "../../services/StorieService"
import Options from '../../components/Options';
import StoriesList from '../../components/StoriesList';
import useTimer from '../../hooks/useTimer';

import './style.css'
import InfiniteScroll from 'react-infinite-scroll-component';

function getStories(state) {
	return state.stories.storiesData
}
function getStoriesOrder(state) {
	return state.stories.storiesOrder
}
function getStoriesLang(state) {
	return state.stories.storiesLang
}
function getStoriesNextPageToken(state) {
	return state.stories.storiesNextPageToken
}
function getStoriesRefreshTime(state) {
	return state.stories.storiesRefreshTime
}


const Stories = () => {
   
    const storiesData = useSelector(getStories)
    const storiesNextPageToken = useSelector(getStoriesNextPageToken)
    const storiesOrder = useSelector(getStoriesOrder)
    const storiesLang = useSelector(getStoriesLang)
    const storiesRefreshTime = useSelector(getStoriesRefreshTime)

    const {timerIndicate,refresh} = useTimer(storiesRefreshTime)
    const [timer,setTimer] = useState(timerIndicate)

    const dispatcher = useDispatch()
    
    useEffect(() => {
		handleSetData()
	}, [storiesOrder,storiesLang])

    useEffect(()=>{
        refresh()
    },[storiesRefreshTime])
    
    useEffect(() => {
        setTimer(timerIndicate)
        if(timerIndicate === 0){
            handleSetData()
            refresh()
        }
    }, [timerIndicate]);

    const handleSetData = useCallback(()=>{
        StorieService.filter(20,storiesLang,storiesOrder)
			.then(
				res => {
                    dispatcher(setStoriesNextPageToken(res.next_page_token))
					dispatcher(setStories(res.stories))
				},
				console.log
			)
    })
    const handleUpdateData = useCallback(()=>{
        StorieService.filter(20,storiesLang,storiesOrder,storiesNextPageToken)
        .then(
            res => {
                dispatcher(setStoriesNextPageToken(res.next_page_token))
                dispatcher(updateStories(res.stories))
            },
            console.log
        )
    })
    return (
        <InfiniteScroll
        dataLength={storiesData.length} //This is important field to render the next data
        next={handleUpdateData}
        hasMore={true}
        loader={<h4 >Loading...</h4>}
    >
        <div className='stories' id="scrollableDiv">
                <h1 className='stories__title'>Watchlist Name</h1>
                <Options/>
                <StoriesList data={
                    storiesData
                    ?storiesData
                    :[]
                }
                storiesNextPageToken={storiesNextPageToken}/>
            
        </div>
        </InfiniteScroll>
    );
}

export default Stories;
