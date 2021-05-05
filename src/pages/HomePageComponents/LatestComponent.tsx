import * as React from "react";
import styled from "styled-components";

export interface LatestComponentProps {}

const Publication = styled.div`
  width: 100%;
  height: 100px;
  background: red;
`;

const LatestComponent: React.SFC<LatestComponentProps> = () => {
  return (
    <li>
      <Publication>xd</Publication>
    </li>
  );
};

export default LatestComponent;
