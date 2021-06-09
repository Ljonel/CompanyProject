import React, { useState, ChangeEvent } from "react";
import HomePost from "./HomePost";
import { Pagination } from "antd";
import styled from "styled-components";
import { RiSignalTowerLine } from "react-icons/ri";
import { Select, Descriptions, Upload, Button } from "antd";
const Option = Select;

const Pag = styled(Pagination)`
  text-align: center;
  margin-bottom: 20px;
`;

const Work = styled.div`
  width: 100%;
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
const WorkFilter = styled.div`
  margin: 0 30px 0 10px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid darkblue;
  border-radius: 5px;
  .ant-select {
    min-width: 100px;
    .ant-select-selector {
      border: none;
      background: none;
    }
    .ant-select-focused:focus {
      outline: none;
      border: none;
    }
    .ant-select-open:focus {
      outline: none;
      border: none;
    }
    .ant-select-single:focus {
      outline: none;
      border: none;
    }
  }
`;
const HomePosts = ({ commentsList, photosList, usersList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = commentsList.slice(indexOfFirstPost, indexOfLastPost);

  const [inputText, setInputText] = useState<string>("");
  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
    console.log(text);
  };

  const [followedInPosts, setFollowedInPosts] = useState({
    title: "Followed",
    bool: true,
  });
  const followedHandle = (value) => {
    let f = followedInPosts.bool;
    if (value === "followed") {
      f = true;
      setFollowedInPosts({
        title: "Followed",
        bool: f,
      });
    } else if (value === "my") {
      f = false;
      setFollowedInPosts({ title: "My", bool: f });
    }
  };
  const paginate = (current) => setCurrentPage(current);

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <Work>
      <div className="work-title">
        <h1>Resume your work</h1>
        <div className="work-wrapper">
          <div className="work-input">
            <input
              value={inputText}
              onChange={inputHandle}
              placeholder="Filter by title"
              type="text"
            />
            <img src="../../icons/search.png" alt="search" />
          </div>
          <WorkFilter>
            <RiSignalTowerLine />
            <Select
              id="followedOptions"
              size="small"
              value={followedInPosts.title}
              onChange={followedHandle}
            >
              <Option key="followed">Followed</Option>
              <Option key="my">My</Option>
            </Select>
            {/* <img src="../../icons/ecosystem.png" alt="" />
            <h3>Followed</h3>
            <img src="../../icons/arrow-down.png" alt="" /> */}
          </WorkFilter>
        </div>
      </div>
      <div className="work-container">
        <HomePost
          commentsList={currentPosts}
          photosList={photosList}
          usersList={usersList}
          inputText={inputText}
          followedInPosts={followedInPosts}
        />
        <Pag
          defaultCurrent={0}
          total={300}
          onChange={paginate}
          itemRender={itemRender}
        />
      </div>
    </Work>
  );
};

export default HomePosts;
