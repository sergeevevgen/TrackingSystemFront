import { Route, Routes } from "react-router-dom";
import { links } from "@type/links";
import React from "react";

export const Router: React.FunctionComponent = () => {
    const routes = links.map((item) => {
        return <Route key={item.title} path={item.link} element={item.element} />;
    });

  return <Routes>{routes}</Routes>;
};