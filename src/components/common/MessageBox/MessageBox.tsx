import './MessageBox.scss';

type MessageBoxProps = {
    message: string
};

const MessageBox = ({ message }: MessageBoxProps) => {

    return (
        <div className='rk-message-box'>
            <h4>{message}</h4>
        </div>
    );
}

export default MessageBox;