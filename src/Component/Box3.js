import React from 'react'
import InfoIcon from '@mui/icons-material/Info';

import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
const Box3 = () => {
  return (
    <div className=" h-96 w-96 rounded-md  ml-48 mt-14 shadow-2xl " style={{height:"600px" ,width:"550px"}} >
    <div className="bg-[black]  h-12 pt-3  w-96 rounded-t-md text-[white] pl-28" style={{width:"550px"}}>Structure your Pointers<InfoIcon sx={{color:"white",marginLeft:"180px"}}/></div>
    <div className="text-[black] pt-3 bg-[#FDFDFD] mt-3 pl-5 font-medium">Description: <span className='font-serif'> Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world </span></div><br/><br/><hr/>
    <div className="text-[black] font-medium mt-5 pl-5 " >Title</div>
    <div className="bg-[#FCFBFB] ml-7 h-10 w-96 mt-3 shadow" style={{width:"450px"}}></div>
    <div className="text-[black] font-medium pl-5 mt-5">Content</div><br/>

    
    <div className="bg-[#FCFBFB] ml-7 h-20 w-96 flex flex-col mt-2 pl-8 shadow" style={{width:"480px",height:"100px"}}>
    <div className="flex flex-row">
    <div className="">File</div>
    <div className=" pl-7">Edit</div>
    <div className="pl-7">View</div>
    <div className="pl-7">Insert</div>
    <div className="pl-7">Format</div>
    <div className="pl-7">Tools</div>
    <div className="pl-7">Helps</div><br/>
    </div>
    <div className="flex flex-row mt-5">
    <div className=""><TurnLeftIcon/></div>
    <div className="pl-7"><TurnRightIcon/></div>
    <div className="pl-7 pr-4"><VerifiedIcon/></div>
    <div className="   w-24 pl-3 bg-[#EBEBEB] text-[#616161]">Paragraph</div>
    <div className="pl-9 "><MoreHorizIcon/></div>

    </div>
    </div>
    </div>
  )
}

export default Box3