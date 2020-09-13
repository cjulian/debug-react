'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Debug({
  className,
  value
}) {
  return /*#__PURE__*/React__default['default'].createElement("pre", {
    className: className
  }, JSON.stringify(value, null, 2));
}

Debug.propTypes = {
  className: PropTypes__default['default'].string,
  value: PropTypes__default['default'].object.isRequired
};

exports.default = Debug;
