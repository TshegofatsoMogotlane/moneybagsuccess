import React, { useContext } from "react";
import { DarkModeIcon, HeaderWrapper, LightModeIcon, SearchIcon } from "./Header.styled";
import Logo from "../../assets/Logo.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
// import Login from "../../components/login/Login";


const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const navigate = useNavigate()
  return (
    <HeaderWrapper>
      <div className="on-web">
        <img className="logo" src={Logo} alt="brics-logo" onClick={()=>navigate("/")}/>
        <div className="header_center">
          <input type="text" />
          <SearchIcon />
        </div>
        <span onClick={()=>toggleTheme()}>{theme==="light"?<DarkModeIcon/>:<LightModeIcon/>}</span>
      </div>

      <div className="on-mobile">
        <img className="logo" src={Logo} alt="brics-logo" />
        <span onClick={()=>toggleTheme()}>{theme==="light"?<DarkModeIcon/>:<LightModeIcon/>}</span>
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
      
    </HeaderWrapper>
  );
};

export default Header;
