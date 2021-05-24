import * as React from "react";
import styled from "styled-components";

export interface PeoplePageProps {}

const WorkspacePage = ({ companyName }) => {
  console.log(companyName);

  return (
    <div>
      <h1>Workspace Page {companyName}</h1>
    </div>
  );
};

export default WorkspacePage;
