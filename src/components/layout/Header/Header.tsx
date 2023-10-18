// import MenuItem from 'components/controls/NavItem/NavItem';
import { NavbarBrand, Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { useAppDispatch } from 'hooks/stateHooks';
// import { useLayoutSelector } from 'hooks/selectorHooks';
// import { sidePanelClosed, sidePanelToggled } from 'state/slices/layoutSlice';
import routes from 'utils/routes';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t } = useTranslation();

    const location = useLocation();
    // const dispatch = useAppDispatch();
    // const { sidePanelOpen } = useLayoutSelector();

    // Close sidebar if the location changes
    // useEffect(() => {
    //     dispatch(sidePanelClosed());
    // }, [dispatch, location]);

    const handleToggle = () => {
        // dispatch(sidePanelToggled());
    };

    // Loop through the available 
    // const routeItemsMarkup = routes.map(({ labelText, routePath }, index) => {
    //     return (
    //         <MenuItem label={labelText} path={routePath} classNames='nav-link' key={index} />
    //     )
    // });

    return (
        <header id='header'>
            <Navbar className='navbar-dark' expand='lg' onToggle={handleToggle}>
                <Container>
                    <NavbarBrand>{t('app.title')}</NavbarBrand>
                    <Navbar.Toggle aria-controls='navbarNav' />
                    <Navbar.Offcanvas id='navbarNav' show={false}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Rob Kennedy
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='me-auto'>
                                {/* {routeItemsMarkup} */}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
