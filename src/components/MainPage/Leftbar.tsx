import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";

//#region
const LeftbarWrapper = styled.div`
  width: 100%;
  padding: 30px 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserCard = styled.div`
  min-width: 250px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px -3px #000000;
  box-shadow: 0px 0px 12px -3px #000000;
`;
const UserInfo = styled.div`
  width: 100%;
  height: 60%;
  text-align: center;
  padding: 10px 0 0 0;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  h3 {
    font-weight: bold;
    color: darkblue;
    margin: 10px 0;
  }
`;

const UserBody = styled.div`
  width: 100%;
  height: 40%;
  margin: 0;
  padding: 10px 0;
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
    font-weight: bold;

    p {
      margin-left: 10px;
      color: darkblue;
    }
  }
`;

const Icon = styled.img`
  /* width: 15px; */
  border: 1px solid darkblue;
  padding: 2px 5px;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;

const Nav = styled.nav`
  margin-top: 20px;
  min-width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
  img {
    width: 30px;
  }
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  li {
    cursor: pointer;
    padding: 20px;
    align-items: center;
    display: flex;
    text-align: left;
    p {
      margin-left: 20px;
    }
    &:hover {
      background: #f1f1f1;
    }
  }
`;
//#endregion

export interface LeftbarProps {}

const Leftbar = ({ handleIconLink, numberOfId }) => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));
  // console.log(numberOfId);

  return (
    <LeftbarWrapper className="leftbar-wrapper">
      <UserCard className="user-card">
        <UserInfo className="user-info">
          {/* <img src="./icons/navbarmenu-avatar.jpg" alt="xd" /> */}
          <img src={photosList?.[numberOfId]?.url} />
          <h3>{usersList?.[numberOfId]?.name}</h3>
          <p>{usersList?.[numberOfId]?.company.name}</p>
        </UserInfo>
        <UserBody className="user-body">
          <hr />
          <ul>
            <li>
              <img src="./icons/people.png" alt="" />
              <p>Your Network</p>
              <Icon src="./icons/user-plus.png" alt="" />
            </li>

            <li>
              <img src="./icons/publications.png" alt="" />
              <p>Your Publications</p>
              <Icon src="./icons/plus.png" alt="" />
            </li>
          </ul>
        </UserBody>
      </UserCard>
      <Nav>
        <ul>
          <NavLink
            to="/publications"
            onClick={() => handleIconLink("publications.png", "Publications")}
          >
            <li>
              <img src="./icons/publications.png" alt="" />
              <p>Publications</p>
            </li>
          </NavLink>
          <NavLink
            to="/ecosystem"
            onClick={() => handleIconLink("ecosystem.png", "Ecosystem")}
          >
            <li>
              <img src="./icons/ecosystem.png" alt="" />
              <p>Ecosystem</p>
            </li>
          </NavLink>
          <NavLink
            to="/entities"
            onClick={() => handleIconLink("entities2.png", "Entities")}
          >
            <li>
              <img src="./icons/entities2.png" alt="" />
              <p>Entities</p>
            </li>
          </NavLink>
        </ul>
      </Nav>
    </LeftbarWrapper>
  );
};

export default Leftbar;
