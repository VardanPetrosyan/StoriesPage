import { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button'
import filter from "../../../assets/icons/filter.svg"
import './style.css'


const Filters = ({setActive}) => {
    const dispatch = useDispatch()
    const handleChangeActive = useCallback(()=>{
        setActive(prev=>!prev)
    })
    
    return (
        <div>
            <Button 
                type='button'
                buttonSize='btn-large'  
                onClick={e=>{
                    e.stopPropagation()
                    e.preventDefault()
                    handleChangeActive()
                }}
                classSet={['filter-button']}
            >
                <img className="filter-icon" src={filter} alt="redo" />
                <span className="filter-btn-title">Filters</span> 
            </Button>
        </div>
    );
}

export default Filters;
