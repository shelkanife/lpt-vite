import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import UserProvider from "./contexts/user";
import Quizz from "./pages/Quizz";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings/Settings";
import Menu from "./components/Menu";
import Social from "./pages/Social";
import IFrame from "./pages/IFrame";
import Mnemonics from "./pages/Mnemonics";
import ToggleColorMode from "./contexts/theme";
import CollectionTest from "./pages/CollectionTest";
import CollectionQuizz from "./pages/CollentionQuizz";
import NavBar from "./components/NavBar";
import NavBarLoggedIn from "./components/NavBarLoggedIn";

function App() {
  return (
    <ToggleColorMode>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<RequireAuth />}>
              <Route element={<NavBarLoggedIn />}>
                <Route element={<Menu />}>
                  <Route path="/learn">
                    <Route index element={<Learn />} />

                    <Route path="mnemonics">
                      <Route index element={<Mnemonics />} />
                      <Route path="groups"></Route>
                    </Route>
                  </Route>
                  <Route path="/quizz" element={<Quizz />} />
                  <Route path="/social" element={<Social />} />
                  <Route path="/profile">
                    <Route path="settings" element={<Settings />} />
                    <Route path=":displayName" element={<Profile />} />
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route
              path="learn/mnemonics/groups/:group"
              element={<CollectionTest />}
            />
            <Route path="learn/mcg" element={<IFrame />} />
            <Route path="/quizz/:group" element={<CollectionQuizz />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </ToggleColorMode>
  );
}

export default App;
