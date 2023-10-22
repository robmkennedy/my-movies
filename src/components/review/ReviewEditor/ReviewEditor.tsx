import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector, useSearchValueSelector } from 'hooks/selectorHooks';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import { Button, Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useAppDispatch } from 'hooks/stateHooks';
import { addedToHistory, deletedFromHistory, updatedInHistory } from 'state/slices/historySlice';
import { Fragment, MouseEventHandler, useState } from 'react';
import ButtonGroup from 'components/common/ButtonGroup/ButtonGroup';
import './ReviewEditor.scss';
import { Review } from 'utils/types';

type ReviewEditorProps = {
    review: Review | undefined;
    onSave: Function;
    onCancel: MouseEventHandler;
};

const ReviewEditor = ({ review, onCancel, onSave }: ReviewEditorProps) => {
    const { t } = useTranslation();

    const existingRating = review ? review.rating : 'average';
    const existingComment = review ? review.comment : '';

    const [rating, setRating] = useState(existingRating);
    const [comment, setComment] = useState(existingComment);

    const handleSave = () => {
        onSave({ rating, comment });
    };

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRating(event.target.value);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    return (
        <section className='rk-review-editor'>
            <Row>
                <Col lg={8}>
                    <Form>
                        <Form.Group className='mb-3' controlId='reviewFormRating'>
                            <Form.Label>{t('page.movie.review.select.rating')}</Form.Label>
                            <Form.Control as='select' value={rating} onChange={handleRatingChange}>
                                <option value='excellent'>{t('review.rating.excellent')}</option>
                                <option value='good'>{t('review.rating.good')}</option>
                                <option value='average'>{t('review.rating.average')}</option>
                                <option value='poor'>{t('review.rating.poor')}</option>
                                <option value='terrible'>{t('review.rating.terrible')}</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='reviewFormComment'>
                            <Form.Label>{t('page.movie.review.enter.comments')}</Form.Label>
                            <Form.Control as='textarea' rows={3} placeholder={t('page.movie.review.comments.here')} value={comment} onChange={handleCommentChange} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <ButtonGroup>
                        <Button variant='outline-secondary' onClick={onCancel}>{t('page.movie.review.cancel')}</Button>
                        <Button variant='outline-primary' onClick={handleSave}>{t('page.movie.review.save')}</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </section >
    );
}

export default ReviewEditor;

