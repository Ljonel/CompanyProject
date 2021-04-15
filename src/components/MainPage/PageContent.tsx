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

export interface PageContentProps {}

const PageContent: React.SFC<PageContentProps> = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/administration" component={AdministrationPage} />
      <Route path="/publications" component={PublicationsPage} />
      <Route path="/ecosystem" component={EcosystemPage} />
      <Route path="/entities" component={EntitiesPage} />
      <Route path="/people" component={PeoplePage} />
      <Route path="/user" component={UserPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default PageContent;
