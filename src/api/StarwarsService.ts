import axios from "axios";


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const StarwarsService = {
    getAllPeople() {
        return instance.get('people/')
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