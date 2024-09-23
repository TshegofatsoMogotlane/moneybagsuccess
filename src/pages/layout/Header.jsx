import React, { useContext } from "react";
import { DarkModeIcon, HeaderWrapper, LightModeIcon, SearchIcon } from "./Header.styled";
import Logo from "../../assets/Logo.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import Login from "../../components/login/Login";


const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <HeaderWrapper>
      <img className="logo" src={Logo} alt="brics-logo" />
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      {/* <div className="dropdown">
        <ExpandMoreIcon className="dropdownbtn" />
        <div className="dropdown-content">
          {userInfo ? (
            <>
              <span>Account</span>
              <span onClick={handleLogout}>Log Out</span> 
            </>
          ) : (
            <>
              <span onClick={() => openModalHandle(<SignUp />)}>Sign Up</span> 
              <span onClick={() => openModalHandle(<Login />)}>Log In</span> 
            </>
          )}
          <span>Help</span>
        </div>
      </div> */}
      {/* <Login /> */}
      <span onClick={()=>toggleTheme()}>{theme==="light"?<DarkModeIcon/>:<LightModeIcon/>}</span>
    </HeaderWrapper>
  );
};

export default Header;
