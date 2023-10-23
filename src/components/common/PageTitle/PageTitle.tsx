import './PageTitle.scss';

type PageTitleProps = {
    title: string
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
const PageTitle = ({ title }: PageTitleProps) => {

    return (
        <h1 className='rk-page-title'>{title}</h1>
    );
}

export default PageTitle;