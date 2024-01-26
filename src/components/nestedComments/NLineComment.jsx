import {NLineCommentsList  } from "./index";
const NLineComment = ({comment}) => {
  const {text,name,replies}=comment
  return (
<div className="flex flex-col">
<div>
     <p>{text}</p>
     <h2>{name}</h2>
   
    </div>
    <div className="replies-container ml-12">
        <NLineCommentsList comments={replies}/>
    </div>
</div>
  )
}
export default NLineComment