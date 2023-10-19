import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector, useSearchValueSelector } from 'hooks/selectorHooks';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import HistoryItem from '../HistoryItem/HistoryItem';
import { Fragment } from 'react';

const HistoryList = () => {

    const { t } = useTranslation();

    const historyObj = useHistoryItemsSelector();

    let content = <LoadingBox message={t('page.history.loading')} />

    if (!historyObj || Object.keys(historyObj).length === 0) {
        content = <MessageBox message={t('page.history.empty')} />
    }
    else {
        let movieArray = [...Object.values(historyObj)];
        content = (
            <Fragment>
                {movieArray.map((movie, index) => {
                    return <HistoryItem movie={movie} key={index} />
                })}
            </Fragment>
        );
    }

    return (
        <section id='historyList'>
            {content}
        </section>
    );
}

export default HistoryList;