import axios from "axios";
import {IPeople} from "../store/reducers/types";


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const StarwarsService = {
    getAllPeople() {
        return instance.get<getAllPeopleResponseType>('people/')
    },
    getPeopleById(id: number) {
        return instance.get('people/' + id)
    },
    getAllStarships() {
        return instance.get('starships/')
    },
    getStarshipsById(id: number) {
        return instance.get('starships/' + id)
    },
    getAllPlanets() {
        return instance.get('planets/')
    },
    getPlanetsById(id: number) {
        return instance.get('planets/' + id)
    }
}

type getAllPeopleResponseType = {
    count: number
    next: string,
    previous: null | string
    results: Array<IPeople>
}