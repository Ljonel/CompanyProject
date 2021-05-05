import * as React from "react";
import styled from "styled-components";
import MainPage from "../components/MainPage/MainPage";
import { useSelector } from "react-redux";
import { IState } from "../reducers";
import { IUsersReducer } from "../reducers/usersReducer";
import { IPhotosReducer } from "../reducers/photosReducer";
import { IPostsReducer } from "../reducers/postsReducer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export interface HomePageProps {}
//#region styles
const HomepageContainer = styled.div`
  height: 100%;
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
        span {
          margin-left: 10px;
          font-size: 10px;
          color: gray;
        }
        .slider-content-img {
          position: absolute;
          top: 65px;
          left: 20px;
          width: 130px;
          height: 130px;
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
            font-size: 20px;
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

//#endregion

const HomePage: React.SFC<HomePageProps> = ({ numberOfId }) => {
  // console.log(numberOfId);

  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));
  const { postsList } = useSelector<IState, IPostsReducer>((global) => ({
    ...global.posts,
  }));
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
          <div className="slider-element">
            <div className="slider-element-photo">
              <img src={photosList?.[numberOfId]?.url} alt="" />
            </div>
            <div className="slider-element-content">
              <div className="slider-content-img">
                <img src={photosList?.[5]?.url} alt="" />
              </div>
              <div className="slider-title">
                <h3>Client contract</h3>
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

          {
            //
          }
          <div className="slider-element">
            <h3>2</h3>
          </div>
          <div className="slider-element">
            <h3>2</h3>
          </div>
          <div className="slider-element">
            <h3>2</h3>
          </div>
          <div className="slider-element">
            <h3>2</h3>
          </div>
          <div className="slider-element">
            <h3>2</h3>
          </div>
          <div className="slider-element">
            <h3>2</h3>
          </div>
          <div className="slider-element">
            <h3>2</h3>
          </div>
          <div className="slider-element">
            <h3>2</h3>
          </div>
          <div className="slider-element">
            <h3>2</h3>
          </div>
        </Slider>
      </Workspaces>
    </HomepageContainer>
  );
};

export default HomePage;
