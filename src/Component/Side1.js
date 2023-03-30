import React,{useState} from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const Side1 = () => {
  const [handle,sethandle]=useState(true);
  
  function onhandlesubmit(){
      sethandle(false)
  }
  return (
    <>
       {handle &&  <div className="rounded-3xl h-96 w-20  bg-[white] shadow-2xl" style={{marginLeft:"-5px",height:"600px"}}>
            <div className="h-10 w-20 rounded-r-3xl rounded-br-none bg-[black]"></div>
            <div className=" rounded-lg h-8 w-8 mt-10 ml-5 border border-[#0029FF]" onClick={onhandlesubmit}>
                <div className="ml-2.5 mt-1 ">1</div>
            </div>
        </div>
       }
       {!handle &&  <div
        className="rounded-r-md h-96 w-96 border border-[gray] bg-[white]"
        style={{ height: "600px" }}
      >
        <div className="h-14 w-96 rounded-r-md rounded-b-none bg-[black] pt-3.5 pl-80 "><ArrowCircleLeftIcon sx={{background:"black",color:"white"}} onClick={()=>{sethandle(true)}}/></div>
        <ul className='list-disc' style={{listStyleType:"square"}}>
          <li className="font-bold pl-5 pt-5" >Explore the world of management</li>
          <li className="pt-1 pl-5"> Technical Project Management</li>
          <li className="pt-1 pl-5">Threadbuild</li>
          <li className="pt-1 pl-5">Structure your pointers</li>
          <li className="pt-1 pl-5">4SA Method</li>
      
        </ul>
      </div> }
            
    </>
  )
}

export default Side1