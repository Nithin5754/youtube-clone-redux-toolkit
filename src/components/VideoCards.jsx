const videoCards = ({info}) => {
  const {snippet}=info;
  const {channelTitle,title,thumbnails}=snippet
  
  return (
<div  className="w-[400px] h-[300px] flex flex-col items-center justify-center m-4 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <div className="w-[400px] h-[400px] bg-gray-400 object-fit rounded-t-lg overflow-hidden">
       <img src={thumbnails?.medium?.url} alt="" className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
    </div>
    <ul className="mt-4 space-y-2 text-sm font-medium text-gray-600 p-4">
       <li className="font-bold text-lg">{title}</li>
       <li>{channelTitle}</li>
       {/* <li>Views: {statistics.viewCount}</li> */}
    </ul>
</div>


   
  )
}
export default videoCards