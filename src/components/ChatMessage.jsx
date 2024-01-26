import { FaUserCircle } from "react-icons/fa"


const ChatMessage = ({name,text}) => {
  return (
<div className="flex items-start gap-2 shadow-md  ">
 <FaUserCircle className="w-8 h-8 rounded-full" />
 <div className="flex flex-col gap-1">
    <span className="font-semibold text-gray-900">{name}</span>
    <span className="text-gray-500">{text}</span>
 </div>
</div>

  )
}
export default ChatMessage