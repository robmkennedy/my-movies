import { RouteType, RouteConfig } from 'utils/types';
import HomePage from 'components/pages/HomePage/HomePage';
import ReviewEditPage from 'components/pages/ReviewEditPage/ReviewEditPage';
import ReviewListPage from 'components/pages/ReviewListPage/ReviewListPage';
import RecommendationsPage from 'components/pages/RecommendationsPage/RecommendationsPage';

const routes = new Map<RouteType, RouteConfig>();

routes.set(RouteType.HOME, { path: '/home', component: HomePage });
routes.set(RouteType.REVIEW_EDIT, { path: '/reviews', component: ReviewListPage });
routes.set(RouteType.REVIEW_LIST, { path: '/reviews', component: ReviewEditPage });
routes.set(RouteType.RECOMMENDATIONS, { path: '/recommendations', component: RecommendationsPage });

export default routes;