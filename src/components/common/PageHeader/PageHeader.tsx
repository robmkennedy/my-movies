import { ReactNode } from 'react';
import './PageHeader.scss';

type PageHeaderProps = {
    children: ReactNode;
};

/**
 * All pages have a similar headers. This component provides 
 * common functionality to allow all page headers to be the same.
 */
const PageHeader = ({ children }: PageHeaderProps) => {

    return (
        <section className='rk-page-header mt-lg-4 mb-4 mb-lg-5'>
            {children}
        </section>
    );
}

export default PageHeader;

