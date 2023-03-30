import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MessageIcon from '@mui/icons-material/Message';
import QuizIcon from '@mui/icons-material/Quiz';
import SpaIcon from '@mui/icons-material/Spa';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
const Box2 = () => {
  return (
    <>
       <div className=" h-96 w-96 rounded-md border-solid border-[gray] ml-60 mt-12  shadow-2xl" style={{height:"600px" ,width:"550px"}}>
        <div className="bg-[black]  h-12 pt-3 w-96 rounded-t-md text-[white] pl-52" style={{width:"550px"}}>Threadbuild<InfoIcon sx={{color:"white",marginLeft:"200px" }}/>
</div>
        

        <div className="text-[black] pt-5 pl-5 font-medium">Description: <span className='font-serif '> Watch the video and threadbuild, and jot out key threads while watching the video</span></div><br/><br/><hr/>
       <div className="h-10 w-96  bg-[#FEFFC0] flex flex-row " style={{width:"546px"}}>
        <div className="pl-4 pt-2"><ArrowDropUpIcon /></div>
        <div className="text-[black] mt-2 font-medium pl-24  ">Thread A</div>
       </div>
<div className="  flex flex-row">
  <div className="bg-[#F2F2F2] h-20 w-60 text-[#333333] ml-8 mt-5 rounded-md font-semibold ">
     Sub thread  1
    <input type="text" placeholder='Enter Text here'  className='shadow-lg bg-white h-16 rounded pb-10'></input>
  </div>
  <div className="h-10 w-40 text-[#6C757D]"></div>

  <div className="bg-[#F2F2F2] h-20 w-60 text-[#333333] ml-8 mt-5 rounded-md font-semibold ">
     Sub Interpretation
    <input type="text" placeholder='Enter Text here' className='shadow-lg bg-white h-16 rounded pb-10 '></input>
  </div>
  <div className="h-10 w-40 text-[#6C757D]"></div>

 
</div>
<div className=" pl-24 mt-8 flex flex-row">
<div className=""><LightbulbIcon/></div>
<div className="pl-2"><MessageIcon/></div>
<div className="pl-2"><QuizIcon/></div>
<div className="pl-2"><SpaIcon/></div>
<div className="h-10 w-40  ml-12 text-[black] font-bold shadow-2xl">select coding<ExpandMoreIcon/></div>
<div className="h-10 w-40  text-[black]  ml-2 font-bold shadow-2xl">select Process<ExpandMoreIcon/></div>

</div>
<div className="h-14 w-40 ml-10 pt-4 rounded-2xl pl-5 mt-4 bg-[#0029FF] text-[white]"> <AddIcon/> Sub-thread</div>


<div className="bg-[#F2F2F2] h-28 w-96 text-[#333333] ml-8 mt-4 rounded-md font-semibold  ">Summary for Thread A
     
     <input type="text" placeholder='Enter Text here'   className='bg-[white] h-20 mt-2 w-96 rounded pb-12 shadow-2xl'></input> 
  </div>
  


</div>
    </>
  )
}

export default Box2