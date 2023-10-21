import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector, useSearchValueSelector } from 'hooks/selectorHooks';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
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

    const existingRating  = review ? review.rating : 'AVERAGE';
    const existingComment = review ? review.comment: '';

    const [rating, setRating] = useState(existingRating);
    const [comment, setComment] = useState(existingComment);

    let content = 'No review';

    if (review) {
        content = 'Review found';
    }

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
            <Form>
                <Form.Group className="mb-3" controlId="reviewFormComment">
                    <Form.Label>Enter Comments</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter comments here" value={comment} onChange={handleCommentChange} />
                </Form.Group>
                <Form.Group controlId="reviewFormRating">
                    <Form.Label>Select Rating</Form.Label>
                    <Form.Control as="select" value={rating} onChange={handleRatingChange}>
                        <option value="EXCELLENT">Excellent</option>
                        <option value="AVERAGE">Average</option>
                        <option value="POOR">Poor</option>
                    </Form.Control>
                </Form.Group>
                <ButtonGroup>
                    <Button onClick={onCancel}>{t('page.movie.review.cancel')}</Button>
                    <Button onClick={handleSave}>{t('page.movie.review.save')}</Button>
                </ButtonGroup>
            </Form>
            {content}
        </section>
    );
}

export default ReviewEditor;

