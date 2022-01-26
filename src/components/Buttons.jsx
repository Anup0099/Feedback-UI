import React from 'react';
import PropTypes from 'prop-types';
const Buttons = ({children,version,type,isDisabled}) => {
  return <button type={type} disabled={isDisabled} className={`btn btn-${version}`} >
{children}
  </button>;
};
Buttons.defaultProps = {
    version:'primary',
    type: 'button',
    isDisabled: false

}
Buttons.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Buttons;
