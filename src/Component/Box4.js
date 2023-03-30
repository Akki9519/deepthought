import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const Box4 = () => {
  return (
    <div className=" h-96 w-96 rounded-md  mt-14 ml-14 shadow-2xl " style={{height:"600px" ,width:"550px"}}>
        <div className="bg-[black]  h-12 pt-3  w-96 rounded-t-md text-[white] pl-52" style={{ width:"550px" }}>4SA Method<InfoIcon sx={{color:"white",marginLeft:"190px"}}/></div>
        <div className="text-[black] pt-5 ml-8 font-medium mt-6">Description: <span className='font-serif'> To Explore more read more </span></div><br/><hr/>

        <div className="h-10 w-96 mt-0 ml-8 flex flex-row bg-[#F2F2F2] " >
        <div className="ml-8 mt-2"><ArrowDropUpIcon /></div>
        <div className="text-[rgb(0,0,0)] font-medium pl-14 pt-2 h-10 w-96  " >Introduction</div>
        </div>

        <div className="text-sm pl-8 mt-5">The 4SA Method , How to bring a idea into progress ?</div>
        <div className="pl-80 mt-3">See More</div>
        <div className="h-10 w-96 mt-6 ml-8  border border-[gray] flex flex-row ">
        
        <div className="pl-3 ml-8"><ArrowDropUpIcon /></div>
        <div className="text-[black] font-medium pl-14 pt-2  " >Thread A</div>
        </div>
        <div className="text-sm pl-8 mt-8">How are you going to develop your stratergy ? Which method are you going to <br/>use to develop a stratergy ? What if the project is lengthy?</div>
        <div className="pl-80 mt-5">See More</div>
        <div className="h-10 w-96 border border-[gray] text-[black] font-medium mt-8 ml-24 pl-5 pt-1.5 ">Example 1</div>
        <div className="text-sm mt-3 pl-28">You have a concept , How will you put into progress?</div>


</div>
  )
}

export default Box4