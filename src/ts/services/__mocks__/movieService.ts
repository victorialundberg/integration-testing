import { IMovie } from "../../models/Movie";

export const movies: IMovie[] = [
  {
    Title: "B",
    imdbID: "idB",
    Type: "typeB",
    Poster: "posterB",
    Year: "yearB",
  },
  {
    Title: "A",
    imdbID: "idA",
    Type: "typeA",
    Poster: "posterA",
    Year: "yearA",
  },
  {
    Title: "F",
    imdbID: "idF",
    Type: "typeF",
    Poster: "posterF",
    Year: "yearF",
  },
  {
    Title: "C",
    imdbID: "idC",
    Type: "typeC",
    Poster: "posterC",
    Year: "yearC",
  },
  {
    Title: "E",
    imdbID: "idE",
    Type: "typE",
    Poster: "posterE",
    Year: "yearE",
  },
  {
    Title: "F",
    imdbID: "idD",
    Type: "typeD",
    Poster: "posterD",
    Year: "yearD",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(movies);
  });
};
