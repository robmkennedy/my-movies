import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const RadioToggle = () => {

    // let buttonList = null;
    // if (props.options) {
    //     buttonList = props.options.map(function (optionConfig, index) {
    //         return (<ToggleButton value={optionConfig.value} key={index} variant='outline-secondary'
    //                               disabled={optionConfig.disabled}>{optionConfig.label}</ToggleButton>);
    //     });
    // }

    // return (
    //     <div className={classes(props, 'sa-radio-toggle')}>
    //         <ButtonToolbar>
    //             <ToggleButtonGroup type="radio" name="options" size={props.size} value={props.value} onChange={props.onChange}>
    //                 {buttonList}
    //             </ToggleButtonGroup>
    //         </ButtonToolbar>
    //     </div>
    // );
};

RadioToggle.defaultProps = {
    size: 'sm',
    onChange: () => {}
};

export default RadioToggle;

