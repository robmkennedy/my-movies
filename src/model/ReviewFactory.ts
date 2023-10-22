import { Review, ReviewResponse } from "utils/types";

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