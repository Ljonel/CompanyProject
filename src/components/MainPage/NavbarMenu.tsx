import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
//#region styles
const Menu = styled.div`
  background: #fff;
  border: 1px solid black;
  border-radius: 0 0 5px 5px;
  border-top: none;
  top: 0;
  width: 250px;
  margin-top: 50px;
  position: absolute;
  transition: 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
`;
const MenuFilter = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  input {
    width: 90%;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid gray;
    background: none;
    outline: none;
  }
`;

const MenuContainer = styled.div`
  padding: 10px;
  span {
    font-size: 15px;
    color: gray;
  }
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease;
    padding: 8px 0;
    img {
      margin-right: 10px;
    }
  }
  li:hover {
    background: #f1f1f1;
  }
  a {
    text-decoration: none;
  }
  .navbarmenu-avatar-photo {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .navbarmenu-avatar {
    display: block;
    a {
      text-decoration: none;
      color: blue;
    }
  }
  .navbarmenu-logout {
    text-align: center;
    cursor: pointer;
  }
  .menu-account {
    a {
      display: flex;
    }
  }
`;
//#endregion

export interface HeaderMenuOptions {
  id: number;
  img: string;
  name: string;
  path: string;
  exact?: boolean;
}

const headerMenuOptions: HeaderMenuOptions[] = [
  {
    id: 0,
    img: "house2.png",
    name: "Home",
    path: "/",
    exact: true,
  },
  {
    id: 1,
    img: "publications.png",
    name: "Publications",
    path: "/publications",
  },
  {
    id: 2,
    img: "people.png",
    name: "People",
    path: "people",
  },
  {
    id: 3,
    img: "entities2.png",
    name: "Entities",
    path: "entities",
  },
  {
    id: 4,
    img: "administration.png",
    name: "Administration",
    path: "administration",
  },
];

const NavbarMenu = ({ handleIconLink, numberOfId }) => {
  const options = headerMenuOptions.map((item) => {
    return (
      <NavLink
        to={item.path}
        key={item.id}
        onClick={() => handleIconLink(item.img, item.name)}
        exact={item.exact ? item.exact : false}
        name={item.name}
      >
        <li>
          <img src={`./icons/${item.img}`} alt={item.img} />
          <p> {item.name}</p>
        </li>
      </NavLink>
    );
  });

  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));

  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));

  const [inputText, setInputText] = useState<string>("");
  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
    // console.log(text);
  };

  return (
    <Menu>
      <MenuFilter>
        <input
          type="text"
          value={inputText}
          onChange={inputHandle}
          name="navbarMenuFilter"
          placeholder="Filter..."
        />
      </MenuFilter>
      <MenuContainer>
        <span>Platform</span>
        {/* <ul>{options}</ul> */}
        {options.map((item) => {
          if (item.props.name.toLowerCase().includes(inputText.toLowerCase())) {
            return <ul>{item}</ul>;
          }
        })}

        <span>Workspaces</span>
        <ul>
          <li>
            <img src="./icons/contractlow.png" alt="" />
            <p>Client contract</p>
          </li>
          <li>
            <img src="./icons/contractlow.png" alt="" />
            <p>Supplier contract</p>
          </li>
          <li>
            <img src="./icons/entities2.png" alt="" />
            <p>Corporate</p>
          </li>
          <li>
            <img src="./icons/contractlow.png" alt="" />
            <p>Group Norms</p>
          </li>
          <li>
            <img src="./icons/contractlow.png" alt="" />
            <p>Real estate contracts</p>
          </li>
        </ul>
        <hr />
        <span>Account</span>
        <div className="menu-account">
          <ul>
            <NavLink to="/user">
              <img
                className="navbarmenu-avatar-photo"
                // src="./icons/navbarmenu-avatar.jpg"
                src={photosList?.[numberOfId]?.url}
                alt="avatar"
              />
              <div className="navbarmenu-avatar">
                <p>{usersList?.[numberOfId]?.name}</p>
                <a href="index.html">See profile</a>
              </div>
            </NavLink>
            <li>
              <img src="./icons/privacy.png" alt="" />
              <p>Privacy</p>
            </li>
            <li>
              <img src="./icons/settings.png" alt="" />
              <p>Settings</p>
            </li>
          </ul>
          <hr />
          <div className="navbarmenu-logout">
            <img src="./icons/logout.png" alt="" />
            <span>Logout</span>
          </div>
        </div>
      </MenuContainer>
    </Menu>
  );
};

export default NavbarMenu;
