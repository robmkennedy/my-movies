import './MessageBox.scss';

type MessageBoxProps = {
    message: string
};

const MessageBox = ({ message }: MessageBoxProps) => {

    return (
        <div className='rk-message-box'>
            <h5>{message}</h5>
        </div>
    );
};

export default MessageBox;