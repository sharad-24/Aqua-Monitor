import React, { useLayoutEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { Home, Choice, User, Statics, Tips } from '../containers';

function Routes() {
    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/choice">
                <Choice />
            </Route>
            <Route exact path="/user">
                <User />
            </Route>
            <Route exact path="/statics">
                <Statics />
            </Route>
            <Route exact path="/tips">
                <Tips />
            </Route>
        </Switch>
    );
}

export default Routes;