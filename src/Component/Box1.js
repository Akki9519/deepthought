import React from 'react'


import InfoIcon from '@mui/icons-material/Info';
import image from '../images/david-marcu-78A265wPiO4-unsplash.jpg'

const Box1 = () => {
  return (
    <>
        <div className=" h-96 w-96 rounded-md  ml-28 mt-12 shadow-2xl" style={{height:"600px" ,width:"550px"}}>
        <div className="bg-[black]  h-12 w-96 rounded-t-md text-[white] pl-36 pt-3" style={{width:"550px"}}>Technical Project Management<InfoIcon sx={{color:"white", marginLeft:"140px" }}/></div>
        <div className="text-[black] pt-5 pl-5  font-medium">Description: <span className='font-serif'>Story of Alignment Scope of Agility Specific Accountable Staggering Approach</span></div>
        <img src={image} alt="" className='h-48 w-96 mt-10'style={{width:"550px",height:"300px" }} />
        </div>
    </>
  )
}

export default Box1