import React from "react";
import People from "../components/people/People";
import Starships from "../components/starships/Starships";
import Planets from "../components/planets/Planets";
import MainPage from "../components/main/MainPage";

export interface IRoute {
    path: string;
    element: React.ComponentType
}

export enum RouteNames {
    MAIN = '/',
    PEOPLE = '/people',
    STARSHIPS = '/starships',
    PLANETS = '/planets'
}

export const routes: IRoute[] = [
    {path: RouteNames.MAIN, element: MainPage},
    {path: RouteNames.PEOPLE, element: People},
    {path: RouteNames.STARSHIPS, element: Starships},
    {path: RouteNames.PLANETS, element: Planets},
]