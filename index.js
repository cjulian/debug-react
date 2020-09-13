import React from 'react';
import PropTypes from 'prop-types';

function Debug({ className, value }) {
  return <pre className={className}>{ JSON.stringify(value, null, 2) }</pre>;
}

Debug.propTypes = {
  className: PropTypes.string,
  value: PropTypes.object.isRequired
};

export default Debug;