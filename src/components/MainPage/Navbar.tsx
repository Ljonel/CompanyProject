import React, { useState } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import NavbarMenu from "./NavbarMenu";
import useDropdown from "react-dropdown-hook";
//#region styles
const Header = styled.div`
  display: flex;
  height: 50px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 17px -3px #000000;
  box-shadow: 0px 0px 17px -3px #000000;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  z-index: 999;
  img:hover {
    opacity: 0.5;
  }
`;
const HeaderHome = styled.div`
  padding: 0px 10px;
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  .logo {
    width: 40px;
    margin-right: 5%;
  }
  .home-wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    .house-icon {
      margin-right: 5%;
      cursor: pointer;
    }
  }
`;
const HeaderSearch = styled.div`
  display: flex;
  width: 50%;
  margin-left: 30px;

  height: 100%;
  padding: 0 10px;
  align-items: center;

  .headerSearch-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 10px;
    input {
      width: 90%;
      padding: 10px;
      background: none;
      border: none;
      outline: none;
      text-align: center;
    }
    img {
      padding: 2px;
    }
  }
`;
const HeaderIcons = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;

  .headerIcons-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 20px;
    cursor: pointer;
    img {
      margin: 10px;
    }
  }
`;
//#endregion

const Navbar = ({ icon, handleIconLink }) => {
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();

  return (
    <Header>
      <HeaderHome>
        <img
          style={{ borderRadius: "50%" }}
          className="logo"
          src="./icons/logoLY.jpg"
          alt=""
        />
        <div ref={wrapperRef} className="home-wrapper">
          <img
            onClick={toggleDropdown}
            className="house-icon"
            src={"./icons/" + icon.url} // actually clicked icon: ;
            alt="house2"
          />
          <p>{icon.name}</p> {/*actually clicked title*/}
          {dropdownOpen && <NavbarMenu handleIconLink={handleIconLink} />}
        </div>
        <img
          onClick={closeDropdown}
          className="arrowDown-icon"
          src="./icons/arrow-down.png"
          alt=""
        />
      </HeaderHome>
      <HeaderSearch>
        <div className="headerSearch-wrapper">
          <input
            type="text"
            name="searchInput"
            placeholder="Search Legalcluster"
          />
          <img src="./icons/search.png" alt="search" />
        </div>
      </HeaderSearch>
      <HeaderIcons>
        <div className="headerIcons-wrapper">
          <img src="./icons/house.png" alt="" />
          <img src="./icons/comments.png" alt="" />
          <img src="./icons/bell.png" alt="" />
        </div>
      </HeaderIcons>
    </Header>
  );
};

export default Navbar;
