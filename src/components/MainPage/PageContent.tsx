import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../../pages/HomePage";
import AdministrationPage from "../../pages/AdministrationPage";
import EcosystemPage from "../../pages/EcosystemPage";
import PublicationsPage from "../../pages/PublicationsPage";
import EntitiesPage from "../../pages/EntitiesPage";
import PeoplePage from "../../pages/PeoplePage";
import ErrorPage from "../../pages/ErrorPage";
import UserPage from "../../pages/UserPage";
import Workspace from "../../pages/Workspace";

export interface PageContentProps {}

const PageContent = ({ numberOfId, handleCompanyName }) => {
  const [companyName, setCompanyName] = React.useState({
    name: "",
    id: 0,
  });
  handleCompanyName = (name: string, id: number) => {
    setCompanyName(() => ({
      name: name,
      id: id,
    }));
  };
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={() => (
          <HomePage
            numberOfId={numberOfId}
            handleCompanyName={handleCompanyName}
          />
        )}
      />
      <Route path="/administration" component={AdministrationPage} />
      <Route path="/publications" component={PublicationsPage} />
      <Route path="/ecosystem" component={EcosystemPage} />
      <Route
        path="/entities"
        component={() => <EntitiesPage numberOfId={numberOfId} />}
      />
      <Route path="/people" component={PeoplePage} />
      <Route
        path="/workspaces"
        component={() => <Workspace companyName={companyName} />}
      />
      <Route
        path="/user"
        component={() => <UserPage numberOfId={numberOfId} />}
      />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default PageContent;
