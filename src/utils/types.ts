import Movie from "model/Movie";
import { FunctionComponent } from "react";

/**
 * A string enum used to reference particular route data
 */
export enum RouteID {
    'MOVIE' = 'MOVIE',
    'ABOUT' = 'ABOUT',
    'SEARCH' = 'SEARCH',
    'HISTORY' = 'HISTORY',
    'RECOMMENDATIONS' = 'RECOMMENDATIONS'
};

/**
 * The config to specify a route.
 */
export type RouteConfig = {
    path: string;
    component: FunctionComponent;
};

/**
 * 
 */
export enum RatingSource {
    'IMDB' = 'IMDB',
    'TOMATOES' = 'TOMATOES',
    'METACRITIC' = 'METACRITIC'
}

/**
 * 
 */
export type MovieRating = {
    source: RatingSource;
    value: string;
};

/**
 * 
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
    Error?: string
}

export type LayoutState  = {
    sidePanelOpen: boolean
};

export type MovieState  = {
    searchValue: string
};

export type HistoryState  = {
    historyItems: {
        [index: string]: Movie
    }
};