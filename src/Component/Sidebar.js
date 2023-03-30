import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const sidebar = () => {
  return (
    <div className="float-right " style={{marginTop:"-180px"}}>

        <div className=" pr-10 "><CalendarMonthIcon sx={{color:"white",borderRadius:"40px",background:"#0029FF",height:"60px",width:"60px",paddingLeft:"10px",paddingRight:"10px"}}/></div>
        <div className="pr-10 pt-10"><Diversity3Icon sx={{color:"white",borderRadius:"40px",background:"#0029FF",height:"60px",width:"60px",paddingLeft:"10px",paddingRight:"10px"}}/></div>
        <div className="pr-10 pt-10 pb-20"><QuestionMarkIcon sx={{color:"white",borderRadius:"40px",background:"#0029FF",height:"60px",width:"60px",paddingLeft:"10px",paddingRight:"10px"}}/></div>
    </div>
  )
}

export default sidebar