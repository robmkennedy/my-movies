### Feature List

After reading the requirement for this application, I derived the following list of features.

**Search**
- Search by movie title.
- Display a list of movies from search results.
- Allow viewing movie details from search results.
- Allow the option to review a movie from the search results.
	
**Recommendations**
- Display a list of movie recommendations.
- Allow viewing movie details from recommendation list.
- Allow the option to review a movie from the recommendations list.
	
**Reviews**
- View a list of my previous reviews.
- Add a new review.
- Update an existing review.
- Delete an existing review.

### The Open Movie Database API

To start building this application, I examined the Open Movie Database API to check the parameters / structures it uses. This decides how features can be implemented. The limitations of the API had the following effects on the feature list.

- The search functionality only returns a single movie. Therefore we are unable to supply a list of possible matching movies to the user. The user must type the exact title match for the movie that they want to view.
- The search feature does not support specifying actors or genre. Therefore the recommendation page cannot display a list of movies. As a substitute, the actors and genres in the users viewing list are counted. These are then displayed in table form, noting the most occurrences. This will help them select future movies. 

### Page layout

- The Search page should include a search field and display information of the matching movie. Due to API limitations, only one matching movie can be displayed.
- The Recommendation page should be dedicated for recommendations features only. Again due to API limitations, any recommendations must be generated from the locally-stored viewing history.
- The Movie page should show detailed information about a movie. It should also allow controls to add / update / delete a user review.
- As there is only a comment and rating per review, a dedicated Review page is unnecessary. The Review input form can be incorporated into the Movie page.
- The About page will contain information about the construction of the application.

### Components

- Each page (Search/ History / Recommendations / About) will have a common header. These can use common PageHeader and PageTitle components.
- The details of a movie are shown in both the Search page and the Movie page. This can be represented using a common MovieDetails component.
- The user star review is used in both the Movie page and the History page. Therefore this can be a common RatingStars component. 
- Any component populated by an async fetch will require loading and error components. These can be also be represented as common compensates.

### Technical Considerations

- Client-side routing is required for a simple page app. React router is one of the most convenient and popular. It also accommodates parameters in routes which allows us to route to a page to edit a single movie (based on the unique id).
- We configure the routes in a utility file. The route data is maintained in a map, that is referenced by enum keys. This allows us to avoid using the same route path string in multiple locations in the code.
- State management could be handled using a built-in React Context. However we will be storing reviews, search results, and viewing history in the data model. Updating these with a single reducer may cause unnecessary rendering. React redux will ensure only the required sections are re-rendered. Also, the latest version of react redux uses the concept of slices which greatly reduces the amount of boilerplate code to write.
- Bootstrap is an excellent library for responsiveness. Therefore we will use the React-bootstrap library, which is built specifically for react. It also provides useful navbar and form components.
- After searching for a movie, the response contains an IMDb ID. This ID is unique and we will use this when for referencing movies / reviews.
- The original idea was to group components into common, controls, pages etc. - based on their type. But as the project progressed, it was more useful to group them by their features. 
- Given that we are using typescript, Typedoc (rather than jsdoc) can be used for documentation. 
- There is no language localization - but the i18n library is used to prevent hard-coding strings throughout the app.


### Local Storage

- To accommodate modifying and persisting the view history, we can use the local storage for this demo. We could directly access the local storage, but a more integrated solution would be to include the viewing history in the redux state. This allows us to perform redux actions on the slice as usual. We can subscribe to events on the store and persist it to local storage whenever it changes. Note to ensure this doesn't happen too quickly, we will throttle the storage function.
- The original thought was to use a Map to maintain the viewing history in local storage. However Maps are not serializable and not recommended for storing in redux either. Therefore we will use a simple JavaScript object which contains the unique IMDb ID as keys.
- Originally the Movie and Review models were classes and instantiated as such. However after research, redux it not able to serialize class instances. Therefore I switched to using typescript types, and created factory functions to build the objects when required.
- To make testing easier, I have included film information in a json. This will be loaded into the store as initial state and used for the viewing history.

### Styling

- Sass is useful CSS pre-compiler. Also Bootstrap provides it's own styling via scss files. The Bootstrap scss file provides default values that we are overriding in the _bootstrap.scss partial.
- For convenience, the theme colors are separated in to the _colors.scss partial. Common app-specific styling is left in the main.scss file. This file is then imported into the app.