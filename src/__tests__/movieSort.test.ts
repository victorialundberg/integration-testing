import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("main tests for functions", () => {
  it("should by default sort movies in descending order", () => {
    // Assign
    const movies: IMovie[] = [
      {
        Title: "A",
        imdbID: "",
        Type: "",
        Poster: "",
        Year: "",
      },
      {
        Title: "B",
        imdbID: "",
        Type: "",
        Poster: "",
        Year: "",
      },
    ];

    // Act
    const sortedList = movieSort(movies);

    // Assert
    expect(sortedList).toEqual([
      {
        Title: "A",
        imdbID: "",
        Type: "",
        Poster: "",
        Year: "",
      },
      {
        Title: "B",
        imdbID: "",
        Type: "",
        Poster: "",
        Year: "",
      },
    ]);
  });
  it("should sort movies in descending order, if desc is false", () => {
    // Assign
    const movies: IMovie[] = [
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

    // Act
    const sortedList: IMovie[] = movieSort(movies, false);

    // Assert
    expect(sortedList).toEqual([
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
    ]);
  });
  it("should sort the array by descending order if there are movies with the same name", () => {
    // Assign
    const movies: IMovie[] = [
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
      {
        Title: "A",
        imdbID: "",
        Type: "",
        Poster: "",
        Year: "",
      },
    ];

    // Act
    const sortedList: IMovie[] = movieSort(movies);

    // Assert
    expect(sortedList).toEqual([
      {
        Title: "A",
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
      {
        Title: "B",
        imdbID: "",
        Type: "",
        Poster: "",
        Year: "",
      },
    ]);
  });
  it("should sort the array by ascending order if there are movies with the same name", () => {
    // Assign
    const movies: IMovie[] = [
      {
        Title: "A",
        imdbID: "",
        Type: "",
        Poster: "",
        Year: "",
      },
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

    // Act
    const sortedList: IMovie[] = movieSort(movies, false);

    // Assert
    expect(sortedList).toEqual([
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
      {
        Title: "A",
        imdbID: "",
        Type: "",
        Poster: "",
        Year: "",
      },
    ]);
  });
});
