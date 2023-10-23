import { Movie, MovieResponse } from "utils/types";

/**
 * A class used to parse the response from the OMDB api and build a Movie object that
 * we can use through the app. This allows us to supply any default values we need, in case
 * any parameters are missing. The API returns a successful response, even if the movie
 * is not found. Therefore we use the Error parameter in the response, and set this to the
 * "found" boolean in our Movie object.
 */
export default class MovieFactory {

    static buildValue = (jsonValue: string) => {
        return (!jsonValue || jsonValue.toUpperCase() === 'N/A' ? '' : jsonValue);
    };

    static buildArray = (jsonValue: string) => {
        const values = jsonValue ? jsonValue.split(', ') : [];
        return values.map((value) => { return MovieFactory.buildValue(value) });
    };

    static parseResponse(json: MovieResponse) {

        const movie: Movie = {
            found: (json.Error == null),
            
            title: MovieFactory.buildValue(json.Title),
            year: MovieFactory.buildValue(json.Year),
            rated: MovieFactory.buildValue(json.Rated),
            released: MovieFactory.buildValue(json.Released),
            runtime: MovieFactory.buildValue(json.Runtime),
            genre: MovieFactory.buildArray(json.Genre),
            director: MovieFactory.buildValue(json.Director),
            writers: MovieFactory.buildArray(json.Writer),
            actors: MovieFactory.buildArray(json.Actors),
            plot: MovieFactory.buildValue(json.Plot),
            language: MovieFactory.buildValue(json.Language),
            country: MovieFactory.buildValue(json.Country),
            awards: MovieFactory.buildValue(json.Awards),
            poster: MovieFactory.buildValue(json.Poster),
            imdbID: MovieFactory.buildValue(json.imdbID),

            timeViewed: '',
            imdbRating: '',
            tomatoRating: '',
            metacriticRating: ''
        };

        if (Array.isArray(json.Ratings)) {
            json.Ratings.forEach(({ Source, Value }) => {
                switch (Source) {
                    case 'Internet Movie Database':
                        movie.imdbRating = Value;
                        break;
                    case 'Rotten Tomatoes':
                        movie.tomatoRating = Value;
                        break;
                    case 'Metacritic':
                        movie.metacriticRating = Value;
                        break;
                }
            });
        }
        return movie;
    }
}