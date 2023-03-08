import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { authAction } from "../store/auth-reducer";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";


const Header = () => {
  const dispatch=useDispatch()
  const history = useHistory();

  const userlogOuthandler = () => {
    dispatch(authAction.removeExpenseToken())
    dispatch(authAction.removeUserEmail())
    history.replace("/");
  };
  
  
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Yahoo%21_Mail_%282019%29.svg"

          alt=""
        />
      </div>
      <div className="header__middle">
      <SearchIcon/>
      <input placeholder="Find messages,Documents,Photos or People " type="text"/>
      <ArrowDropDownIcon className="header__inputCaret"/>

      </div>
      <div className="header__right">
      <button style={{
                backgroundColor: "white",
                border: "0px",
                paddingRight: "30px",
              }} onClick={userlogOuthandler}><AccountCircleIcon />Logout</button>
      <HomeIcon/>

      </div>
    </div>
  );
};

export default Header;
