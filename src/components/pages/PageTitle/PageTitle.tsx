import { Container, Row } from 'react-bootstrap';


type PageTitleProps = {
    title: string,
};

/**
 * 
 * @param param0 
 * @returns 
 */
const PageTitle = ({ title }: PageTitleProps) => {

    return (
        <div className='rk-page-title'>
            <Container>
                <Row>
                    <h1 className='mt-lg-4 mb-4 mb-lg-5'>{title}</h1>
                </Row>
            </Container>
        </div>
    );
}

export default PageTitle;