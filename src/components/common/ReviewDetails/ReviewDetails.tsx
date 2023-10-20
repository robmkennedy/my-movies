import { useTranslation } from 'react-i18next';
import './ReviewDetails.scss';
import { ButtonGroup, Button } from 'react-bootstrap';
import { MouseEventHandler } from 'react';
import {  Review } from 'utils/types';

type ReviewDetailsProps = {
    review: Review | undefined;
    onDelete: MouseEventHandler;
    onEdit: MouseEventHandler;
    onAdd: MouseEventHandler;
};

const ReviewDetails = ({ review, onDelete, onEdit, onAdd }: ReviewDetailsProps) => {

    const { t } = useTranslation();
    let content = 'No review';

    if (review) {
        content = 'Review found';
    }

    return (
        <section className='rk-review-details'>
            {content}
            <ButtonGroup>
                {review && <Button onClick={onDelete}>{t('page.movie.review.delete')}</Button>}
                {review && <Button onClick={onEdit}>{t('page.movie.review.edit')}</Button>}
                {!review && <Button onClick={onAdd}>{t('page.movie.review.add')}</Button>}
            </ButtonGroup>
        </section>
    );
}

export default ReviewDetails;

