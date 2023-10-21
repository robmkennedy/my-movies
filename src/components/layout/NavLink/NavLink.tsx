import { NavLink as RouterNavLink } from 'react-router-dom';
import './NavLink.scss';

type NavLinkProps = {
    path: string;
    label: string;
};

const NavLink = ({ path, label }: NavLinkProps) => {

    return (
        <RouterNavLink className={`rk-nav-link nav-link`} to={path}>{label}</RouterNavLink>
    );
}

export default NavLink;