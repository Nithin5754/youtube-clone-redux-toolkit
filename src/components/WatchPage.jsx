import { useEffect } from "react"

import { closeHamburger } from "../utils/navigationSlice"
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Comment } from "./index";


const WatchPage = () => {
  // const data=useSelector((store)=>store.navigation.hamburger)
  const dispatch=useDispatch()
  let [searchParams] = useSearchParams();
  const dataId=searchParams.get('v')
  useEffect(()=>{
     dispatch(closeHamburger())
  },[])
  return (
<div className="flex flex-col m-auto">

<div className="flex m-auto mt-20"><iframe width="1200" height="600" src={`https://www.youtube.com/embed/${dataId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>

<div>
     <Comment VIDEO_ID={dataId}/>
</div>

</div>



  )
}
export default WatchPage