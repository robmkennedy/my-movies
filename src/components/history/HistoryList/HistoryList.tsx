import { Fragment } from 'react';
import HistoryItem from 'components/history/HistoryItem/HistoryItem';
import './HistoryList.scss';

type HistoryListProps = {
    history: Object
}

/**
 * A component that generates a list of history items.
 * It uses responsive grid layout to lay out the movies left-to-right, top-to-bottom.
 */
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
