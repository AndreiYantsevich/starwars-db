import React from "react";
import Peoples from "../components/people/Peoples";
import Starships from "../components/starships/Starships";
import Planets from "../components/planets/Planets";
import Home from "../components/home/Home";

export interface IRoute {
    path: string;
    element: any
}

export enum RouteNames {
    MAIN = '/',
    PEOPLE = '/people',
    STARSHIPS = '/starships',
    PLANETS = '/planets'
}

export const routes: IRoute[] = [
    {path: RouteNames.MAIN, element: Home},
    {path: RouteNames.PEOPLE, element: Peoples},
    {path: RouteNames.STARSHIPS, element: Starships},
    {path: RouteNames.PLANETS, element: Planets},
]