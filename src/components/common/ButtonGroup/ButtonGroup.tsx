import { ReactNode } from 'react';
import './ButtonGroup.scss';

type ButtonGroupProps = {
    children: ReactNode
  }

const ButtonGroup = ({children}: ButtonGroupProps) => {

    return (
        <div className='rk-button-group'>
            {children}
        </div>
    );
};

export default ButtonGroup;