import React, { useLayoutEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { Home } from '../containers';

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
        </Switch>
    );
}

export default Routes;