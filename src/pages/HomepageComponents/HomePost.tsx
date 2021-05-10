import * as React from "react";
import styled from "styled-components";
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
const HomePost = ({ commentsList, photosList, usersList, inputText }) => {
  //   const userData = usersList.find((user) => user.id === commentsList.id);
  //   const photoData = photosList.find(
  //     (photo) => commentsList.postId === photo.id
  //   );
  console.log(inputText);

  return (
    <>
      {commentsList.map((item) => {
        const userData = usersList.find((user) => item.postId === user.id);
        const photoData = photosList.find(
          (photo) => item.postId === photo.albumId
        );
        if (item.name.toLowerCase().includes(inputText.toLowerCase())) {
          return (
            <WorkElement key={item.id}>
              <div>
                <h1>{item?.name}</h1>
                <p>{item?.body}</p>
                <div className="workElement-icons">
                  <div className="el">
                    <img src={photoData?.url} alt="" />
                    <h3>{userData?.name}</h3>
                  </div>
                  &bull;
                  <div className="el">
                    <img src="./icons/contract.png" alt="" />
                    <p>Client Contract</p>
                  </div>
                  &bull;
                  <div className="el">
                    <p>Updated 3 days ago by {userData?.name} </p>
                  </div>
                </div>
              </div>
            </WorkElement>
          );
        }
      })}
    </>
  );
};

export default HomePost;
