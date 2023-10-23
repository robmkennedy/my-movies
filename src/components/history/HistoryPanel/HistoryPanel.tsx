import { useTranslation } from 'react-i18next';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import HistoryList from 'components/history/HistoryList/HistoryList';
import { useHistoryItemsSelector } from 'hooks/selectorHooks';

/**
 * This panel is used to fetch the list of view history from the local storage.
 * Loading text is displayed to the user as the history is being retrieved from the redux state. 
 * If the history is undefined or empty, we don't treat it as an error condition and just
 * display a message to the user informing them that they need to save movies in their history.
 */
const HistoryPanel = () => {
    const { t } = useTranslation();

    const historyObj = useHistoryItemsSelector();

    let content = <LoadingBox message={t('page.history.loading')} />

    if (!historyObj || Object.keys(historyObj).length === 0) {
        content = <MessageBox message={t('page.history.empty')} />
    }
    else {
        content = <HistoryList history={historyObj} />
    }

    return (
        <section className='rk-history-panel'>
            {content}
        </section>
    );
}

export default HistoryPanel;
