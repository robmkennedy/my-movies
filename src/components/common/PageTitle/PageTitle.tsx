import './PageTitle.scss';

type PageTitleProps = {
    title: string,
};

const PageTitle = ({ title }: PageTitleProps) => {

    return (
        <h1 className='rk-page-title mt-lg-4 mb-4 mb-lg-5'>{title}</h1>
    );
}

export default PageTitle;