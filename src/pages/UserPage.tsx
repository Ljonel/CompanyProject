import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { IState } from "../reducers";
import { useSelector } from "react-redux";
import { IPhotosReducer } from "../reducers/photosReducer";
import { IUsersReducer } from "../reducers/usersReducer";
import { ISingleUser } from "../entities/users";
import { IconContext } from "react-icons";
import { FiMessageCircle } from "react-icons/fi";
import { FaFileContract } from "react-icons/fa";
import { RiBriefcase4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

const User = styled.div`
  width: 90%;
  display: flex;
  margin: 30px 0 0 0;
  padding: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px -3px #000000;
  box-shadow: 0px 0px 12px -3px #000000;
  background: white;
  height: 100vh;
  .user-profile {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
    .profile-icons {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        margin: 0 0 0 15px;
        display: flex;
        justify-content: space-evenly;
        i {
          margin-right: 5px;
        }
      }
      .close-icon {
        margin-left: 10px;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        &:hover {
          background: lightblue;
        }
      }
    }
    .profile-datas {
      display: flex;
      width: 100%;
      height: 200px;
      .profile-avatar {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          border-radius: 50%;
          width: 80px;
          height: 80px;
        }
        p {
          margin-top: 15px;
          color: darkblue;
        }
      }
      form {
        width: 80%;
        display: flex;
        height: 100%;
        justify-content: space-between;
        input {
          padding: 5px;
          border-radius: 5px;
          border: 1px solid gray;
          color: gray;
        }
      }
      .profile-name {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: left;
        h3 {
          font-weight: bold;
          color: darkblue;
          font-size: 20px;
        }
        .profile-name-wrapper {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: space-evenly;
        }
      }
      .profile-contact {
        width: 50%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-evenly;
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        .edit-icon {
          text-align: right;
          width: 50%;
          button {
            cursor: pointer;
            font-size: 25px;
            background: none;
            border: none;
          }
        }
        .profile-phone {
          color: darkblue;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          .profile-phone-wrapper {
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
          }
        }
      }
    }
  }

  .user-expertise {
    max-width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: relative;
    p {
      color: gray;
      font-weight: bold;
    }
    h3 {
      color: darkblue;
      font-weight: bold;
      padding: 5px;
      background: lightblue;
      border-radius: 5px;
    }
    .expertise-edit-icon {
      position: absolute;
      top: 0;
      right: 0;
      button {
        cursor: pointer;
        font-size: 25px;
        background: none;
        border: none;
      }
    }
    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .expertise-element {
      max-width: 40%;
      height: 25%;
      display: flex;
      background: blue;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: left;
      position: relative;
    }
    .whitebox {
      width: 50px;
      height: 50px;
      background: white;
    }
  }
`;

const UserPage = ({ numberOfId }) => {
  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));
  const { usersList } = useSelector<IState, IUsersReducer>((global) => ({
    ...global.users,
  }));

  const [formikDatasEnabled, setFormikDatasEnabled] = useState(false);
  const [formikOptionsEnabled, setFormikOptionsEnabled] = useState(false);

  const editUserDatasHandle = () => {
    const disable = formikDatasEnabled;
    setFormikDatasEnabled(!disable);
  };
  const editOptionsHandle = () => {
    const disable = formikOptionsEnabled;
    setFormikOptionsEnabled(!disable);
  };

  const formik = useFormik({
    initialValues: {
      name: usersList[numberOfId]?.name,
      city: usersList[numberOfId]?.address.city,
      phone: usersList[numberOfId]?.phone,
      email: usersList[numberOfId]?.email,
    },
    enableReinitialize: true,
    onSubmit: (values) => {},
  });

  const formikOptions = useFormik({
    initialValues: {
      expertise: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {},
  });

  return (
    <User>
      <div className="user-profile">
        <div className="profile-icons">
          <span>
            <i>
              {" "}
              <FiMessageCircle />
            </i>
            Message
          </span>
          <span>
            <i>
              <FaFileContract />
            </i>
            Create a request
          </span>
          <span>
            <i>
              <RiBriefcase4Line />
            </i>
            Add to a cluster
          </span>
          <i className="close-icon">
            {" "}
            <AiOutlineClose />
          </i>
        </div>
        <div className="profile-datas">
          <div className="profile-avatar">
            <img src={photosList?.[numberOfId]?.url} alt="" />
            <p>See profile</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="profile-name">
              {formikDatasEnabled ? (
                <div className="profile-name-wrapper">
                  <input
                    name="name"
                    value={formik.values.name}
                    type="text"
                    onChange={formik.handleChange}
                  />
                  <input
                    name="city"
                    value={formik.values.city}
                    type="text"
                    onChange={formik.handleChange}
                  />
                </div>
              ) : (
                <div className="profile-name-wrapper">
                  <h3>{formik.values.name}</h3>
                  <p>{formik.values.city}</p>
                </div>
              )}
            </div>
            <div className="profile-contact">
              <div className="edit-icon">
                <button onClick={editUserDatasHandle} type="submit">
                  {" "}
                  <BiEditAlt />
                </button>
              </div>
              <div className="profile-phone">
                {formikDatasEnabled ? (
                  <div className="profile-phone-wrapper">
                    <input
                      name="email"
                      value={formik.values.email}
                      type="text"
                      onChange={formik.handleChange}
                    />
                    <input
                      name="phone"
                      value={formik.values.phone}
                      type="text"
                      onChange={formik.handleChange}
                    />
                  </div>
                ) : (
                  <div className="profile-phone-wrapper">
                    <p>{formik.values.email}</p>
                    <h3>{formik.values.phone}</h3>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        <hr />

        <div className="user-expertise">
          <form onSubmit={formikOptions.handleSubmit}>
            <div className="expertise-edit-icon">
              <button onClick={editOptionsHandle} type="submit">
                <BiEditAlt />
              </button>
            </div>
            {/*  */}
            {/*  */}
            {/*  */}
            <div className="expertise-element">
              <p>Expertise</p>
            </div>
          </form>
        </div>
        <hr />
      </div>
    </User>
  );
};

export default UserPage;
