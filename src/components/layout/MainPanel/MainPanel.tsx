import { Navigate, Route, Routes } from 'react-router-dom';
import routes from 'utils/routes';

/**
 * The MainPanel is the main area of the application displayed beneath the header. 
 * Every time the route changes, a corresponding Page is loaded into this panel
 * The available routes and their Component pages are listed in the routes utility.
 * The final route will be used to replace any invalid url paths that the user may enter.
 * It defaults to the first route in the array (in this case - the home page)
 * @returns 
 */
const MainPanel = () => {

    // Build an array of the route config objects. We are not concerned with RouteType here
    const routeArray = [ ...routes.values() ];

    // Construct routes for all specified route configs
    const routeMarkup = routeArray.map(( {path, component: Component}, index) => {
        return <Route path={path} element={<Component />} key={index}></Route>
    });

    return (
        <main id='mainPanel'>
            <Routes>
                {routeMarkup}
                <Route path="*" element={<Navigate to={routeArray[0].path} replace />} />
            </Routes>
        </main>
    );
}

export default MainPanel;
