import {useState} from 'react'
import OptionBtn from '../../ui/OptionBtn'
import FILTERS from '../../../helpers/constants.js'
import './style.css'

const FilterOptions = () => {
    const [isActive, setIsActive] = useState(null)
    return (
        <div className='filters__filter-options filter-options' style={{gridTemplateColumns: `repeat(${FILTERS.length},max-content)`}}>
            {
                FILTERS.map((el)=>
                    <OptionBtn key={el.id} type={el.type} title={el.title} data={el.info} isActive={isActive} setIsActive={setIsActive}/>
                )
            }
        </div>
    );
}

export default FilterOptions;
