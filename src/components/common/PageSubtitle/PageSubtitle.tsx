import './PageSubtitle.scss';

type PageSubtitleProps = {
    text: string,
};

/**
 * 
 * @param param0 
 * @returns 
 */
const PageSubtitle = ({ text }: PageSubtitleProps) => {

    return (
        <h2 className='rk-page-subtitle mt-lg-4 mb-4 mb-lg-5'>{text}</h2>
    );
}

export default PageSubtitle;