
import { NLineComment,NLineCommentsList } from "./index";

export const commentData=[
  {
    name:"nithin joji",
    text:"hey nice !! good vedio",
    replies:[
      {
        name:"nithin joji",
        text:"hey nice !! good vedio",
        replies:[
          {
            name:"nithin joji",
            text:"hey nice !! good vedio",
            replies:[
              {
                name:"nithin joji",
                text:"hey nice !! good vedio",
                replies:[
                  {
                    name:"nithin joji",
                    text:"hey nice !! good vedio",
                    replies:[]
                    
                  },
                  {
                    name:"nithin joji",
                    text:"hey nice !! good vedio",
                    replies:[]
                    
                  },
                ]
                
              },
              {
                name:"nithin joji",
                text:"hey nice !! good vedio",
                replies:[]
                
              },
            ]
            
          },
          {
            name:"nithin joji",
            text:"hey nice !! good vedio",
            replies:[]
            
          },
        ]
        
      },
      {
        name:"nithin joji",
        text:"hey nice !! good vedio",
        replies:[]
        
      },
    ]
    
  },
  {
    name:"nithin joji",
    text:"hey nice !! good vedio",
    replies:[]
    
  },
  {
    name:"nithin joji",
    text:"hey nice !! good vedio",
    replies:[]
    
  },
  {
    name:"nithin joji",
    text:"hey nice !! good vedio",
    replies:[]
    
  },
  {
    name:"nithin joji",
    text:"hey nice !! good vedio",
    replies:[]
    
  },
]


const NlLineCommentsContainer = () => {
  return (
    <div>
        <NLineCommentsList comments={commentData}/>
    </div>
  )
}
export default NlLineCommentsContainer