import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { movies } from "../ts/services/__mocks__/movieService";

describe("main tests for functions", () => {
  it("should by default sort movies in descending order, even if same name", () => {
    // Assign
    const movieList: IMovie[] = movies;

    // Act
    const sortedList = movieSort(movieList);

    // Assert
    expect(sortedList).toEqual(
      movieList.sort((a, b) => (a.Title > b.Title ? -1 : 1))
    );
  });
  it("should sort movies in descending order, if desc is false", () => {
    // Assign
    const movieList: IMovie[] = movies;

    // Act
    const sortedList: IMovie[] = movieSort(movieList, false);

    // Assert
    expect(sortedList).toEqual(
      movieList.sort((a, b) => (a.Title < b.Title ? -1 : 1))
    );
  });
  it("should sort the array by ascending order if there are movies with the same name", () => {
    // Assign
    const movieList: IMovie[] = movies;

    // Act
    const sortedList: IMovie[] = movieSort(movieList, false);

    // Assert
    expect(sortedList).toEqual(
      movieList.sort((a, b) => (a.Title < b.Title ? -1 : 1))
    );
  });
});
