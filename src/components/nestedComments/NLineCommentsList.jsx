import {NLineComment  } from "./index";

const NLineCommentsList = ({comments}) => {
  return (
    <div>

      {
        comments.map((list)=>{
    
          return(
           <NLineComment comment={list} />
          )
        })
      }
    </div>
  )
}
export default NLineCommentsList