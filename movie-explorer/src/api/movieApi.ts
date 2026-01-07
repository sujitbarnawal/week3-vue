import type { Movie } from "@/types/movieType";
import axios from "axios";

const API_KEY = "3f77869330f44184d4acfd7fab369b60";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query = ""): Promise<Movie[]> => {
  try {
    const url = query
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    const res = await axios.get(url);
    return res.data.results;
  } catch (error: any) {
    console.error("API Error:", error.message);
    return [];
  }
};

export const fetchMovieById = async (id: number): Promise<Movie | null> => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return res.data;
  } catch (error: any) {
    console.error("API Error:", error.message);
    return null;
  }
};
