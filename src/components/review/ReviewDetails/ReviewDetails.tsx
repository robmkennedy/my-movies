import { useTranslation } from 'react-i18next';
import './ReviewDetails.scss';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Fragment, MouseEventHandler } from 'react';
import { Review } from 'utils/types';
import RatingStars from 'components/common/RatingStars/RatingStars';
import ButtonGroup from 'components/common/ButtonGroup/ButtonGroup';

type ReviewDetailsProps = {
    review: Review | undefined;
    onDelete: MouseEventHandler;
    onEdit: MouseEventHandler;
    onAdd: MouseEventHandler;
};

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

