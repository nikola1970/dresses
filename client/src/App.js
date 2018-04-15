import React from 'react';
import { Switch, Route } from "react-router-dom";
import ROUTES from "./constants/routes";

import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import DressList from "./components/DressList/DressList";
import DressSingle from "./components/DressSingle/DressSingle";
import Categories from "./components/Categories/Categories";

import Dashboard from "./components/Admin/Dashboard";
import Login from "./components/Login/Login";

import NotFound from "./components/_common/NotFound";
import Header from "./components/_common/Header";
import Footer from "./components/_common/Footer";

const App = props => (
    <div className="main-layout">
        <Header />
        <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.CONTACT} component={Contact} />
            <Route exact path={ROUTES.CATEGORIES} component={Categories} />
            <Route exact path={ROUTES.CATEGORY} component={DressList} />
            <Route exact path={ROUTES.DRESS} component={DressSingle} />

            {/*admin routes*/}
            <Route exact path={ROUTES.ADMIN} component={Dashboard} />
            <Route exact path={ROUTES.LOGIN} component={Login} />

            <Route component={NotFound} />
        </Switch>
        <Footer />
    </div>
);

export default App;
