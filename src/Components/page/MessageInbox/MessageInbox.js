import React from "react";
import classes from "./MessageInbox.module.css";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../../Hook/useHttp";
import { manageEmailActions } from "../../store/manage-email-reducer";
import "./Mail.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const MessageInbox = (selected) => {
  const mails = useSelector((state) => state.mailmanager.receive);
  const userMail = useSelector((state) => state.auth.MailBoxId);
  const { id } = useParams();
  const [error, sendRequest] = useHttp();
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(mails, "==>MESSAGE");
  let arr = mails.find((index) => index.id === id);

  console.log(arr);

  const deleteMailHandler = () => {
    const responseHandler = () => {
      dispatch(manageEmailActions.deleteMail(arr.id));
      alert("Message deleted Successfully");
      history.replace("/mailbox/receiveinbox");
    };

    sendRequest(
      {
        request: "delete",
        url: `https://mail-clone-f684a-default-rtdb.firebaseio.com/receive${userMail}/${arr.id}.json`,
        header: { "Content-type": "application/json" },
      },
      responseHandler
    );
  };

  return (
    <React.Fragment>
      {error && <h2>{error}</h2>}
      <div className="mail">
        <div className="mail__tools">
          <div className="mail__toolsLeft">
            <IconButton onClick={() => history.push('/mailbox/:id')}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
            <IconButton>
              <ErrorIcon />

              <DeleteForeverIcon />
            </IconButton>

            <IconButton>
              <EmailIcon />
            </IconButton>
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="mail__toolsRight">
            <IconButton>
              <ArrowDropUpIcon />
            </IconButton>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__body">
          <div className="mail__bodyHeader">
            <LabelImportantIcon className="mail__important" />
            <h5>{arr ? arr.subject : "loading..."}</h5>
            <p style={{padding:"10px"}} className="mail__message">{arr ? arr.message : "loading..."}</p>
            <button  style={{
                backgroundColor: "white",
                border: "0px",
                paddingRight: "30px",
              }}   onClick={deleteMailHandler}><DeleteForeverIcon/></button>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default MessageInbox;
