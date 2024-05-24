import { handleSubmit } from "../ts/functions";
import * as movieServiceModule from "../ts/services/movieService";
import * as movieAppModule from "../ts/movieApp";
import { movies } from "../ts/services/__mocks__/movieService";
import { IMovie } from "../ts/models/Movie";

describe("handleSubmit", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>
    `;
    const searchTextElement = document.getElementById(
      "searchText"
    ) as HTMLInputElement;
    searchTextElement.value = "test";
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should call createHtml when movies are found", async () => {
    // Assign
    const mockedMovies: IMovie[] = movies;
    const mockedGetData = jest
      .spyOn(movieServiceModule, "getData")
      .mockResolvedValue(mockedMovies);
    const mockedCreateHtml = jest.spyOn(movieAppModule, "createHtml");

    const container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    // Act
    await handleSubmit();

    // Assert
    expect(mockedCreateHtml).toHaveBeenCalledWith(mockedMovies, container);
    expect(mockedGetData).toHaveBeenCalledTimes(1);
  });

  it("should call displayNoResult when no movies are found", async () => {
    // Assign
    const mockedGetData = jest
      .spyOn(movieServiceModule, "getData")
      .mockResolvedValue([]);
    const displayNoResultSpy = jest.spyOn(movieAppModule, "displayNoResult");

    const container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    // Act
    await handleSubmit();

    // Assert
    expect(displayNoResultSpy).toHaveBeenCalledWith(container);
    expect(mockedGetData).toHaveBeenCalledTimes(1);
  });

  it("should call displayNoResult when getData throws an error", async () => {
    // Assign
    const mockedGetData = jest
      .spyOn(movieServiceModule, "getData")
      .mockRejectedValue(new Error("Error"));
    const mockedDisplayNoResult = jest.spyOn(movieAppModule, "displayNoResult");

    const container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    // Act
    await handleSubmit();

    // Assert
    expect(mockedDisplayNoResult).toHaveBeenCalledWith(container);
    expect(mockedGetData).toHaveBeenCalledTimes(1);
  });
});
