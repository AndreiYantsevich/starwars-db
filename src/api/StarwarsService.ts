import axios from "axios";
import {IPeople} from "../store/reducers/types";

const instance = axios.create({
    baseURL: 'https://www.swapi.tech/api'
})

export const StarwarsService = {
    getAllPeople() {
        return instance.get<getAllPeopleResponseType>(`/people/`);
    },
    getPeopleById(id: string | undefined) {
        return instance.get<getPeopleByIdResType>(`/people/${id}`);
    },
    getAllStarships() {
        return instance.get(`/starships/`)
    },
    getStarshipsById(id: number) {
        return instance.get(`/starships/${id}`)
    },
    getAllPlanets() {
        return instance.get(`/planets/`)
    },
    getPlanetsById(id: number) {
        return instance.get(`/planets/${id}`)
    },
}

type getAllPeopleResponseType = {
    count: number
    next: string
    previous: null | string
    results: Array<IPeople>
}
type getPeopleByIdResType = {
    message: string
    result: {
        description: string
        properties: {
            birth_year: string
            created: string
            edited: string
            eye_color: string
            gender: string
            hair_color: string
            height: string
            homeworld: string
            mass: string
            name: string
            skin_color: string
            url: string
        }
        uid: string
        __v: number
        _id: string
    }
}