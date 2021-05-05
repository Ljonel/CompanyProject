import * as React from "react";
import styled from "styled-components";
import MainPage from "../components/MainPage/MainPage";
import { useSelector } from "react-redux";
import { IState } from "../reducers";
import { IUsersReducer } from "../reducers/usersReducer";
import { IPhotosReducer } from "../reducers/photosReducer";
import { IPostsReducer } from "../reducers/postsReducer";
import LatestComponent from "./HomePageComponents/LatestComponent";
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

//#endregion

//

const HomePage: React.SFC<HomePageProps> = ({ numberOfId }) => {
  console.log(numberOfId);

  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));
  const { postsList } = useSelector<IState, IPostsReducer>((global) => ({
    ...global.posts,
  }));

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
    </HomepageContainer>
  );
};

export default HomePage;
