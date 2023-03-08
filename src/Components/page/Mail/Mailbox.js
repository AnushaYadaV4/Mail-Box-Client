import React from "react";
import classes from "./Mailbox.module.css";
import Inbox from "../Inbox/Inbox";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ComposeMail from "../ComposeMail/ComposeMail";
import Welcome from "../Welcome";
import { useParams } from "react-router-dom";

import { Button } from "@mui/material";
import "./SideBar.css";
import SideBarOptions from "./SideBarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import DraftsIcon from "@mui/icons-material/Drafts";
import OutboxIcon from "@mui/icons-material/Outbox";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import "./SideBarOptions.css";
import EmailList from "../SentBox/EmailList";
import MessageInbox from "../MessageInbox/MessageInbox";
const Mailbox = (selected) => {
  const history = useHistory();

  const receiveMail = useSelector((state) => state.mailmanager.receive);
  const sentMail = useSelector((state) => state.mailmanager.sent);
  console.log(receiveMail);
  const { id } = useParams();
  console.log(id, "==>ID");

  let unSeen = 0;
  receiveMail.forEach((data) => {
    if (data.seen === false) {
      unSeen = unSeen + 1;
    }
  });

  const sentHandler = () => {
    history.push("/mailbox/inbox");
  };

  console.log(unSeen, "UNSEEN MESSAGES");

  return (
    <React.Fragment>
      <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
        <section className={classes.section}>
          <div className="sidebar">
            <Button
              className="sidebar__compose"
              onClick={() => {
                history.push("/mailbox/compose");
              }}
            >
              Compose
            </Button>

            <button
              className={`sidebarOption ${selected && "sidebarOption--active"}`}
              style={{
                backgroundColor: "white",
                border: "0px",
                paddingRight: "30px",
              }}
              onClick={() => {
                history.push("/mailbox/receiveinbox");
              }}
            >
            
              <InboxIcon style={{ paddingRight: "8px" }} />
              {`Inbox ${unSeen}`}
            </button>

            <SideBarOptions Icon={StarIcon} title="Stared" number={54} />
            <SideBarOptions Icon={DraftsIcon} title="Drafts" number={54} />
            <button
              className={`sidebarOption ${selected && "sidebarOption--active"}`}
              style={{
                backgroundColor: "white",
                border: "0px",
                paddingRight: "30px",
              }}
              onClick={sentHandler}
            >
              <OutboxIcon style={{ paddingRight: "9px" }} />
              Sent
            </button>

            <SideBarOptions Icon={ArchiveIcon} title="Archive" number={54} />
            <SideBarOptions
              Icon={DeleteIcon}
              title="Deleted Items"
              number={54}
            />
            <SideBarOptions Icon={ExpandLessIcon} title="Less" number={54} />
            <SideBarOptions Icon={ViewStreamIcon} title="Views" number={54} />
            <SideBarOptions
              Icon={InsertPhotoOutlinedIcon}
              title="Photos"
              number={54}
            />
            <SideBarOptions
              Icon={DescriptionOutlinedIcon}
              title="Documents"
              number={54}
            />
            <SideBarOptions
              Icon={MarkAsUnreadOutlinedIcon}
              title="Subscriptions"
              number={54}
            />
            <SideBarOptions
              Icon={ContentCutOutlinedIcon}
              title="Deals"
              number={54}
            />
            <SideBarOptions
              Icon={FlightOutlinedIcon}
              title="Travel"
              number={54}
            />
            <SideBarOptions
              Icon={FolderSharedOutlinedIcon}
              title="Folders"
              number={54}
            />
           
          </div>
        </section>
        <Route path="/mailbox/receiveinbox">
          <section>
            {receiveMail.map((mail) => {
              return <Inbox key={mail.id} mails={mail} type={"receive"} />;
            })}
          </section>
        </Route>
        <Route path="/mailbox/compose">
          <ComposeMail />
        </Route>
        <Route path="/mailbox/welcome">
        
          <EmailList/>
        </Route>
        <Route path="/mailbox/inbox">
          <section className={classes.inbox_main}>
            {sentMail.map((mail) => {
              return <Inbox key={mail.id} mails={mail} type={"sent"} />;
            })}
          </section>
          
        </Route>
      </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Mailbox;
