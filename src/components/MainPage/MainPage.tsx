import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import PageContent from "./PageContent";
import { useDispatch } from "react-redux";
import { getUsers } from "../../actions/usersActions";
import { getPhotos } from "../../actions/photosActions";
import { getPosts } from "../../actions/postsActions";
import { getComments } from "../../actions/commentsActions";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { IPostsReducer } from "../../reducers/postsReducer";
import { ICommentsReducer } from "../../reducers/commentsReducer";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;

const numberOfId: number = 0;
//Math.floor(Math.random() * 10);
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
    dispatch<GetComments>(getComments());
  }, []);

  return (
    <BrowserRouter>
      <div className="mainPage">
        <Navbar
          handleIconLink={handleIconLink}
          icon={icon}
          numberOfId={numberOfId}
        />
        <main>
          <aside>
            <Leftbar handleIconLink={handleIconLink} numberOfId={numberOfId} />
          </aside>
          <section>
            <PageContent numberOfId={numberOfId} />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default MainPage;
