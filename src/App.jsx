import { ProjectPage } from "./components/export-components";
import ScrolltoTop from "./components/ScrolltoTop.jsx";

import { Layout, Default } from "./containers/export-containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  BuggyWork,
  BuggyDesc,
  ChurchWork,
  ChurchDesc,
  SkyWindWork,
  SkywindDesc,
  TicTacToeWork,
  TodoWork,
  ProductivityDesc,
  ProductivityWork,
  TictactoeDesc,
  DatafyWork,
  DatafyDesc,
  TodoDesc,
} from "./components/projectpage/imports";

function App() {
  return (
    <BrowserRouter>
      <ScrolltoTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Default />} />
          <Route
            path="buggybugtracker"
            element={
              <ProjectPage
                projectTitle={"Buggy Bug Tracker"}
                projectImg={BuggyWork}
                projectCode={"https://github.com/bfasc/buggy"}
                description={BuggyDesc}
              />
            }
          />
          <Route
            path="datafy"
            element={
              <ProjectPage
                projectTitle={"Datafy"}
                projectImg={DatafyWork}
                projectCode={"https://github.com/DevTyler62/Spotify_Client"}
                description={DatafyDesc}
              />
            }
          />
          <Route
            path="skywind"
            element={
              <ProjectPage
                projectTitle={"Skywind"}
                projectImg={SkyWindWork}
                projectCode={
                  "https://github.com/DevTyler62/skyWind-weather-app-js"
                }
                description={SkywindDesc}
              />
            }
          />
          <Route
            path="tictactoe"
            element={
              <ProjectPage
                projectTitle={"Tic Tac Toe"}
                projectImg={TicTacToeWork}
                projectCode={"https://github.com/DevTyler62/tic-tac-toe"}
                description={TictactoeDesc}
              />
            }
          />
          {/* <Route
            path="churchsite"
            element={
              <ProjectPage
                projectTitle={"Church Website"}
                projectImg={ChurchWork}
                projectCode={"https://github.com/DevTyler62/new-church-website"}
                description={ChurchDesc}
              />
            }
          /> */}
          <Route
            path="todolist"
            element={
              <ProjectPage
                projectTitle={"Todo List"}
                projectImg={TodoWork}
                projectCode={"https://github.com/DevTyler62/React-Todo"}
                description={TodoDesc}
              />
            }
          />
          <Route
            path="productivity"
            element={
              <ProjectPage
                projectTitle={"Productivity SaaS"}
                projectImg={ProductivityWork}
                projectCode={"https://github.com/DevTyler62/Productivity_SaaS"}
                description={ProductivityDesc}
              />
            }
          />
          {/* <Route
            path="workinprogress"
            element={
              <ProjectPage
                projectTitle={"More projects are in the works."}
                projectImg={""}
                projectCode={""}
                description={""}
              />
            }
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
