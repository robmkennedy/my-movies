import './PageTitle.scss';

type PageTitleProps = {
    title: string
};

const PageTitle = ({ title }: PageTitleProps) => {

    return (
        <h1 className='rk-page-title'>{title}</h1>
    );
}

export default PageTitle;