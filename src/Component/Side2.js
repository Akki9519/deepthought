import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const side2 = () => {
  return (
    <>
        <div className="rounded-l-3xl h-96 w-20  bg-[white] ml-96 mt-5 shadow-2xl" style={{marginRight:"-1px"}}>
            <div className="h-96 w-9 bg-[black] rounded-l-3xl flex flex-col ">
            
            <div className=" mt-5 pl-1"><CloseIcon sx={{ color:"white"}}/></div>
            <div className="text-[white] mt-5 ml-3">N</div>
            <div className="text-[white] ml-3">o</div>
            <div className="text-[white] ml-3">t</div>
            <div className="text-[white] ml-3">i</div>
            <div className="text-[white] ml-3">c</div>
            <div className="text-[white] ml-3">e</div>
            <div className="text-[white] ml-3 mt-7">B</div>
            <div className="text-[white] ml-3">o</div>
            <div className="text-[white] ml-3">a</div>
            <div className="text-[white] ml-3">r</div>
            <div className="text-[white] ml-3">d</div>
            </div>
        </div>
    </>
  )
}

export default side2