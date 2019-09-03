import React from 'react';
import PropTypes from 'prop-types';
// import { TextField } from '@material-ui/core';
import Style from './style';

const CustomTextField = (props) => {
    const { textValue, error, disable } = props;
    const errorStyle = error ?  Style.error : {} ; 
     return (
            <div>
                <input type="text" value={textValue} />
                {
                    error && (
                        <span style={{...errorStyle}} >{error} </span>
                    )
                }
               
            </div>
        )
    }
CustomTextField.propTypes = {
    error: PropTypes.string,
    textValue: PropTypes.string.isRequired
}

export default CustomTextField;
