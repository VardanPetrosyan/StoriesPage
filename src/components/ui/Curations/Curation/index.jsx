import './style.css'

const Curation = ({ title,children}) => {
    return (
        <div className='curation'>
            <button>
                    {children
                    ?children
                    :null} 
                <span>{title}</span>
            </button>
        </div>
    );
}

export default Curation;
