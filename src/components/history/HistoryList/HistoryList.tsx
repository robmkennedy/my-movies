import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector } from 'hooks/selectorHooks';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import HistoryItem from 'components/history/HistoryItem/HistoryItem';
import './HistoryList.scss';

type HistoryListProps = {
    history: Object
}

const HistoryList = ({ history }: HistoryListProps) => {

    let movieArray = [...Object.values(history)];

    let content = (
        <Fragment>
            {movieArray.map((movie, index) => {
                return <HistoryItem movie={movie} key={index} />
            })}
        </Fragment>
    );

    return (
        <div className='rk-history-list'>
            {content}
        </div>
    );
}

export default HistoryList;
