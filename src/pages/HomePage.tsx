import React, { useEffect, useState, ChangeEvent } from "react";
import styled from "styled-components";
import MainPage from "../components/MainPage/MainPage";
import { useSelector } from "react-redux";
import { IState } from "../reducers";
import { IUsersReducer } from "../reducers/usersReducer";
import { IPhotosReducer } from "../reducers/photosReducer";
import { IPostsReducer } from "../reducers/postsReducer";
import { ICommentsReducer } from "../reducers/commentsReducer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import Pagination from "./HomepageComponents/Pagination";
import HomePost from "./HomepageComponents/HomePost";

export interface HomePageProps {}
//#region styles
const HomepageContainer = styled.div`
  /* height: 100%; */
  padding: 30px 0 0 10px;
`;
const LatestContainer = styled.div`
  border-radius: 10px;
  display: flex;
  width: 90%;
  height: 350px;
  background: white;
  -webkit-box-shadow: 0px 0px 12px -3px #000000;
  box-shadow: 0px 0px 12px -3px #000000;

  .latest-pub-image {
    width: 30%;
    height: 100%;
    background-size: 100% 100%;
    display: flex;
    align-items: flex-end;

    .latest-pub-image-body {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 20px 10px;
      h5 {
        text-align: left;
        height: 50%;
        font-size: 16px;
        color: white;
      }
      .latest-body-content {
        display: flex;
        align-items: center;
        font-size: 13px;
        margin-top: 10px;
        color: lightgray;
        img {
          margin: 0 10px;
        }
      }
    }
  }

  .latest-pub-content {
    display: flex;
    padding: 20px;
    flex-direction: column;
    color: darkblue;
    text-align: left;
    h1 {
      font-weight: bold;
      font-size: 16px;
      margin: 2px;
    }
    h3 {
      color: lightblue;
      font-weight: bold;
      font-size: 13px;
    }

    width: 70%;
    height: 100%;
    ul {
      display: flex;
      flex-direction: column;
      li {
        margin: 3px 0;
      }
    }
  }
  .miniAvatar {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
const Publication = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  text-align: left;
  .publication-img {
    width: 100px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .publication-content {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    h2 {
      font-weight: bold;
      font-size: 16px;
      min-height: 60%;
      max-height: 70%;
      color: darkblue;
      align-items: center;
    }
    .publication-content-body {
      display: flex;
      height: 30%;
      align-items: center;
      font-size: 13px;
      img {
        margin: 10px;
      }
    }
  }
`;
const Workspaces = styled.div`
  width: 68vw;
  height: 350px;
  margin-top: 50px;
  a {
    text-decoration: none;
    color: black;
  }

  h1 {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: left;
  }

  .myslider {
    display: flex;
    align-items: center;
    height: 100%;

    .slick-track {
      display: flex;
    }
    .slick-slide {
      margin: 5px;
    }
    .slider-element {
      -webkit-box-shadow: 0px 0px 9px -3px #000000;
      box-shadow: 0px 3px 9px -3px #000000;
      min-width: 100px;
      height: 250px;
      background: white;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding-bottom: 5px;

      .slider-element-photo {
        width: 100%;
        height: 40%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .slider-element-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 60%;
        text-align: left;
        position: relative;
        span {
          margin-left: 10px;
          font-size: 10px;
          color: gray;
        }
        .slider-content-img {
          position: absolute;
          top: -45px;
          left: 20px;
          width: 110px;
          height: 110px;
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .slider-title {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          h3 {
            font-size: 16px;
            color: darkblue;
            font-weight: bold;
            margin-left: 90px;
          }
        }
        .slider-text {
          display: flex;
          width: 100%;
          height: 50%;
          align-items: flex-end;
          padding: 5px;
          .slider-text-icons {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            p {
              margin: 5px 15px;
            }
          }
        }
      }
    }
  }
`;

const Work = styled.div`
  margin-top: 50px;
  width: 90%;
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
      width: 30%;
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
const WorkElement = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 12px -3px #000000;
  box-shadow: 0px 0px 12px -3px #000000;
  background: #fff;
  padding: 10px 5px 0 15px;
  justify-content: center;
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    background: lightgray;
  }
  h1 {
    font-weight: bold;
    color: darkblue;
    font-size: 20px;
    margin-bottom: 5px;
  }

  .workElement-icons {
    display: flex;
    align-items: center;
    width: 90%;
    font-size: 13px;
    color: gray;
    margin-top: 5px;
    .el {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
    }
    p {
      font-size: 15px;
    }
    img {
      width: 25px;
      height: 25px;
      margin: 0 5px;
    }
    img:nth-child(1) {
      border-radius: 50%;
    }
  }
`;
//#endregion

const HomePage: React.SFC<HomePageProps> = ({
  numberOfId,
  handleCompanyName,
}) => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));
  const { postsList } = useSelector<IState, IPostsReducer>((global) => ({
    ...global.posts,
  }));
  let { commentsList } = useSelector<IState, ICommentsReducer>((global) => ({
    ...global.comments,
  }));
  commentsList = commentsList.slice(0, 300);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: 30,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderElements = usersList.map((item) => {
    return (
      <NavLink
        key={item.id}
        onClick={() => handleCompanyName(item.company.name)}
        to={{
          pathname: `/workspace/${item.id}`,
        }}
      >
        <div className="slider-element">
          <div className="slider-element-photo">
            <img src={photosList?.[item.id]?.url} alt="" />
          </div>
          <div className="slider-element-content">
            <div className="slider-content-img">
              <img src={photosList?.[item.id + 1]?.url} alt="" />
            </div>
            <div className="slider-title">
              <h3>{item.company.name}</h3>
            </div>
            <div className="slider-text">
              <div className="slider-text-icons">
                <img src="./icons/contractlow.png" alt="" />
                <p>Contract</p>
              </div>
              <div className="slider-text-icons">
                <img src="./icons/people.png" alt="" />
                <p>150 users</p>
              </div>
            </div>
            <span>Last update 2 days ago</span>
          </div>
        </div>
      </NavLink>
    );
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = commentsList.slice(indexOfFirstPost, indexOfLastPost);
  const [inputText, setInputText] = useState<string>("");
  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  const paginate = (n) => setCurrentPage(n);
  return (
    <HomepageContainer>
      <LatestContainer>
        <div
          className="latest-pub-image"
          style={{ backgroundImage: `url(${photosList?.[numberOfId]?.url})` }}
        >
          <div className="latest-pub-image-body">
            <h5>{postsList?.[numberOfId]?.title}</h5>
            <div className="latest-body-content">
              <span>7 jan 2020</span>
              <img
                className="miniAvatar"
                src={photosList?.[numberOfId]?.url}
                alt=""
              />
              <p>{usersList?.[numberOfId]?.name}</p>
            </div>
          </div>
        </div>
        <div className="latest-pub-content">
          <h1>Latest publications</h1>
          <ul>
            <li>
              <Publication>
                <div className="publication-img">
                  <img src={photosList?.[3]?.url} alt="" />
                </div>
                <div className="publication-content">
                  <h2>
                    <span>{postsList?.[3]?.title}</span>
                  </h2>
                  <div className="publication-content-body">
                    <span>7 jan 2020</span>
                    <img
                      className="miniAvatar"
                      src={photosList?.[3]?.url}
                      alt=""
                    />
                    <p>{usersList?.[3]?.name}</p>
                  </div>
                </div>
              </Publication>
            </li>
            <li>
              <Publication>
                <div className="publication-img">
                  <img src={photosList?.[4]?.url} alt="" />
                </div>
                <div className="publication-content">
                  <h2>
                    <span>{postsList?.[4]?.title}</span>
                  </h2>
                  <div className="publication-content-body">
                    <span>7 jan 2020</span>
                    <img
                      className="miniAvatar"
                      src={photosList?.[4]?.url}
                      alt=""
                    />
                    <p>{usersList?.[4]?.name}</p>
                  </div>
                </div>
              </Publication>
            </li>
            <li>
              <Publication>
                <div className="publication-img">
                  <img src={photosList?.[5]?.url} alt="" />
                </div>
                <div className="publication-content">
                  <h2>
                    <span>{postsList?.[5]?.title}</span>
                  </h2>
                  <div className="publication-content-body">
                    <span>7 jan 2020</span>
                    <img
                      className="miniAvatar"
                      src={photosList?.[5]?.url}
                      alt=""
                    />
                    <p>{usersList?.[5]?.name}</p>
                  </div>
                </div>
              </Publication>
            </li>
          </ul>
          <h3>See more publications</h3>
        </div>
      </LatestContainer>
      <Workspaces>
        <h1>Workspaces</h1>
        <Slider className="myslider" {...settings}>
          {sliderElements}
        </Slider>
      </Workspaces>
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
              <img src="./icons/search.png" alt="search" />
            </div>
            <div className="work-filter">
              <img src="./icons/ecosystem.png" alt="" />
              <h3>Followed</h3>
              <img src="./icons/arrow-down.png" alt="" />
            </div>
          </div>
        </div>
        <div className="work-container">
          <HomePost
            commentsList={currentPosts}
            photosList={photosList}
            usersList={usersList}
            inputText={inputText}
          />
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={commentsList.length}
          paginate={paginate}
        />
      </Work>
    </HomepageContainer>
  );
};

export default HomePage;
