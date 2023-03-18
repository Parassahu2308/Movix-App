import axios from "axios";
// import dotenv from "dotenv";
// import token from "../secret";

const BASE_URL = "https://api.themoviedb.org/3";

const TMBD_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;

// dotenv.config();

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  // console.log("p", params);
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err.message);
    return err;
  }
};
