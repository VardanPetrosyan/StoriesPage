import Card from "../ui/Card";
import './style.css'

const StoriesList = ({data, storiesNextPageToken}) => {
    return (
        <div className="storie-list">
            {data
            ?data.map((el)=>
                <Card key={el.id} item={el}/>
            )
            :'loading'
            }
            
        </div>
    );
}

export default StoriesList;
