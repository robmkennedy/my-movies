import { ReactNode } from 'react';
import './PageHeader.scss';

type PageHeaderProps = {
    children: ReactNode;
};

const PageHeader = ({ children }: PageHeaderProps) => {

    return (
        <section className='rk-page-header mt-lg-4 mb-4 mb-lg-5'>
            {children}
        </section>
    );
}

export default PageHeader;

