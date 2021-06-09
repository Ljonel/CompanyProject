import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { IState } from "../reducers";
import { IPhotosReducer } from "../reducers/photosReducer";
import { IUsersReducer } from "../reducers/usersReducer";
import { ICommentsReducer } from "../reducers/commentsReducer";
import { useSelector } from "react-redux";
import { FaProjectDiagram } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Pagination from "./HomepageComponents/Pagination";
import HomePosts from "./HomepageComponents/HomePosts";

export interface PeoplePageProps {}
const Workspaces = styled.div`
  width: 90%;
  height: 100%;
  padding: 30px 0 0 0;
`;
const WorkspaceBaner = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 9px -3px #000000;
  box-shadow: 0px 3px 9px -3px #000000;
  .baner-image {
    width: 100%;
    height: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 350px;
      bottom: 20px;
      position: relative;
    }
  }
  .baner-text {
    width: 100%;
    padding: 10px;
    height: 50%;
    display: flex;
    background: white;
    .baner-icon {
      min-width: 150px;
      max-width: 150px;
      height: 100%;
      img {
        width: 100%;
        border-radius: 15px;

        height: 100%;
      }
    }
    .baner-body {
      height: 100%;
      display: flex;
      padding: 5px 5px 5px 15px;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: left;
      position: relative;
      h1 {
        font-size: 25px;
        font-weight: bold;
        color: darkblue;
      }
      p {
        color: lightgray;
      }
      img {
        position: absolute;
        top: 0;
        right: 0;
        width: 15px;
        height: 15px;
      }
    }
  }
`;

const WorkspaceCards = styled.div`
  width: 100%;
  height: 300px;

  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .card {
    display: flex;
    -webkit-box-shadow: 0px 0px 9px -3px #000000;
    box-shadow: 0px 3px 9px -3px #000000;
    flex-direction: column;
    width: 300px;
    height: 200px;
    padding: 10px;
    text-align: left;
    justify-content: space-evenly;
    background: white;
    position: relative;
    border-radius: 10px;
    h1 {
      font-size: 20px;
      color: darkblue;
    }
    img {
      width: 30px;
      margin: 0;
      height: 30px;
    }
    .card-background {
      position: absolute;
      right: 0;
      width: 50%;
      height: 90%;
      opacity: 0.1;
    }
  }
`;
const Work = styled.div`
  margin-top: 50px;
  text-align: left;
  .work-title {
    display: flex;
    align-items: center;
    height: 30px;
    h1 {
      width: 70%;
      height: 100%;
      font-size: 20px;
      font-weight: bold;
    }
    .work-wrapper {
      display: flex;
      height: 100%;
      justify-content: space-between;
      .work-input {
        display: flex;
        align-items: center;
        height: 100%;
        border: 1px solid lightgray;
        border-radius: 5px;
        background: white;
        input {
          height: 100%;
          background: none;
          outline: none;
          border: none;
        }
        img {
          background: white;
          padding-right: 5px;
        }
      }
      .work-filter {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        h3 {
          font-weight: bold;
          color: darkblue;
          margin: 0px 5px;
        }
      }
    }
  }
`;

const WorkspacePage = ({ companyName }) => {
  console.log(companyName.id);
  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));

  let { commentsList } = useSelector<IState, ICommentsReducer>((global) => ({
    ...global.comments,
  }));
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  const [inputText, setInputText] = useState<string>("");
  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
    console.log(text);
  };

  return (
    <Workspaces>
      <WorkspaceBaner>
        <div className="baner-image">
          <img src="../../icons/workspaces-baner2.jpg" alt="workspaces-baner" />
        </div>
        <div className="baner-text">
          <div className="baner-icon">
            <img src={photosList?.[companyName.id]?.url} alt="" />
          </div>
          <div className="baner-body">
            <h1>{companyName.name}</h1>
            <p>
              Workspace purpose and a bit of context. This much needed
              description is here to remind people where they are, if they are
              new or have poor memory
            </p>
            <img src="../../icons/cog.png" alt="" />
          </div>
        </div>
      </WorkspaceBaner>
      <WorkspaceCards>
        <div className="card">
          <img src="../../icons/entities.png" alt="" />
          <img
            className="card-background"
            src="../../icons/entities.png"
            alt=""
          />
          <div className="card-icon"></div>
          <h1>Explore your entities</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            repellendus mollitia, a tempore quia expedita, sint, aliquam
          </p>
        </div>
        <div className="card">
          <FaProjectDiagram style={{ fontSize: "30px", color: "darkblue" }} />
          <FaProjectDiagram className="card-background" />
          <div className="card-icon"></div>
          <h1>Explore your entities</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            repellendus mollitia, a tempore quia expedita, sint, aliquam
          </p>
        </div>
        <div className="card">
          <FaCalendarAlt style={{ fontSize: "30px", color: "darkblue" }} />
          <FaCalendarAlt className="card-background" />
          <div className="card-icon"></div>
          <h1>Explore your entities</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            repellendus mollitia, a tempore quia expedita, sint, aliquam
          </p>
        </div>
      </WorkspaceCards>
      <Work>
        <HomePosts
          commentsList={commentsList}
          usersList={usersList}
          photosList={photosList}
        />
      </Work>
    </Workspaces>
  );
};

export default WorkspacePage;
