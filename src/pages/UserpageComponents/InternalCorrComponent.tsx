import * as React from "react";
import styled from "styled-components";
import { FiMessageCircle } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { Select, Descriptions, Upload, Button, Table, Tag, Space } from "antd";
const Option = Select;
const InternalUsers = styled.div`
  width: 100%;
`;
const InternalUser = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  margin: 5px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #d7dfff;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .user-datas {
    display: flex;
    width: 70%;
    align-items: center;
    text-align: left;
    .ant-select {
      width: 50%;
      margin-left: 10px;
      .ant-select-selector {
        background: none;
        border: none;
      }
      .ant-select-arrow {
        display: none;
      }
    }
    h3 {
      font-size: 20px;
      margin-left: 20px;
      font-weight: bold;
    }
  }
  .icons {
    width: 30%;
    display: flex;
    height: 100%;
    font-size: 25px;
    align-items: center;
    justify-content: space-evenly;
    p {
      font-size: 20px;
    }
  }
`;
const InternalCorrComponent = ({
  usersList,
  photosList,
  editInternalUsersHandle,
  internalUsers,
}) => {
  let i;
  let x;
  usersList.find((item) =>
    item.name === internalUsers.first ? (i = item.id) : null
  );
  usersList.find((item) =>
    item.name === internalUsers.second ? (x = item.id) : null
  );

  return (
    <InternalUsers>
      <InternalUser className="datas">
        <div className="user-datas">
          <img src={photosList?.[i - 1]?.url} alt="" />

          <Select
            value={internalUsers.first}
            onChange={editInternalUsersHandle}
          >
            {usersList.map((item) => (
              <Option key={item.name}>
                <h3 key="first">{item.name}</h3>
              </Option>
            ))}
          </Select>
        </div>
        <div className="icons">
          <FiMessageCircle />
          <p>Message</p>
          <BsPeople />
          <p>Profile</p>
        </div>
      </InternalUser>
      <InternalUser className="datas">
        <div className="user-datas">
          <img src={photosList?.[x - 1]?.url} alt="" />
          <Select
            value={internalUsers.second}
            onChange={editInternalUsersHandle}
          >
            {usersList.map((item) => (
              <Option key={item.name}>
                <h3 key="second">{item.name}</h3>
              </Option>
            ))}
          </Select>
        </div>
        <div className="icons">
          <FiMessageCircle />
          <p>Message</p>
          <BsPeople />
          <p>Profile</p>
        </div>
      </InternalUser>
    </InternalUsers>
  );
};

export default InternalCorrComponent;
