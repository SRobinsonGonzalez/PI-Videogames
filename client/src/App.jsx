import { Route, Routes, useLocation } from "react-router-dom"
import { Detail, Form, Home, Landing } from "./views"
import NavBar from "./components/NavBar/navBar"
import style from "./App.module.css";
import SearchBar from "./components/SearchBar/searchBar";
import video from "./assets/video/11.mp4"

function App() {
  const location = useLocation()
  return (
    <div className={style.App}>
      <div className={style.searchBar}>
        {location.pathname !== "/" && location.pathname !== "/form"
          && <img
            className={style.img}
            src="../src/assets/img/12.png" />}
        {location.pathname !== "/" && location.pathname !== "/form"
          && <SearchBar />}
      </div>

      {location.pathname !== "/" && location.pathname !== "/form" &&
        <div className={style.videoHome}>
          <video
            className={style.video}
            src={video}
            autoPlay
            muted
            loop>
          </video>
        </div>}



      <div className={style.appContainer}>
        <div className={style.navBar}>
          {location.pathname !== "/" && <NavBar />}
        </div>

        <Routes>
          <Route exact path="/" element={<Landing />} />

          <Route path="/form" element={<Form />} />

          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </div>
    </div>
  )
};

export default App