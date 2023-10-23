import { Fragment, MouseEventHandler } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ButtonGroup from 'components/common/ButtonGroup/ButtonGroup';
import RatingStars from 'components/common/RatingStars/RatingStars';
import { Review } from 'utils/types';

type ReviewDetailsProps = {
    review: Review | undefined;
    onAdd: MouseEventHandler;
    onEdit: MouseEventHandler;
    onDelete: MouseEventHandler;
};

/**
 * A component that displays the rating and comment of a review. It provides Delete and Edit
 * options for the review. The rating is represented by the RatingStars component.
 */
const ReviewDetails = ({ review, onDelete, onEdit, onAdd }: ReviewDetailsProps) => {
    const { t } = useTranslation();

    let infoContent = null;
    let buttonContent = null;

    if (!review) {
        infoContent = t('page.movie.review.none');
        buttonContent = <Button variant='outline-primary' onClick={onAdd}>{t('page.movie.review.add')}</Button>;
    }
    else {
        infoContent = (
            <Fragment>
                <RatingStars rating={review.rating} />
                <p>{review.comment}</p>
            </Fragment>
        );
        buttonContent = (
            <Fragment>
                <Button variant='outline-danger' onClick={onDelete}>{t('page.movie.review.delete')}</Button>
                <Button variant='outline-primary' onClick={onEdit}>{t('page.movie.review.edit')}</Button>
            </Fragment>
        );
    }

    return (
        <section className='rk-review-details'>
            <Row>
                <Col lg={8}>
                    {infoContent}
                </Col>
                <Col>
                    <ButtonGroup>
                        {buttonContent}
                    </ButtonGroup>
                </Col>
            </Row>
        </section>
    );
}

export default ReviewDetails;

