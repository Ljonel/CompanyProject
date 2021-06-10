import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import InternalCorrComponent from "./UserpageComponents/InternalCorrComponent";
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
import { Select, Descriptions, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import EventEmitter from "events";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const User = styled.div`
  width: 90%;
  display: flex;
  margin: 30px 0 0 0;
  padding: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px -3px #000000;
  box-shadow: 0px 0px 12px -3px #000000;
  background: white;
  .user-profile {
    width: 100%;
    /* min-height: 250px;
    max-height: 250px; */
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
      margin-left: 10px;
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
      /* max-width: 40%; */
      height: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: left;
      position: relative;

      .expertise-actuall {
        width: 100%;
        display: flex;
        justify-content: left;
      }
      .ant-select-selection-item {
        height: 20px;
        line-height: 20px;
        background: lightblue;
        border-radius: 5px;
        color: darkblue;
      }
      .ant-select-selector {
        padding: 5px;
      }
    }
  }

  .panel-information {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-evenly;
    width: 100%;
    min-height: 350px;
    padding: 10px;
    min-height: 550px;
    h1 {
      color: darkblue;
      font-size: 20px;
      font-weight: bold;
    }
    p {
      color: gray;
    }
    h3 {
      color: darkblue;
      font-size: 18px;
    }
  }
  .proposals {
    max-width: 100%;
    table {
      width: 100%;
      height: 200px;
      .table-header {
        font-weight: bold;
      }
    }
    h3 {
      font-weight: bold;
      color: darkblue;
      font-size: 20px;
      margin-left: 15px;
      margin-bottom: 20px;
      text-align: left;
    }
    h1 {
      font-size: 25px;
      font-weight: bold;
      color: darkblue;
      margin: 30px 0px 30px 10px;
      text-align: left;
    }
    h4 {
      font-weight: bold;
      text-align: right;
      color: blue;
      margin-top: 5px;
      padding: 10px 15px;
    }
    button {
      background: none;
      border: none;
      font-size: 25px;
      cursor: pointer;
    }

    .editableRow {
      input {
        max-width: 100px;
        border: 1px solid lightgray;
        border-radius: 5px;
        outline: none;
      }
    }
    .proposals-wrapper {
      width: 100%;
      grid-template-columns: repeat(6, 1fr);
      text-align: center;
      max-width: 100%;

      .proposals-title {
        padding-bottom: 10px;
        border-bottom: 1px solid darkblue;
        margin-bottom: 5px;
      }
      form {
        position: relative;
        display: inline-grid;
        grid-template-columns: repeat(6, 1fr);
        min-width: 100%;
        justify-content: space-evenly;
        input {
          min-width: 120px;
        }

        .ant-select-selector {
          border: none;
          outline: none;
        }
      }
    }
  }

  .internal-reviews {
    max-width: 100%;
    h3 {
      text-align: left;
      color: darkblue;
      font-size: 18px;
      font-weight: bold;
      margin: 15px 0 20px 15px;
    }
    table {
      width: 100%;
      height: 200px;
      .table-header {
        font-weight: bold;
      }
      button {
        font-size: 25px;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
    input {
      max-width: 100px;
      border: 1px solid lightgray;
      border-radius: 5px;
      outline: none;
    }
  }

  .amount {
    max-width: 100%;
    h3 {
      font-weight: bold;
      color: darkblue;
      font-size: 20px;
      text-align: left;
      margin-left: 15px;
      margin-bottom: 20px;
    }
    table {
      width: 100%;
      height: 200px;
      .table-header {
        font-weight: bold;
        color: darkblue;
      }
      td {
        color: darkblue;
      }
    }
  }
`;

const options = [
  "region",
  "person",
  "something",
  "merges",
  "acquisition",
  "border",
  "cross",
  "transaction",
];
const countries = [
  "poland",
  "england",
  "czech republic",
  "spain",
  "turkey",
  "ukraine",
  "iceland",
  "germany",
];
const Option = Select;

const UserPage = ({ numberOfId }) => {
  const { photosList } = useSelector<IState, IPhotosReducer>((global) => ({
    ...global.photos,
  }));
  const { usersList } = useSelector<IState, IUsersReducer>((global) => ({
    ...global.users,
  }));

  const [formikDatasEnabled, setFormikDatasEnabled] = useState(false);
  const [formikOptionsEnabled, setFormikOptionsEnabled] = useState(false);
  const [proposalsEnabled, setProposalsEnabled] = useState(false);
  const [internalEnabled, setInternalEnabled] = useState(false);

  const [internalUsers, setInternalUsers] = useState({
    first: usersList?.[numberOfId]?.name,
    second: usersList?.[numberOfId + 1]?.name,
  });

  const editUserDatasHandle = () => {
    const disable = formikDatasEnabled;
    setFormikDatasEnabled(!disable);
  };
  const editOptionsHandle = () => {
    const disable = formikOptionsEnabled;
    setFormikOptionsEnabled(!disable);
  };
  const editProposalsTable = () => {
    const disable = proposalsEnabled;
    setProposalsEnabled(!disable);
  };
  const editInternalTable = () => {
    const disable = internalEnabled;
    setInternalEnabled(!disable);
  };
  const editInternalUsersHandle = (value, event) => {
    if (event.children.key === "first") {
      setInternalUsers((prevState) => ({
        ...prevState,
        first: value,
      }));
    }
    if (event.children.key === "second") {
      setInternalUsers((prevState) => ({
        ...prevState,
        second: value,
      }));
    }
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
      expertise: ["region"],
      specialties: ["person"],
      admission: ["something", "transaction"],
      countries: ["poland"],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  var now = new Date();

  const formikTable = useFormik({
    initialValues: {
      rowone: {
        name: ["operation"],
        entity: ["Renault"],
        location: ["Poland"],
        expertise: ["#Tax"],
        date: now.toISOString().substr(0, 10),
        firm: ["Racine"],
      },
      rowtwo: {
        name: ["operation"],
        entity: ["Renault"],
        location: ["Poland"],
        expertise: ["#Tax"],
        date: now.toISOString().substr(0, 10),
        firm: ["Racine"],
      },
      rowthree: {
        name: ["operation"],
        entity: ["Renault"],
        location: ["Poland"],
        expertise: ["#Tax"],
        date: now.toISOString().substr(0, 10),
        firm: ["Racine"],
      },
      rowfour: {
        name: ["operation"],
        entity: ["Renault"],
        location: ["Poland"],
        expertise: ["#Tax"],
        date: now.toISOString().substr(0, 10),
        firm: ["Racine"],
      },
      rowfive: {
        name: ["operation"],
        entity: ["Renault"],
        location: ["Poland"],
        expertise: ["#Tax"],
        date: now.toISOString().substr(0, 10),
        firm: ["Racine"],
      },
      rowsix: {
        name: ["operation"],
        entity: ["Renault"],
        location: ["Poland"],
        expertise: ["#Tax"],
        date: now.toISOString().substr(0, 10),
        firm: ["Racine"],
      },
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
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
            <div className="expertise-element">
              <p>Expertise</p>
              {formikOptionsEnabled ? (
                <Descriptions.Item label="Expertise">
                  <Select
                    id="expertise"
                    size="small"
                    mode="multiple"
                    showArrow
                    defaultActiveFirstOption
                    value={formikOptions.values.expertise}
                    onChange={(values) => {
                      formikOptions.setFieldValue("expertise", values);
                    }}
                  >
                    {options.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Descriptions.Item>
              ) : (
                <div className="expertise-actuall">
                  {formikOptions.values.expertise.map((item) => (
                    <h3>{item}</h3>
                  ))}
                </div>
              )}
            </div>
            <div className="expertise-element">
              <p>Expertise</p>
              {formikOptionsEnabled ? (
                <Descriptions.Item label="Specialties">
                  <Select
                    id="specialties"
                    size="small"
                    mode="multiple"
                    showArrow
                    defaultActiveFirstOption
                    value={formikOptions.values.specialties}
                    onChange={(values) => {
                      formikOptions.setFieldValue("specialties", values);
                    }}
                  >
                    {options.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Descriptions.Item>
              ) : (
                <div className="expertise-actuall">
                  {formikOptions.values.specialties.map((item) => (
                    <h3>{item}</h3>
                  ))}
                </div>
              )}
            </div>
            <div className="expertise-element">
              <p>Admission to practice law</p>
              {formikOptionsEnabled ? (
                <Descriptions.Item label="Admission">
                  <Select
                    id="admission"
                    size="small"
                    mode="multiple"
                    showArrow
                    defaultActiveFirstOption
                    value={formikOptions.values.admission}
                    onChange={(values) => {
                      formikOptions.setFieldValue("admission", values);
                    }}
                  >
                    {options.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Descriptions.Item>
              ) : (
                <div className="expertise-actuall">
                  {formikOptions.values.admission.map((item) => (
                    <h3>{item}</h3>
                  ))}
                </div>
              )}
            </div>
            <div className="expertise-element">
              <p>Countries</p>
              {formikOptionsEnabled ? (
                <Descriptions.Item label="Countries">
                  <Select
                    id="countries"
                    size="small"
                    mode="multiple"
                    showArrow
                    defaultActiveFirstOption
                    value={formikOptions.values.countries}
                    onChange={(values) => {
                      formikOptions.setFieldValue("countries", values);
                    }}
                  >
                    {countries.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Descriptions.Item>
              ) : (
                <div className="expertise-actuall">
                  {formikOptions.values.countries.map((item) => (
                    <h3>{item}</h3>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
        <hr />

        <div className="panel-information">
          <h1>Panel information</h1>
          <p>Hourly fee</p>
          <h3>610$/hour (Negociated)</h3>
          <p>Terms & conditions</p>
          <h3>Monthly 10k$ retainer - see with Jenny Smith</h3>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
          <h1>Services & projects</h1>
          <h3>Corporate M&A and international acquisitions</h3>
          <div className="internal-corr">
            <h1>Internal correspondants</h1>
            <InternalCorrComponent
              editInternalUsersHandle={editInternalUsersHandle}
              internalUsers={internalUsers}
              usersList={usersList}
              photosList={photosList}
            />
          </div>
        </div>
        <hr />

        <div className="proposals">
          <h3>Proposals</h3>
          <form onSubmit={formikTable.handleSubmit}>
            <table>
              <tr className="table-header">
                <th>Name</th>
                <th>Entity</th>
                <th>Location</th>
                <th>Expertise</th>
                <th>Date</th>
                <th>Firm</th>
                <button onClick={editProposalsTable} type="submit">
                  <BiEditAlt />
                </button>
              </tr>
              {proposalsEnabled ? (
                <>
                  <tr className="editableRow">
                    <td>
                      <input
                        name="rowone.name"
                        defaultValue={formikTable.values.rowone.name}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowone.entity"
                        defaultValue={formikTable.values.rowone.entity}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="rowone.location"
                        defaultValue="poland"
                        onChange={formikTable.handleChange}
                      >
                        {countries.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        name="rowone.expertise"
                        value={formikTable.values.rowone.expertise}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowone.date"
                        defaultValue={formikTable.values.rowone.date}
                        type="date"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowone.firm"
                        defaultValue={formikTable.values.rowone.firm}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                  </tr>
                  <tr className="editableRow">
                    <td>
                      <input
                        name="rowtwo.name"
                        defaultValue={formikTable.values.rowtwo.name}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowtwo.entity"
                        defaultValue={formikTable.values.rowtwo.entity}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="rowtwo.location"
                        defaultValue={formikTable.values.rowtwo.location}
                        onChange={formikTable.handleChange}
                      >
                        {countries.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        name="rowtwo.expertise"
                        value={formikTable.values.rowtwo.expertise}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowtwo.date"
                        defaultValue={formikTable.values.rowtwo.date}
                        type="date"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowtwo.firm"
                        defaultValue={formikTable.values.rowtwo.firm}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                  </tr>
                  <tr className="editableRow">
                    <td>
                      <input
                        name="rowthree.name"
                        defaultValue={formikTable.values.rowthree.name}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowthree.entity"
                        defaultValue={formikTable.values.rowthree.entity}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="rowthree.location"
                        defaultValue={formikTable.values.rowthree.location}
                        onChange={formikTable.handleChange}
                      >
                        {countries.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        name="rowthree.expertise"
                        value={formikTable.values.rowthree.expertise}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowthree.date"
                        defaultValue={formikTable.values.rowthree.date}
                        type="date"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowthree.firm"
                        defaultValue={formikTable.values.rowthree.firm}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td>{formikTable.values.rowone.name}</td>
                    <td>{formikTable.values.rowone.entity}</td>
                    <td>{formikTable.values.rowone.location}</td>
                    <td>{formikTable.values.rowone.expertise}</td>
                    <td>
                      <input
                        type="date"
                        value={formikTable.values.rowone.date}
                      />
                    </td>
                    <td>{formikTable.values.rowone.firm}</td>
                  </tr>
                  <tr>
                    <td>{formikTable.values.rowtwo.name}</td>
                    <td>{formikTable.values.rowtwo.entity}</td>
                    <td>{formikTable.values.rowtwo.location}</td>
                    <td>{formikTable.values.rowtwo.expertise}</td>
                    <td>
                      <input
                        type="date"
                        value={formikTable.values.rowtwo.date}
                      />
                    </td>
                    <td>{formikTable.values.rowtwo.firm}</td>
                  </tr>
                  <tr>
                    <td>{formikTable.values.rowthree.name}</td>
                    <td>{formikTable.values.rowthree.entity}</td>
                    <td>{formikTable.values.rowthree.location}</td>
                    <td>{formikTable.values.rowthree.expertise}</td>
                    <td>
                      <input
                        type="date"
                        value={formikTable.values.rowthree.date}
                      />
                    </td>
                    <td>{formikTable.values.rowthree.firm}</td>
                  </tr>
                </>
              )}
            </table>
          </form>
          <h4>See more proposals</h4>
        </div>
        <hr />

        <div className="internal-reviews">
          <h3>Internal reviews</h3>
          <form onSubmit={formikTable.handleSubmit}>
            <table>
              <tr className="table-header">
                <th>Name</th>
                <th>Entity</th>
                <th>Location</th>
                <th>Expertise</th>
                <th>Date</th>
                <button onClick={editInternalTable} type="submit">
                  <BiEditAlt />
                </button>
              </tr>
              {internalEnabled ? (
                <>
                  <tr className="editableRow">
                    <td>
                      <input
                        name="rowfour.name"
                        defaultValue={formikTable.values.rowfour.name}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowfour.entity"
                        defaultValue={formikTable.values.rowfour.entity}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="rowfour.location"
                        defaultValue="poland"
                        onChange={formikTable.handleChange}
                      >
                        {countries.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        name="rowfour.expertise"
                        value={formikTable.values.rowfour.expertise}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowfour.date"
                        defaultValue={formikTable.values.rowfour.date}
                        type="date"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                  </tr>
                  <tr className="editableRow">
                    <td>
                      <input
                        name="rowfive.name"
                        defaultValue={formikTable.values.rowfive.name}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowfive.entity"
                        defaultValue={formikTable.values.rowfive.entity}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="rowfive.location"
                        defaultValue="poland"
                        onChange={formikTable.handleChange}
                      >
                        {countries.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        name="rowfive.expertise"
                        value={formikTable.values.rowfive.expertise}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowfive.date"
                        defaultValue={formikTable.values.rowfive.date}
                        type="date"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                  </tr>
                  <tr className="editableRow">
                    <td>
                      <input
                        name="rowsix.name"
                        defaultValue={formikTable.values.rowsix.name}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowsix.entity"
                        defaultValue={formikTable.values.rowsix.entity}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="rowsix.location"
                        defaultValue="poland"
                        onChange={formikTable.handleChange}
                      >
                        {countries.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        name="rowsix.expertise"
                        value={formikTable.values.rowsix.expertise}
                        type="text"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                    <td>
                      <input
                        name="rowsix.date"
                        defaultValue={formikTable.values.rowsix.date}
                        type="date"
                        onChange={formikTable.handleChange}
                      />
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td>{formikTable.values.rowfour.name}</td>
                    <td>{formikTable.values.rowfour.entity}</td>
                    <td>{formikTable.values.rowfour.location}</td>
                    <td>{formikTable.values.rowfour.expertise}</td>
                    <td>
                      <input
                        type="date"
                        value={formikTable.values.rowfour.date}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{formikTable.values.rowfive.name}</td>
                    <td>{formikTable.values.rowfive.entity}</td>
                    <td>{formikTable.values.rowfive.location}</td>
                    <td>{formikTable.values.rowfive.expertise}</td>
                    <td>
                      <input
                        type="date"
                        value={formikTable.values.rowfive.date}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{formikTable.values.rowsix.name}</td>
                    <td>{formikTable.values.rowsix.entity}</td>
                    <td>{formikTable.values.rowsix.location}</td>
                    <td>{formikTable.values.rowsix.expertise}</td>
                    <td>
                      <input
                        type="date"
                        value={formikTable.values.rowsix.date}
                      />
                    </td>
                  </tr>
                </>
              )}
            </table>
          </form>
          <h3>See more Reviews</h3>
        </div>
        <hr />

        <div className="amount">
          <h3>Amount of fees</h3>
          <table>
            <tr className="table-header">
              <th>Year</th>
              <th>Cost center</th>
              <th>Total amount</th>
              <th>Law firm</th>
            </tr>
            <tr>
              <td>2019</td>
              <td>CS 153</td>
              <td>3 500$</td>
              <td>Clifford chance</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>CS 153</td>
              <td>3 500$</td>
              <td>Clifford chance</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>CS 47</td>
              <td>10 500$</td>
              <td>Linklaters</td>
            </tr>
            <tr>
              <td></td>
              <td>CS 153</td>
              <td>18 500$</td>
              <td>Linklaters</td>
            </tr>
            <tr>
              <td></td>
              <td>CS 32</td>
              <td>15 500$</td>
              <td>Linklaters</td>
            </tr>
          </table>
        </div>
      </div>
    </User>
  );
};

export default UserPage;
