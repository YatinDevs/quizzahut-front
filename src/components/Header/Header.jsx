import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Modal from "../UI/Modal";
import Login from "../../pages/Login/Login";
import Logo from "../../assets/Logos/QuizzaHutLogo.svg";
import { BiHomeSmile } from "react-icons/bi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

function Header() {
  const logo = Logo;
  const [showModal, setShowModal] = useState(false);

  const handleLoginModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <header className="w-full bg-[#fff] shadow h-[68px] sticky top-0 z-10 header">
      <ContentWrapper customClass="h-full">
        <nav className="flex justify-between items-center h-full bg-[#fff] z-5">
          <div className="nav-logo flex justify-center items-center  ">
            <Link to="/" className="flex items-center">
              <img className="" src={logo} width={110} height={50} />
            </Link>
            <div className="nav-center flex justify-center items-center ml-[35px] ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` h-full flex px-[10px] py-[15px] items-center gap-1 justify-center shrink-0  
                ${isActive ? "text-orange-700" : "text-gray-700"}
                 `
                }
              >
                <BiHomeSmile />
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/telegram"
                className={({ isActive }) =>
                  ` flex px-[10px] py-[15px] items-center gap-1 justify-center shrink-0  
                ${isActive ? "text-orange-700" : "text-gray-700"}
                 `
                }
              >
                <PiTelegramLogoLight />
                <span>Telegram</span>
              </NavLink>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  ` flex px-[10px] py-[15px] items-center gap-1 justify-center shrink-0  
              ${isActive ? "text-orange-700" : "text-gray-700"}
               `
                }
              >
                <FaGithub />
                <span className="">GitHub</span>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` flex px-[10px] py-[15px] items-center gap-1 justify-center shrink-0  
              ${isActive ? "text-orange-700" : "text-gray-700"}
               `
                }
              >
                <FcAbout />
                <span>About</span>
              </NavLink>
            </div>
          </div>
          <div className="nav-right ">
            <NavLink
              className={({ isActive }) =>
                ` flex px-[10px] py-[15px] items-center gap-1 justify-center shrink-0  
             ${isActive ? "text-orange-700" : "text-gray-700"}
              `
              }
            >
              <button
                onClick={handleLoginModal}
                className="flex px-[10px] py-[15px] items-center gap-1 justify-center"
              >
                <RxAvatar />

                <span className="">Login/SignUp</span>
              </button>
            </NavLink>
          </div>
        </nav>
      </ContentWrapper>

      {showModal && (
        <Modal>
          <Login handleLoginModal={handleLoginModal} />
        </Modal>
      )}
    </header>
  );
}

export default Header;
