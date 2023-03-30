import React from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const Slide = () => {
  return (
    <>
      <div
        className="rounded-r-md h-96 w-96  bg-[white] shadow-2xl"
        style={{ height: "600px" }}
      >
        <div className="h-14 w-96 rounded-r-md rounded-b-none bg-[black] pt-3.5 pl-80 "><ArrowCircleLeftIcon sx={{background:"black",color:"white"}} /></div>
        <ul >
          <li className="text-[black] font-bold pl-5 pt-5" >Explore the world of management</li>
          <li className="pt-1 pl-5"> Technical Project Management</li>
          <li className="pt-1 pl-5">Threadbuild</li>
          <li className="pt-1 pl-5">Structure your pointers</li>
          <li className="pt-1 pl-5">4SA Method</li>
        </ul>
      </div>
    </>
  );
};

export default Slide;
