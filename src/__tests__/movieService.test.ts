import axios from "axios";
import { getData } from "../ts/services/movieService";
import { movies } from "../ts/services/__mocks__/movieService";
import { IMovie } from "../ts/models/Movie";

describe("Movie service", () => {
  it("should get data", async () => {
    // Assign
    const mockedMovies: IMovie[] = movies;
    const searchText: string = "B";
    const mockedAxios = jest.spyOn(axios, "get");
    mockedAxios.mockResolvedValue({
      data: {
        Search: mockedMovies,
      },
    });
    // Act
    const movieList = await getData(searchText);
    // Assert
    expect(movieList).toHaveLength(6);
    expect(movieList[0].Title).toBe("B");
    expect(mockedAxios).toHaveBeenCalled();
  });

  it("should handle error", async () => {
    // Assign
    const searchText: string = "The Movie";
    const mockedAxios = jest.spyOn(axios, "get");
    mockedAxios.mockRejectedValue({
      message: "Sorry we only have boring titles",
    });

    // Act
    const movieList = await getData(searchText);

    // Assert
    expect(movieList).toHaveLength(0);
    expect(mockedAxios).toHaveBeenCalled();
  });
});
