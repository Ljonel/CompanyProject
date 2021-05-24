import * as React from "react";
import styled from "styled-components";
import { SiMicrosoft } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiRadioCircleMarked } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiSort } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { RiSignalTowerLine } from "react-icons/ri";
import { IState } from "../reducers";
import { useSelector } from "react-redux";
import { IPhotosReducer } from "../reducers/photosReducer";
import { IUsersReducer } from "../reducers/usersReducer";
export interface EntitiesPageProps {}

const EntitiesContainer = styled.div`
  width: 99%;
  margin: 30px 0 0 0;
  padding: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px -3px #000000;
  box-shadow: 0px 0px 12px -3px #000000;
  background: white;
  h3 {
    color: darkblue;
    font-weight: bold;
  }
  .mosaic {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    .mosaic-title {
      display: flex;
      img {
        margin: 0 5px;
      }
    }
    .mosaic-list {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      background: lightblue;
      border: 1px solid lightgray;
      border-radius: 5px;
      .tile {
        display: flex;
        padding: 5px;
        p {
          margin: 0 5px;
          font-weight: bold;
          color: darkblue;
        }
      }
      .hamburger {
        display: flex;
        align-items: center;
        font-size: 25px;
        padding-left: 10px;
        padding-right: 5px;
        height: 100%;
        background: white;
        color: gray;
      }
    }
  }
  .filters {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    .left-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      color: gray;
      .all {
        max-width: 100px;
        margin-right: 10px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: lightblue;
        border-radius: 5px;
        -webkit-box-shadow: 0px 3px 2px -1px darkblue;
        box-shadow: 0px 3px 2px -1px darkblue;
        p {
          margin: 0 5px;
        }
        .circle {
          font-size: 30px;
          color: darkblue;
        }
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    .search-input {
      display: flex;
      margin-right: 10px;
      align-items: center;
      width: 150px;
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 5px;
      input {
        width: 80%;
        outline: none;
        background: none;
        border: none;
      }
    }
    .followed {
      margin: 0 30px 0 10px;
      width: 140px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border: 2px solid darkblue;
      height: 80%;
      border-radius: 5px;
    }
  }
  .entities {
    max-width: 100%;
    height: 100%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    .tile {
      min-width: 20%;
      height: 130px;
      display: flex;
      border-radius: 5px;
      -webkit-box-shadow: 0px 3px 2px -1px #000000;
      box-shadow: 0px 3px 10px -1px #000000;
      transition: 0.2s;
      &:hover {
        background: #eeeeee;
      }
      .tile-image {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90px;
          height: 100px;
          margin-left: 5px;
          border-radius: 5px;
        }
      }
      .tile-body {
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 100%;
        text-align: left;
        .tile-title {
          width: 100%;
          height: 50%;
          display: flex;
          align-items: flex-end;
          padding-left: 5px;
          h1 {
            color: darkblue;
            font-size: 20px;
            font-weight: bold;
          }
        }
        .tile-text {
          display: flex;

          width: 100%;
          height: 50%;
          padding-left: 5px;
          padding-top: 5px;

          p {
            color: gray;
          }
        }
      }
    }
  }
`;
const EntitiesPage = () => {
  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));
  const { usersList } = useSelector<IState, IUsersReducer>((global) => ({
    ...global.users,
  }));
  const tiles = photosList.slice(0, 32).map((item) => (
    <div className="tile" key={item.id}>
      <div className="tile-image">
        <img src={item.url} alt="" />
      </div>
      <div className="tile-body">
        <div className="tile-title">
          <h1>ABC generic company</h1>
        </div>
        <div className="tile-text">
          <p>kjwaegkjwaengkjwaegn uwgekingewakjkn</p>
        </div>
      </div>
    </div>
  ));

  return (
    <EntitiesContainer>
      <div className="mosaic">
        <div className="mosaic-title">
          <h3>Entities</h3>
          <img src="./icons/cog.png" alt="" />
        </div>
        <div className="mosaic-list">
          <div className="tile">
            <SiMicrosoft />
            <p>Mosaic</p>
          </div>
          <div className="hamburger">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      <div className="filters">
        <div className="left-icons">
          <div className="all">
            <BiRadioCircleMarked className="circle" />
            <p>All</p>
            <RiArrowDownSFill className="circle" />
          </div>
          <HiOutlineDotsHorizontal
            style={{ fontSize: "30px", marginRight: "10px", color: "darkblue" }}
          />
          <hr style={{ height: "80%", display: "inline-block" }}></hr>
          <BiSort style={{ marginLeft: "10px" }} /> <span>Sort</span>
          <FiFilter style={{ margin: "0 0 0 10px" }} />{" "}
          <span style={{ marginRight: "10px" }}>Filters</span>
          <hr style={{ height: "80%", display: "inline-block" }}></hr>
          <AiOutlineArrowsAlt
            style={{ margin: "0 10px 0 10px", fontSize: "20px" }}
          />
          <hr style={{ height: "80%", display: "inline-block" }} />
          <IoMdShareAlt style={{ marginLeft: "10px" }} />
          <span>Share</span>
        </div>
        <div className="search">
          <div className="search-input">
            <input type="text" placeholder="Search ..." />
            <AiOutlineSearch style={{ fontSize: "25px" }} />
          </div>
          <hr style={{ height: "80%", display: "inline-block" }} />
          <div className="followed">
            <RiSignalTowerLine />
            <span>Followed</span>
            <RiArrowDownSFill />
          </div>
        </div>
      </div>
      <div className="entities">{tiles}</div>
    </EntitiesContainer>
  );
};

export default EntitiesPage;
