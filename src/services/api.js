import axios from "axios";

const API_URL = "http://localhost:5000/palettes/";

export function getAll() {
    return axios.get(API_URL);
}

export function set(palette) {
    return axios.post(API_URL, palette);
}

export function remove(id) {
    return axios.delete(API_URL + id);
}
