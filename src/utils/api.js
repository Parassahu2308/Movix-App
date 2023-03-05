import axios from "axios";
import token from "../secret";

const BASE_URL = "https://api.themoviedb.org/3";

const TMBD_TOKEN = token;

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const data = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err.message);
    return err;
  }
};
