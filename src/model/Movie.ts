import Review from "model/Review";
import { MovieResponse, RatingSource } from "utils/types";

export default class Movie {
    found: boolean;
    review?: Review;

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
    ratings: Map<RatingSource, string>
    imdbID: string;

    static buildValue = (jsonValue: string) => {
        return (!jsonValue || jsonValue.toUpperCase() == 'N/A' ? 'VALUE_NOT_FOUND' : jsonValue);
    };

    static buildArray = (jsonValue: string) => {
        const values = jsonValue ? jsonValue.split(', ') : [];
        return values.map((value) => { return Movie.buildValue(value) });
    };

    static buildRatings = (responseRatings: { Source: string, Value: string }[]) => {
        const ratingsMap = new Map<RatingSource, string>();
        if (Array.isArray(responseRatings)) {
            responseRatings.forEach(({ Source, Value }) => {
                switch (Source) {
                    case 'Internet Movie Database':
                        ratingsMap.set(RatingSource.IMDB, Movie.buildValue(Value));
                        break;
                    case 'Rotten Tomatoes':
                        ratingsMap.set(RatingSource.TOMATOES, Movie.buildValue(Value));
                        break;
                    case 'Metacritic':
                        ratingsMap.set(RatingSource.METACRITIC, Movie.buildValue(Value));
                        break;
                }
            });
        }
        return ratingsMap;
    };

    constructor(json: MovieResponse) {
        this.found = (json.Error == null);
        this.review = undefined;

        this.title = Movie.buildValue(json.Title);
        this.year = Movie.buildValue(json.Year);
        this.rated = Movie.buildValue(json.Rated);
        this.released = Movie.buildValue(json.Released);
        this.runtime = Movie.buildValue(json.Runtime);
        this.genre = Movie.buildArray(json.Genre);
        this.director = Movie.buildValue(json.Director);
        this.writers = Movie.buildArray(json.Writer);
        this.actors = Movie.buildArray(json.Actors);
        this.plot = Movie.buildValue(json.Plot);
        this.language = Movie.buildValue(json.Language);
        this.country = Movie.buildValue(json.Country);
        this.awards = Movie.buildValue(json.Awards);
        this.poster = Movie.buildValue(json.Poster);
        this.ratings = Movie.buildRatings(json.Ratings);
        this.imdbID = Movie.buildValue(json.imdbID);
    }
}