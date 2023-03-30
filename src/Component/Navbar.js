import React from "react";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image from "../images/ok.jpg";

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-lg">
        <div
          className="flex flex-row bg-[#F0F0F0] mt-5 "
          style={{ height: "60px", paddingTop: "15px" }}
        >
          <div className="pl-10 ">
            <BlurCircularIcon sx={{color:"blue",fontSize:"45px",paddingBottom:"3px"}}/>
          </div>
          <div
            className="text-[#000000] font-medium text-xl"
            style={{ height: "71.97px", width: "22.8px", paddingLeft: "10px" ,paddingTop:"4px"}}
          >
            DEEP
          </div>
          <div
            className="text-[#0029FF]  font-extrabold text-xl"
            style={{
              height: "158.76px",
              width: "23.49px",
              paddingLeft: "45px",
              paddingTop:"4px"
            }}
          >
            THOUGHT
          </div>
          <div
            className=""
            style={{ height: "22.37px", width: "20px", paddingLeft: "1100px" }}
          >
            <HomeIcon sx={{color:"white",background:"#3683F0",borderRadius:"30px",paddingLeft:"4px",paddingRight:"4px"}} />{" "}
          </div>
          <div
            className=""
            style={{ height: "32.37px", width: "30px", paddingLeft: "43px" }}
          >
            <NotificationsNoneIcon sx={{color:"white",background:"#3683F0",borderRadius:"30px",paddingLeft:"4px",paddingRight:"4px"}} />
          </div>
          <div
            className=""
            style={{ height: "32.37px", width: "30px", paddingLeft: "46px",paddingRight:"14px" }}
          >
            <ConstructionIcon sx={{color:"white",background:"#3683F0",borderRadius:"30px",paddingLeft:"4px",paddingRight:"4px"}} />
          </div>
          <div>
            <img
              src={image}
              alt="this is my child"
              className="rounded-3xl ml-8"
              style={{ height: "37px", width: "37px",paddingLeft:"1px" }}
            />
           
          </div>
          <div className="" style={{paddingLeft:"20px"}}><MoreVertIcon sx={{color:"#3683F0"}}/></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
