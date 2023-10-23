import { ReactNode } from 'react';
import './ButtonGroup.scss';

type ButtonGroupProps = {
    children: ReactNode
  }

/**
 * A simple layout component that lays out it's children inline
 * and provides a gap between them. 
 */
const ButtonGroup = ({children}: ButtonGroupProps) => {

    return (
        <div className='rk-button-group'>
            {children}
        </div>
    );
};

export default ButtonGroup;