import { useState } from 'react'
import Reload from './Reload'
import Filters from './Filters'
import FilterOptions from './FilterOptions'
import './style.css'

const Options = () => {
    const [isActive, setActive] = useState()
    return (
        <div className='options'>
            <div className='options__btn-box'>
                <Reload/>
                <Filters setActive={setActive}/>
            </div>
            {
                isActive
                ?<div className='options__options-box'>
                    <FilterOptions/>
                </div>
                :null
            }
        </div>
        
    );
}

export default Options;
