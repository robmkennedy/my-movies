import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector, useReviewItemsSelector, useSearchValueSelector } from 'hooks/selectorHooks';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import { Button } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useAppDispatch } from 'hooks/stateHooks';
import { addedToHistory, deletedFromHistory, updatedInHistory } from 'state/slices/historySlice';

import './PageHeader.scss';
import { Movie } from 'utils/types';
import { deletedFromReviews } from 'state/slices/reviewSlice';
import { ReactComponentElement, ReactNode } from 'react';

type PageHeaderProps = {
    children: ReactNode;
};

const PageHeader = ({ children }: PageHeaderProps) => {

     return (
        <section className='rk-page-header mt-lg-4 mb-4 mb-lg-5'>
            {children}
        </section>
    );
}

export default PageHeader;

