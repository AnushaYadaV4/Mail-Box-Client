import "./EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardHideOutlinedIcon from "@mui/icons-material/KeyboardHideOutlined";
import TodayIcon from "@mui/icons-material/Today";
import Section from "./Section";
import "./Section.css";
import { useSelector } from "react-redux";
import SentBox from "./SentBox";
import Inbox from "../Inbox/Inbox";
import { Route, useHistory } from "react-router-dom";

const EmailList = () => {
  const sentMail = useSelector((state) => state.mailmanager.sent);

  return (
    <div>
      <div className="emailList__settings">
        <div>
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <KeyboardHideOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div style={{paddingTop:"60px",paddingLeft:"100px"}}>

      
      <img
        style={{ width: "50vw", height: "70vh" }}
        src="https://seeklogo.com/images/Y/yahoo-messenger-logo-5783CAD8CA-seeklogo.com.jpg"
        alt=""
      />
      </div>
      

      <div className="emailList__list">
        <Route path="/mailbox/inbox">
          <section>
            {sentMail.map((mail) => {
              return <Inbox key={mail.id} mails={mail} type={"sent"} />;
            })}
          </section>
        </Route>
      </div>
    </div>
  );
};

export default EmailList;
