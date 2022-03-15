import Curation from './Curation';
import { FaThumbsUp, FaThumbsDown, FaRegBookmark } from "react-icons/fa";
import './style.css'

const intialDefault = [
    {
        id:1,
        icon:<FaThumbsUp/>,
        title:'Like'
    },
    {
        id:2,
        icon:<FaThumbsDown/>,
        title:'Dislike'
    },
    {
        id:3,
        icon:<FaRegBookmark/>,
        title:'Bookmark'
    }
]
const Curations = ({data=intialDefault}) => {
    return (
    <div className='curations' style={{gridTemplateColumns: `repeat(${data.length}, max-content)`}}>
            {
                data
                ?data.map((el)=>
                    <Curation key={el.id} title={el.title}>
                        {el.icon}
                    </Curation>
                )
                :null
            }
            
        </div>
    );
}

export default Curations;
