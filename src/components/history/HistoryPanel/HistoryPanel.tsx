import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector } from 'hooks/selectorHooks';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import HistoryItem from 'components/history/HistoryItem/HistoryItem';
import HistoryList from '../HistoryList/HistoryList';

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