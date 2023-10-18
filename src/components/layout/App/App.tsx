import { BrowserRouter } from 'react-router-dom';
import Header from 'components/layout/Header/Header';
import MainPanel from 'components/layout/MainPanel/MainPanel';

const App = () => {

    return (
        <BrowserRouter>
            <div id='app'>
                <Header />
                <MainPanel />
            </div>
        </BrowserRouter>
    );
}

export default App;
