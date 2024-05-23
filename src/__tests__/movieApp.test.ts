import * as functions from "../ts/functions.ts";
import { IMovie } from "../ts/models/Movie";
import { createHtml, displayNoResult, init } from "../ts/movieApp";

describe("main tests", () => {
  let mockedHandleSubmit: jest.SpyInstance<Promise<void>>;
  beforeEach(() => {
    document.body.innerHTML = `
            <form id="searchForm">
                <input type="text" id="searchText" placeholder="Skriv titel här" />
                <button type="submit" id="search">Sök</button>
            </form>
            <div id="movie-container"></div>`;
    mockedHandleSubmit = jest.spyOn(functions, "handleSubmit");
  });
  afterEach(() => {
    mockedHandleSubmit.mockReset();
  });
  it("should call handleSubmit", async () => {
    // Assign
    const form = document.getElementById("searchForm") as HTMLFormElement;
    // Act
    init();

    // Assert
    form.dispatchEvent(new Event("submit"));
    expect(mockedHandleSubmit).toHaveBeenCalled();
  });

  it("should create html", () => {
    // Assign
    const movies: IMovie[] = [
      {
        Title: "TestMovie",
        imdbID: "TestId",
        Type: "TestType",
        Poster: "TestPoster",
        Year: "TestYear",
      },
    ];
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    // Act
    createHtml(movies, container);
    // Assert
    expect(movies).toHaveLength(1);
    expect(document.querySelector("h3")?.innerHTML).toBe(movies[0].Title);
    expect(document.querySelector("img")?.src).toBe(
      `http://localhost/${movies[0].Poster}`
    );
  });

  it("should display no result", () => {
    // Assign
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    // Act
    displayNoResult(container);
    // Assert
    expect(document.querySelector("p")?.innerHTML).toBe(
      "Inga sökresultat att visa"
    );
  });
});
