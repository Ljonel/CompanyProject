import * as React from "react";
import styled from "styled-components";

export interface HomePageProps {}
//#region styles
const HomepageContainer = styled.div`
  height: 100%;
  padding: 30px 0 0 10px;
`;
const LatestContainer = styled.div`
  border-radius: 10px;
  width: 90%;
  height: 300px;
  background: white;
  -webkit-box-shadow: 0px 0px 12px -3px #000000;
  box-shadow: 0px 0px 12px -3px #000000;
`;

//#endregion
const HomePage: React.SFC<HomePageProps> = () => {
  return (
    <HomepageContainer>
      <LatestContainer>
        <div className="latest-pub-image"></div>
        <div className="latest-pub-content"></div>
      </LatestContainer>
    </HomepageContainer>
  );
};

export default HomePage;
