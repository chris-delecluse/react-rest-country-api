import React from 'react';
import { Route, Routes } from "react-router";
import Countries from "../pages/countries";
import Country from "../pages/country";

const AppRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Countries />} />
            <Route path={"/country/:name"} element={<Country />} />
        </Routes>
    );
};

export default AppRouter;
