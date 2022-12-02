import axios from "axios";

export const getPaletaRequest = async () =>
    await axios.get("http://localhost:5000/palettes");

export const createPaletaRequest = async (paleta) =>
    await axios.post("http://localhost:5000/palettes", paleta);

export const deletePaletaRequest = async (id) =>
    await axios.delete(`http://localhost:5000/palettes/${id}`);
