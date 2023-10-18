import { FunctionComponent } from "react";

/**
 * A string enum used to reference particular route data
 */
export enum RouteType {
    'HOME' = 'HOME',
    'RECOMMENDATIONS' = 'RECOMMENDATIONS',
    'REVIEW_LIST' = 'REVIEW_LIST',
    'REVIEW_EDIT' = 'REVIEW_EDIT'
};

/**
 * The type to specify a route.
 */
export type RouteConfig = {
    path: string;
    component: FunctionComponent;
};