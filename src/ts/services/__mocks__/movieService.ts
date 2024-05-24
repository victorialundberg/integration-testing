import { IMovie } from "../../models/Movie";

export const movies: IMovie[] = [
  {
    Title: "B",
    imdbID: "",
    Type: "",
    Poster: "",
    Year: "",
  },
  {
    Title: "A",
    imdbID: "",
    Type: "",
    Poster: "",
    Year: "",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(movies);
  });
};
