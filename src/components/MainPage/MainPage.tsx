import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import PageContent from "./PageContent";

const MainPage = () => {
  //for dropdown menu icons in header initializing react state
  const [icon, setIcon] = React.useState({
    url: "house2.png",
    name: "Home",
  });

  //change actuall icon in dropdown menu with react state
  const handleIconLink = (url: string, name: string) => {
    setIcon((prevState) => ({
      ...prevState,
      url: url,
      name: name,
    }));
  };
  return (
    <BrowserRouter>
      <div className="mainPage">
        <Navbar handleIconLink={handleIconLink} icon={icon} />
        <main>
          <aside>
            <Leftbar icon={icon} handleIconLink={handleIconLink} />
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
