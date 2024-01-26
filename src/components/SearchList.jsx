import { useSelector } from "react-redux"
import { VideoCards } from "./index";
import { Link } from "react-router-dom";


const SearchList = () => {
const data=useSelector((store)=>store.searchList.list)
console.log(data);

  return (
  <div className="flex flex-wrap">
      {
        data.map((item)=>{
        console.log(item?.id?.videoId);  
        return(
          <Link key={item?.id?.videoId||item?.id?.channelId} to={`/watch?v=${item?.id?.videoId}`}>
          <VideoCards  info={item}/>
          </Link>
        )

        })
      }
  </div>
  )
}
export default SearchList  



