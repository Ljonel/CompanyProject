import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import PageContent from "./PageContent";

const MainPage = () => {
  return (
    <BrowserRouter>
      <div className="mainPage">
        <Navbar />
        <main>
          <aside>
            <Leftbar />
          </aside>
          <section>
            <PageContent />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default MainPage;
