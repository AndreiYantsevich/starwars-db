import React from 'react';
import Home from "../pages/home/Home";
import Peoples from "../pages/people/Peoples";
import PeopleIdPage from "../pages/people/PeopleIdPage";
import Starships from "../pages/starships/Starships";
import StarshipIdPage from "../pages/starships/StarshipIdPage";
import Planets from "../pages/planets/Planets";
import PlanetIdPage from "../pages/planets/PlanetIdPage";

export interface IRoute {
    path: string;
    element: React.ComponentType
}

export enum RouteNames {
    HOME = '/',
    PEOPLES = '/people',
    PEOPLE_ID_PAGE = '/people/:id',
    STARSHIPS = '/starships',
    STARSHIP_ID_PAGE = '/starships/:id',
    PLANETS = '/planets',
    PLANET_ID_PAGE = '/planets/:id'
}

export const routes: IRoute[] = [
    {path: RouteNames.HOME, element: Home},
    {path: RouteNames.PEOPLES, element: Peoples},
    {path: RouteNames.PEOPLE_ID_PAGE, element: PeopleIdPage},
    {path: RouteNames.STARSHIPS, element: Starships},
    {path: RouteNames.STARSHIP_ID_PAGE, element: StarshipIdPage},
    {path: RouteNames.PLANETS, element: Planets},
    {path: RouteNames.PLANET_ID_PAGE, element: PlanetIdPage},
]