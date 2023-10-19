import { BrowserRouter } from 'react-router-dom';
import Header from 'components/layout/Header/Header';
import MainPanel from 'components/layout/MainPanel/MainPanel';
import store from 'state/store';
import { Provider } from 'react-redux';


const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div id='app'>
                    <Header />
                    <MainPanel />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
