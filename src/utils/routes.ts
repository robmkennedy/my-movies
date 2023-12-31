import { RouteID, RouteConfig } from 'utils/types';

import MoviePage from 'components/movie/MoviePage/MoviePage';
import AboutPage from 'components/about/AboutPage/AboutPage';
import SearchPage from 'components/search/SearchPage/SearchPage';
import HistoryPage from 'components/history/HistoryPage/HistoryPage';
import RecommendationsPage from 'components/recommendation/RecommendationsPage/RecommendationsPage';

/**
 * Maintain a map of routes used throughout the app. Each route is referenced by the RouteID enum.
 */
const routes = new Map<RouteID, RouteConfig>();

routes.set(RouteID.SEARCH, { path: '/search', component: SearchPage });
routes.set(RouteID.ABOUT, { path: '/about', component: AboutPage });
routes.set(RouteID.MOVIE, { path: '/movie/:imdbID', component: MoviePage });
routes.set(RouteID.HISTORY, { path: '/history', component: HistoryPage });
routes.set(RouteID.RECOMMENDATIONS, { path: '/recommendations', component: RecommendationsPage });

export default routes;