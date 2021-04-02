import * as React from "react";
export interface ErrorPageProps {}

const ErrorPage: React.SFC<ErrorPageProps> = () => {
  return (
    <div>
      <h1>404 Page doesn't found</h1>
    </div>
  );
};

export default ErrorPage;
