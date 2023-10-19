import { useTranslation } from 'react-i18next';
import './ErrorBox.scss';

type ErrorBoxProps = {
    message?: string
};

const ErrorBox = ({ message }: ErrorBoxProps) => {

    const { t } = useTranslation();
    const displayMessage = message || t('common.error');

    return (
        <div className='rk-error-box'>
            <h4>{displayMessage}</h4>
        </div>
    );
}

export default ErrorBox;