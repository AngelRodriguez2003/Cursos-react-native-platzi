import axios from "axios";
import config from "../../config";

const { API_HOST } = config;

export const getPokemonsApi = async () => {
  try {
    const url = `${API_HOST}/pokemon?limit=20$offset=0`;
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
