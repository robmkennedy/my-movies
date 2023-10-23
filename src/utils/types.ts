import { FunctionComponent } from "react";

/**
 * A string enum used to reference particular route data.
 * Using this helps to prevent hard-coding route names throughout the app.
 */
export enum RouteID {
    'MOVIE' = 'MOVIE',
    'ABOUT' = 'ABOUT',
    'SEARCH' = 'SEARCH',
    'HISTORY' = 'HISTORY',
    'RECOMMENDATIONS' = 'RECOMMENDATIONS'
};

/**
 * A type to config the data that a route needs.
 * In this case, the component will be the appropriate page (Search, About etc.)
 */
export type RouteConfig = {
    path: string;
    component: FunctionComponent;
};

/**
 * Represents a movie object. Most of the data comes from the OMDB API. 
 * To simplify storing the info in local storage, the api response will be parsed 
 * and split into separate strings (e.g. separate ratings).
 */
export type Movie = {
    found: boolean;

    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string[];
    director: string;
    writers: string[];
    actors: string[];
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    timeViewed: string
    imdbRating: string;
    tomatoRating: string;
    metacriticRating: string;
    imdbID: string;
}

/**
 * Represents the movie data returned from the API.
 */
export type MovieResponse = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string, Value: string }[],
    imdbID: string;
    Error?: string;
}

/**
 * Represents the review object to be stored in local storage.
 * imdbID is the unique id returned from the API.
 */
export type Review = {
    imdbID: string;
    rating: string;
    comment: string;
}

/**
 * Represents the review data that the user creates. This is
 * constructed from the input form.
 */
export type ReviewResponse = {
    rating: string;
    comment: string;
}

/**
 * Represents the search string that the user types on the search page.
 * This is kept in state so that the search panel can separately react and initiate
 * the API call to the OMDB.
 */
export type MovieState = {
    searchValue: string;
};

/**
 * Represents the data stored in redux for handling the layout of the app.
 * For a simple app like this, only a boolean for the sidebar is required.
 */
export type LayoutState = {
    sidePanelOpen: boolean
};

/**
 * Represents the state of the viewing history that is stored in redux.
 * The keys of the object represent the unique id of the movie.
 * This is automatically persisted to the local storage.
 */
export type HistoryState = {
    historyItems: {
        [index: string]: Movie
    }
};

/**
 * Represents the state of the review items that are stored in redux.
 * The keys represent the unique id of the movie that the review is for.
 * Similar to viewing history, this is automatically persisted to the local storage.
 */
export type ReviewState = {
    reviewItems: {
        [index: string]: Review
    }
};

/**
 * Represents the state of the about information that is stored in redux.
 * The entire markdown file is parsed as a single string. Although it does not change,
 * for convenience it can be read by RTK Query.
 */
export type AboutState = {
    content: string
};