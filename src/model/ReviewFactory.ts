import { Review, ReviewResponse } from "utils/types";

/**
 * A class used to parse the object returned from the local storage into a Review
 * object. This allows us to specify any defaults if any parameters are missing.
 */
export default class ReviewFactory {

    static parseResponse(imdbID: string, response?: ReviewResponse) {

        const review: Review = {
            imdbID: imdbID,
            rating: response ? response.rating : 'average',
            comment: response ? response.comment : ''
        };

        return review;
    }
}