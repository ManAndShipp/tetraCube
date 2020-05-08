import React, { useState, useContext, useEffect } from 'react';
import { Ctx } from './Store';
import SideBar from "./components/SideBar/SideBar";
import MainMenu from "./components/MainMenu/MainMenu";
// import authenticationService from './services/authentication.service';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import rAPService from './services/requestsApi.service';
import LogInImage from './pages/HomePage/LogInImage/LogInImage';
import authenticationService from './services/authentication.service';
import commonFunctions from './services/commonFunctions.service';

function App() {
  const { store, setUser } = useContext(Ctx);
  const [activeMobileBurger, setActiveMobileBurger] = useState(false);

  useEffect(() => {
    if (
      Object.keys(store.user).length === 0 &&
      localStorage.getItem("baseCode")
    ) {
      const commonFuncs = new commonFunctions();
      const apiUrl = commonFuncs.getApiUrl();
      const auth = new authenticationService({ apiUrl });
      auth.getUserData(localStorage.getItem("baseCode")).then(el => {
        if (el.status) {
          if (el.data.allowedCities) {
            setUser(el.data.user);
          }
        } else auth.logout();
      });
    }
  });

  if (!localStorage.getItem("baseCode"))
    return (
      <div className="App containerApp">
        <SideBar></SideBar>
        <MainMenu></MainMenu>
        <LogInImage />
      </div>
    );

  return (
    <div className="App containerApp">
      <SideBar />
      <MainMenu
        activeBurger={activeMobileBurger}
        setActiveBurger={setActiveMobileBurger}
      ></MainMenu>
      <div className="containerContent">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
