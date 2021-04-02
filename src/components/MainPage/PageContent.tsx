import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../../pages/HomePage";
import AdministrationPage from "../../pages/AdministrationPage";
import EntitiesPage from "../../pages/EntitiesPage";
import ErrorPage from "../../pages/ErrorPage";

export interface PageContentProps {}

const PageContent: React.SFC<PageContentProps> = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/administration" component={AdministrationPage} />
      <Route path="/entities" component={EntitiesPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default PageContent;
