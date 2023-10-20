import { useEffect } from 'react';
import NavLink from 'components/controls/NavLink/NavLink';
import { NavbarBrand, Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { sidePanelClosed, sidePanelToggled } from 'state/slices/layoutSlice';
import { useAppDispatch } from 'hooks/stateHooks';
import { useLayoutSelector } from 'hooks/selectorHooks';
import { RouteID } from 'utils/types';
import routes from 'utils/routes';
import './Header.scss';

const Header = () => {

    const { t } = useTranslation();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { sidePanelOpen } = useLayoutSelector();

    // Close sidebar if the location changes
    useEffect(() => {
        dispatch(sidePanelClosed());
    }, [dispatch, location]);

    const handleToggle = () => {
        dispatch(sidePanelToggled());
    };

    return (
        <header id='header'>
            <Navbar className='navbar-dark' expand='lg' onToggle={handleToggle}>
                <Container>
                    <NavbarBrand>
                        <img src='/images/logo.svg' alt='My Movies Brand' />
                        {t('app.title')}
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls='navbarNav' />
                    <Navbar.Offcanvas id='navbarNav' show={sidePanelOpen}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>My Movies</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='me-auto'>
                                <NavLink path={routes.get(RouteID.SEARCH)!.path} label={t('header.link.search')} />
                                <NavLink path={routes.get(RouteID.HISTORY)!.path} label={t('header.link.history')} />
                                <NavLink path={routes.get(RouteID.RECOMMENDATIONS)!.path} label={t('header.link.recommendations')} />
                                <NavLink path={routes.get(RouteID.ABOUT)!.path} label={t('header.link.about')} />
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
