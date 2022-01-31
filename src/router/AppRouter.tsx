import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {RouteNames, routes} from "./index";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route key={route.path} path={route.path} element={<route.element/>}/>
            )}
            <Route path='*' element={<Navigate to={RouteNames.MAIN}/>}/>
        </Routes>
    );
};

export default AppRouter;