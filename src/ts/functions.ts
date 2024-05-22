import { IMovie } from "./models/Movie";
import { createHtml, displayNoResult } from "./movieApp";
import { getData } from "./services/movieService";

export const movieSort = (movies: IMovie[], desc: boolean = true) => {
  return movies.sort((a: IMovie, b: IMovie) => {
    if (desc) {
      if (a.Title > b.Title) return 1;
      if (a.Title < b.Title) return -1;

      return 0;
    } else {
      if (a.Title > b.Title) return -1;
      if (a.Title < b.Title) return 1;

      return 0;
    }
  });
};

export let movies: IMovie[] = [];

export async function handleSubmit() {
  let searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;

  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  container.innerHTML = "";

  try {
    movies = await getData(searchText);

    if (movies.length > 0) {
      createHtml(movies, container);
    } else {
      displayNoResult(container);
    }
  } catch {
    displayNoResult(container);
  }
}
