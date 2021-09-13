import React, { useState } from "react";
import company_logo from "../../Assets/image/download.png";
import login_profile_img from "../../Assets/image/login_img.png";
import "../../Css/Style.css";
import {Link} from 'react-router-dom'
import CreateCompany from "./CreateCompany";

const Header = ({ sideBar, setSideBar }) => {
const [LoginProfileBtn, setLoginProfileBtn] = useState(false);
const [searchField, setSearchField] = useState(false);


const handleSidebar=()=>{
  if (sideBar) {
    setSideBar(false);
    setLoginProfileBtn(false);
  } else {
    setSideBar(true);
  }
}

  const handleChangeAdmin = () => {
    if (LoginProfileBtn) {
      setLoginProfileBtn(false);
    } else {
      setLoginProfileBtn(true);
      setSearchField(false);
    }
  };

  const handleSearchResponsive= () => {
    if (searchField) {
      setSearchField(false);
    } else {
      setSearchField(true);
      setLoginProfileBtn(false);
    }
  };

  return (
    <>
      <header>

        <div className="header_section">
          <div className="header_sidebar_control">
            <div className="header_sidebar_control_section">
              <div className="header_company_logo">
                <img src={company_logo} />
              </div>
              <div
                className="sidebar_controler_btn open_close_nav"
                onClick={() => setSideBar(!sideBar)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="company_name">
              <p>9TH DIMENSION</p>
            </div>
          </div>

          {/* () => setSideBar(!sideBar) */}

          <div className="responsive_header_sidebar_control">
            <div className="sidebar_controler_btn open_close_nav"   onClick={handleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="responsive_header_logo">
            <div className="header_company_logo">
              <img src={company_logo} />
            </div>
          </div>

          <div className="header_details">
            <div className="header_detail_section">
              <div className="header_login_details_section"   data-toggle="modal" data-target="#CreateCompany">
                <div
                  className="header_login_details"
                  onClick={handleChangeAdmin}
                >
                  <figure>
                    <img src={login_profile_img} />
                  </figure>
                  <p>Create Company</p>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
                <div
                  className={
                    LoginProfileBtn
                      ? "header_login_details_section_click_data LoginProfileBtn"
                      : "header_login_details_section_click_data"
                  }
                >
                  <Link to="/profile">My profile</Link>
                  <Link to="#">setting</Link>
                  <Link to="#">logout</Link>
                </div>
              </div>
              <div className="responsive_header_login_details">
                <a onClick={handleChangeAdmin}>
                  <i className="fa fa-ellipsis-v"></i>
                </a>
                <div
                  className={
                    LoginProfileBtn
                      ? "header_login_details_section_click_data LoginProfileBtn"
                      : "header_login_details_section_click_data"
                  }
                >
                  <a href="#">My profile</a>
                  <a href="#">setting</a>
                  <a href="#">logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <CreateCompany/>

    </>
   
  );
};

export default Header;
