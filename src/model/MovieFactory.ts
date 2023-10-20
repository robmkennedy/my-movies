import { Movie, MovieResponse } from "utils/types";

export default class MovieFactory {

    static buildValue = (jsonValue: string) => {
        return (!jsonValue || jsonValue.toUpperCase() == 'N/A' ? '' : jsonValue);
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

            imdbRating: '',
            tomatoRating: '',
            metacriticRating: ''
        };

        if (Array.isArray(json.Ratings)) {
            json.Ratings.forEach(({ Source, Value }) => {
                switch (Source) {
                    case 'Internet MovieFactory Database':
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