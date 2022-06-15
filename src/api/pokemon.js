import axios from "axios";
import config from "../../config";

const { API_HOST } = config;

export const getPokemonsApi = async (endpointUrl) => {
  try {
    const url = `${API_HOST}/pokemon?offset=0&limit=20`;
    const response = await axios.get(endpointUrl || url);
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
